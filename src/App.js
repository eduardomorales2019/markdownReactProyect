import "./index.css";
import React from "react";
import ReactMarkDown from "react-markdown";

function App() {
  const [markdown, setMarkDown] = React.useState("## Markdown Review");

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          input="text"
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>

        <article className="result">
          <ReactMarkDown>{markdown}</ReactMarkDown>
        </article>
      </section>
    </main>
  );
}

export default App;
