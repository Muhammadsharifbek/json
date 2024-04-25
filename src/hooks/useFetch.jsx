import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }

        const data = await req.json();
        setData(data);
        setLoader(false);
      } catch (err) {
        setLoader(false);
        setError(err.message);
      }
    };
    fetchData(data);
  }, [url]);

  return { data, loader, error };
}
