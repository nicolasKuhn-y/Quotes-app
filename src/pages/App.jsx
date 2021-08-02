import React from "react";

import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

import { Loader } from "../components/Loader";
import { Quote } from "../components/Quote";
import { ButtonContainer } from "../components/ButtonContainer";
import { CharacterImage } from "../components/CharacterImage";

export const App = () => {
  const { data, isLoading } = useFetch(`https://breakingbadapi.com/api/quotes`);
  const { counter: quoteNumber, increment, decrement, reset } = useCounter();

  const { author, quote } = !!data && data[quoteNumber];
  const totalQuotes = !!data && data.length - 1;

  return (
    <main className="quote__Container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CharacterImage query={author} />

          <Quote author={author} quote={quote}>
            <ButtonContainer
              quoteNumber={quoteNumber}
              totalQuotes={totalQuotes}
              actions={[decrement, reset, increment]}
            />
          </Quote>
        </>
      )}
    </main>
  );
};