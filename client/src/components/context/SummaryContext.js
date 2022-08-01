import { createContext, useState } from "react";

export const SummaryContext = createContext();

const SummaryProvider = (props) => {
  const [summary, setSumary] = useState({});

  return (
    <SummaryContext.Provider value={{summary, setSumary}}>{props.children}</SummaryContext.Provider>
  );
};
export default SummaryProvider;
