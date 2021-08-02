import { useState, useEffect } from "react";

export const useFetch = (url) => {
  if (!url) throw Error("Url is required");

  const [dataStore, setDataStore] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    const getFetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setDataStore({
        data: [...data],
        isLoading: false,
      });
    };

    getFetchData();
  }, [url]);

  return dataStore;
};
