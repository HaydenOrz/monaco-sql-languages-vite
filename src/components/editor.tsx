import * as monaco from "monaco-editor";
import { useEffect, useRef } from "react";
import { LanguageIdEnum } from "monaco-sql-languages";
import 'monaco-sql-languages/out/esm/flinksql/flinksql.contribution';

export const Editor = () => {
  const ref = useRef<any>();

  useEffect(() => {
    monaco.editor.create(ref.current, {
      language: LanguageIdEnum.FLINK,
    })
  }, [])

  return (
    <div
      ref={ref}
      style={{ height: '100%',width: '100%' }}
    />
  );
};
