"use client";

import RequestLoader from "@/components/loaders/RequestLoader";
import { createContext, useState } from "react";

export const RequestSpinnerContext = createContext();

const RequestSpinnerProvider = ({ children }) => {
  const [requested, setRequested] = useState(false);
  return (
    <RequestSpinnerContext.Provider value={{ setRequested }}>
      {requested && <RequestLoader />}
      {children}
    </RequestSpinnerContext.Provider>
  );
};

export default RequestSpinnerProvider;
