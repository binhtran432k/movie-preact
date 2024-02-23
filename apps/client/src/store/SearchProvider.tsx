import { createContext } from "preact";
import { PropsWithChildren } from "preact/compat";
import { useState } from "preact/hooks";
import { useLocation, useSearch } from "wouter";

interface SearchContextType {
  value: string;
  setValue: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  value: "",
  setValue: () => {},
});

export function SearchProvider({ children }: PropsWithChildren) {
  const url = new URLSearchParams(useSearch());
  const [value, setValue] = useState(url.get("q") ?? "");
  const [, setLocation] = useLocation();
  return (
    <SearchContext.Provider
      value={{
        value,
        setValue: (v) => {
          url.set("q", v);
          setLocation(`/search${v ? `?${url.toString()}` : ""}`);
          setValue(v);
        },
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
