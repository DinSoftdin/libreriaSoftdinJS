const fs = require("fs");
const path = require("path");

/**
 * Comprueba que `src/index.js` —el `main` del paquete— exporte todos los enums de
 * `src/`, y que no exporte ninguno que no exista.
 *
 * Existe porque se habia desincronizado: `EnumClaseRiesgoActividad` y
 * `EnumPermisosFormulario` estaban en src pero no en el indice, asi que
 * `require("softdinlibreriajs").EnumClaseRiesgoActividad` devolvia undefined. No se
 * habia notado porque los consumidores importan por ruta directa
 * (`softdinlibreriajs/src/EnumX.js`) y esa via no pasa por el indice.
 *
 * `audit-enums.js` no lo cubre: salta index.js a proposito, porque no es un enum.
 */

const repoRoot = path.resolve(__dirname, "..");
const srcDir = path.join(repoRoot, "src");

function main() {
  const enums = fs
    .readdirSync(srcDir)
    .filter((file) => file.startsWith("Enum") && file.endsWith(".js"))
    .map((file) => path.basename(file, ".js"))
    .sort((a, b) => a.localeCompare(b));

  let indice;
  try {
    indice = require(path.join(srcDir, "index.js"));
  } catch (error) {
    console.error(`No se pudo cargar src/index.js: ${error && error.message ? error.message : String(error)}`);
    process.exit(1);
  }

  const exportados = new Set(Object.keys(indice));
  const faltan = enums.filter((nombre) => !exportados.has(nombre));
  const sobran = [...exportados].filter((nombre) => !enums.includes(nombre));

  if (faltan.length === 0 && sobran.length === 0) {
    console.log(`index.js exporta los ${enums.length} enums de src/.`);
    return;
  }

  if (faltan.length > 0) {
    console.error(`Enums en src/ que index.js no exporta (${faltan.length}):`);
    for (const nombre of faltan) {
      console.error(`  - ${nombre}`);
    }
  }
  if (sobran.length > 0) {
    console.error(`Nombres que index.js exporta y no existen en src/ (${sobran.length}):`);
    for (const nombre of sobran) {
      console.error(`  - ${nombre}`);
    }
  }
  process.exit(1);
}

main();
