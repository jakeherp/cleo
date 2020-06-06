import { useState, useEffect } from 'react';
import axios from 'axios';

export default (url: string) => {
  const [response, setResponse] = useState<any[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setResponse(data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  return { response, error };
};