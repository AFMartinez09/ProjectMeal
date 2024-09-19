import axios from "axios";
import { useEffect, useState } from "react";

export default function useHttpData<T>( url: string ) {
  const [ data, setData ] = useState<T[]>([]);
  const [ loading, setLoading] = useState(false);
  
  useEffect (() => {
    //  ignore help us to avoid rerender (twice) our component 
    let ignore = false;
    // controller allow us to call once not twice (data API)
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    axios
      .get<{ meals: T[] }>(url, { signal })
      .then(({ data }) => {
        // if ignore is false do setData
        if(!ignore){
          setData(data.meals);
        }})
      .finally(() => {
        if(!ignore){
          setLoading(false);
        }
      });
      return () => {{
        ignore = true;
        controller.abort();
      }}
  },[]);
  // Al exportar setData podemos tener acceso a los datos de useHttpData
  return { loading, data, setData, setLoading}
}