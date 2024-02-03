import React from "react";
import Section from "./Section";

const Frameworks = ({
  framworks,
}: {
  framworks: { name: string; level: number }[];
}) => {
  return (
    <Section name="frameworks">
      <h2>Frameworks</h2>
      <ul>
        {framworks.map((framework) => (
          <li key={framework.name}>
            {framework.name} ({framework.level})
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Frameworks;
