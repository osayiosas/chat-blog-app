"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type contextType = {
  loadig: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  loadig: false,
  setLoading: () => {},
};

export const GlobalContext = createContext<contextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loadig, setLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ loadig, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}
