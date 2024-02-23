import { createContext } from "preact";
import { PropsWithChildren } from "preact/compat";
import { useState } from "preact/hooks";

interface SearchContextType {
  value: string;
  setValue: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  value: "",
  setValue: () => {},
});

export function SearchProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState("");
  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
}
