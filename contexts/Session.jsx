// "use client";
import { SessionProvider } from "next-auth/react";

// import { createContext } from "react";
// export const HomeContext = createContext();

const SessionWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
