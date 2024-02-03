import React from "react";
import Section from "./Section";

const Technologies = ({
  technologies,
}: {
  technologies: { name: string; level: number }[];
}) => {
  return (
    <Section name="technologies">
      <h2>Technologies</h2>
      <ul>
        {technologies.map((technology) => (
          <li key={technology.name}>
            {technology.name} ({technology.level})
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Technologies;
