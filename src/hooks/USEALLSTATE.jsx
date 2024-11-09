import { useState } from "react";

export function useAllState() {
  const [data, setData] = useState();
  return {
    data,
    setData,
  };
}
