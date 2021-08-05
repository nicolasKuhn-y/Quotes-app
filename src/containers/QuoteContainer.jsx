import React from "react";

import { useCounter } from "../hooks/useCounter";

import { ButtonContainer } from "./ButtonContainer";

import { Button } from "../components/Button";
import { CharacterImage } from "../components/CharacterImage";
import { Quote } from "../components/Quote";

export const QuoteContainer = ({ data }) => {
  const { counter: quoteNumber, increment, decrement, reset } = useCounter();

  const { author, quote } = !!data && data[quoteNumber];
  const totalQuotes = !!data && data.length - 1;

  return (
    <section className="quote__Container">
      <CharacterImage query={author} />

      <Quote author={author} quote={quote}>
        <ButtonContainer>
          <Button onClickAction={decrement} disabled={quoteNumber === 0}>
            &larr;
          </Button>

          <Button onClickAction={reset}>Reset</Button>

          <Button
            onClickAction={increment}
            disabled={quoteNumber === totalQuotes}
          >
            &rarr;
          </Button>
        </ButtonContainer>
      </Quote>
    </section>
  );
};
