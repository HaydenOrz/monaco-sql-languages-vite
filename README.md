# A Minimal Example To Reproduce the issue with monaco-sql-languages in Vite

## Dev: cheat sheet
+ PackageManager: `npm`
+ Install: `npm i`
+ Run: `npm run dev`

## Details of the problem
### Importing the worker file directly from monaco-sql-languages gets an error：
```typescript
import FlinkSQLWorker from 'monaco-sql-languages/out/esm/flinksql/flinksql.worker?worker'; 
```
![image](https://github.com/HaydenOrz/monaco-sql-languages-vite/assets/58289241/8aa4f12d-4fdf-455b-90e4-166f636a661b)


### create a new file and import the worker file internally, it will work well：
src/workerTransform/flinksql.worker.ts
```typescript
import 'monaco-sql-languages/out/esm/flinksql/flinksql.worker';
```

use the worker
```typescript
import FlinkSQLWorker from './workerTransform/flinksql.worker?worker';
```

![image](https://github.com/HaydenOrz/monaco-sql-languages-vite/assets/58289241/2aaded6d-1bba-430e-8b4a-20f5a8a51a9f)
