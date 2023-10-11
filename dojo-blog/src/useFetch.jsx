import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch data for that resource'); // Response handling
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => console.log(err.message)); // Server connect or not err handling
    }, 1000);
  }, [url]); // Use an empty dependency array if you want this effect to run once

  return { data, isPending };
};

export default useFetch;
