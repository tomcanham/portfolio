import React from "react";
import Section from "./Section";

const Languages = ({
  languages,
}: {
  languages: { name: string; level: number }[];
}) => {
  return (
    <Section name="languages">
      <h2>Programming Languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>
            {language.name} ({language.level})
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Languages;
