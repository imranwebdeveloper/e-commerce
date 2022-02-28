import React from "react";

const Section = ({ bg, children }) => {
  const customClass = "container mx-auto py-8 bg-white px-4 md:px-8  lg:px-12";
  return (
    <section className={`${customClass} ${bg ? "bg-white" : "bg-transparent"}`}>
      {children}
    </section>
  );
};

export default Section;
