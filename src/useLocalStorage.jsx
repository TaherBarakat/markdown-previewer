import { useEffect, useState } from "react";

export default function useLocalStorage(key) {
     const [data, setData] = useState(localStorage.getItem(key) || "");
     console.log(key);
     useEffect(() => {
          localStorage.setItem(key, data);
     }, [data, key]);
     return [data, setData];
}
