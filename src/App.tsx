import React, { useState } from "react";
import "./App.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-plsql";

const initialCode = `SELECT home_id, home_type, bathrooms
FROM homes
WHERE home_id < 500
AND home_type = 'two-storey'
ORDER BY home_type ASC, bathrooms DESC;
`;

function App() {
  const [code, setCode] = useState<string>(initialCode);

  return (
    <main className="container">
      <div className="container__content">
        <h1>exponent-demo-sql-editor</h1>
        <p>A simple web-based PLSQL editor with syntax highlighting.</p>
        <div className="container_editor_area">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.plsql)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
