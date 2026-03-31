# softdinlibreriajs

Colección de enumeraciones usadas por Softdin.

## Instalación

```bash
npm i softdinlibreriajs
```

## Uso

```js
const { EnumTipoIdentificacion } = require('softdinlibreriajs');

const item = EnumTipoIdentificacion.getById(EnumTipoIdentificacion.CC);
console.log(item);
```

## Auditoría (repositorio)

```bash
npm test
```

Imprime un reporte de inconsistencias comunes (p. ej. constantes sin `descriptions`, IDs duplicados, etc.).
