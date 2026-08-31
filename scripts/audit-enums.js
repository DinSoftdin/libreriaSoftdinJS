const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const srcDir = path.join(repoRoot, "src");

function isPlainObject(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    (Object.getPrototypeOf(value) === Object.prototype ||
      Object.getPrototypeOf(value) === null)
  );
}

function getEnumConstantIds(enumClass) {
  const ignore = new Set(["length", "name", "prototype", "descriptions"]);
  const keys = Object.getOwnPropertyNames(enumClass).filter(
    (k) => !ignore.has(k),
  );
  const numericKeys = [];
  const values = new Map();

  for (const key of keys) {
    const value = enumClass[key];
    if (typeof value === "number") {
      numericKeys.push(key);
      values.set(key, value);
    }
  }

  return { keys: numericKeys, values };
}

function auditEnum(enumName, enumClass) {
  const issues = [];
  const warnings = [];

  if (typeof enumClass !== "function") {
    issues.push("Export no es una clase/función");
    return { enumName, issues, warnings };
  }

  const descriptions = enumClass.descriptions;
  if (!Array.isArray(descriptions)) {
    issues.push("Falta `static descriptions` (no es Array)");
    return { enumName, issues, warnings };
  }

  const invalidItems = descriptions
    .map((item, index) => ({ item, index }))
    .filter(
      ({ item }) =>
        !isPlainObject(item) ||
        typeof item.id !== "number" ||
        typeof item.description !== "string",
    );

  if (invalidItems.length > 0) {
    issues.push(`Hay ${invalidItems.length} items inválidos en descriptions`);
  }

  const ids = descriptions.map((d) => d.id);
  const idCounts = new Map();
  for (const id of ids) idCounts.set(id, (idCounts.get(id) || 0) + 1);
  const duplicatedIds = [...idCounts.entries()]
    .filter(([, count]) => count > 1)
    .map(([id, count]) => ({ id, count }));
  if (duplicatedIds.length > 0) {
    // Error y no advertencia: el id se persiste (concepto_novedades.variablesistema) y el
    // resolver de conceptos consulta por ese valor quedandose con la primera coincidencia,
    // asi que dos constantes con el mismo id le hacen elegir el concepto equivocado en
    // silencio. Ver DinSoftdin/libreriaSoftdinJS#2.
    issues.push(
      `IDs duplicados en descriptions: ${duplicatedIds.map((d) => `${d.id}x${d.count}`).join(", ")}`,
    );
  }

  const { values: constantValues } = getEnumConstantIds(enumClass);

  const porId = new Map();
  for (const [nombre, id] of constantValues.entries()) {
    if (!porId.has(id)) porId.set(id, []);
    porId.get(id).push(nombre);
  }
  const constantesRepetidas = [...porId.entries()].filter(([, ns]) => ns.length > 1);
  if (constantesRepetidas.length > 0) {
    issues.push(
      `Constantes que comparten id: ${constantesRepetidas
        .map(([id, ns]) => `${id} = ${ns.join(" / ")}`)
        .join("; ")}`,
    );
  }

  const constantIds = new Set([...constantValues.values()]);
  const descriptionIds = new Set(ids);

  const constantsMissingInDescriptions = [...constantIds].filter(
    (id) => !descriptionIds.has(id),
  );
  if (constantsMissingInDescriptions.length > 0) {
    issues.push(
      `Constantes sin entrada en descriptions: ${constantsMissingInDescriptions.join(", ")}`,
    );
  }

  const descriptionsMissingAsConstant = [...descriptionIds].filter(
    (id) => !constantIds.has(id),
  );
  if (descriptionsMissingAsConstant.length > 0) {
    warnings.push(
      `Descriptions con id sin constante: ${descriptionsMissingAsConstant.join(", ")}`,
    );
  }

  return { enumName, issues, warnings };
}

function main() {
  const strict = process.argv.includes("--strict");
  const srcFiles = fs
    .readdirSync(srcDir)
    .filter((file) => file.endsWith(".js"))
    .sort((a, b) => a.localeCompare(b));

  const results = [];

  for (const file of srcFiles) {
    if (file === "index.js") continue;
    const enumName = path.basename(file, ".js");

    try {
      const enumClass = require(path.join(srcDir, file));
      results.push(auditEnum(enumName, enumClass));
    } catch (error) {
      results.push({
        enumName,
        issues: [
          `No se pudo cargar el módulo: ${error && error.message ? error.message : String(error)}`,
        ],
        warnings: [],
      });
    }
  }

  const total = results.length;
  const withIssues = results.filter((r) => r.issues.length > 0);
  const withWarnings = results.filter((r) => r.warnings.length > 0);

  if (withIssues.length === 0 && withWarnings.length === 0) {
    console.log(`OK: ${total} enums auditados sin hallazgos`);
    return;
  }

  console.log(`Auditados: ${total}`);
  console.log(`Con errores: ${withIssues.length}`);
  console.log(`Con advertencias: ${withWarnings.length}`);

  for (const r of results) {
    if (r.issues.length === 0 && r.warnings.length === 0) continue;
    console.log(`\n[${r.enumName}]`);
    for (const issue of r.issues) console.log(`- ERROR: ${issue}`);
    for (const warning of r.warnings) console.log(`- WARN: ${warning}`);
  }

  if (strict && withIssues.length > 0) {
    process.exitCode = 1;
  }
}

main();
