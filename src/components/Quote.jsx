import React from "react";

export const Quote = ({ author, quote, children }) => {
  return (
    <section className="quote">
      <div>
        <h1> {author}</h1>
        <p>{quote}</p>
      </div>

      {children}
    </section>
  );
};
