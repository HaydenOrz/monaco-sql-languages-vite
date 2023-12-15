import 'monaco-sql-languages/out/esm/monaco.contribution';

import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';

/** ===== Try toggling the import of FlinkSQLWorker to debug */ 

// import worker file directly, causes an anomaly
import FlinkSQLWorker from 'monaco-sql-languages/out/esm/flinksql/flinksql.worker?worker'; 

// import worker file in src, works well
// import FlinkSQLWorker from './workerTransform/flinksql.worker?worker';

(self as any).MonacoEnvironment = {
	getWorker(_: any, label: string) {
		if (label === 'flinksql') {
			return new FlinkSQLWorker();
		}
		if(label === 'json') {
			return new JsonWorker();
		}
		return new EditorWorker();
	}
};