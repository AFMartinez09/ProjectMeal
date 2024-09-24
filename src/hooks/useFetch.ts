import axios from "axios";
import { useState } from "react";

export default <T>() => {
  const [loading, setLoading] = useState(false);
  const [ data, setData ] = useState<T>();

  // Allow to get data
  const fetch = (url: string) => {
    setLoading(true);
    // the value (meals) comes from an array
    axios.get(url)
      .then(({ data }) => setData(data.meals[0]))
      .finally(() => setLoading(false));

  };

  return { loading, data, fetch };
};