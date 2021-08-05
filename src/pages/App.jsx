import React from "react";

import { useFetch } from "../hooks/useFetch";

import { QuoteContainer } from "../containers/QuoteContainer";

import { Loader } from "../components/Loader";

export const App = () => {
  const { data, isLoading } = useFetch(`https://breakingbadapi.com/api/quotes`);

  return (
    <main className=" animate__animated animate__fadeInUp">
      {isLoading ? <Loader /> : <QuoteContainer data={data} />}
    </main>
  );
};
