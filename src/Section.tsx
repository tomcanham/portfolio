import React from "react";

const Section = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return <section className={name}>{children}</section>;
};

export default Section;
