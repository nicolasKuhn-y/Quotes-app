import React from "react";

export const ButtonContainer = ({ quoteNumber, totalQuotes, actions }) => {

    const [decrement, reset, increment] = actions;



  return (
    <div className="quote-btns__wrapper">
      <button
        className="btn-quote"
        onClick={decrement}
        disabled={quoteNumber === 0}
      >
        &larr;
      </button>

      <button className="btn-quote" onClick={reset}>
        Reset
      </button>

      <button
        onClick={increment}
        className="btn-quote"
        disabled={quoteNumber === totalQuotes}
      >
        &rarr;
      </button>
    </div>
  );
};
