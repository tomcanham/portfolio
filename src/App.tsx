import React from "react";

import "./app.scss";
import data from "./assets/data.json";

import Resume from "./Resume";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Technologies from "./Technologies";

function byName(a: { name: string }, b: { name: string }) {
  return a.name.localeCompare(b.name);
}

function byProficiency(
  a: { name: string; level: number },
  b: { name: string; level: number }
) {
  const result = b.level - a.level;
  if (result === 0) {
    return a.name.localeCompare(b.name);
  }

  return result;
}

const App = () => {
  return (
    <div>
      <h1>
        <strong>Tom Canham</strong>
      </h1>
      <Resume jobs={data.jobs} />
      <Languages languages={data.languages.sort(byProficiency)} />
      <Frameworks framworks={data.frameworks.sort(byProficiency)} />
      <Technologies technologies={data.technologies.sort(byProficiency)} />
    </div>
  );
};

export default App;
