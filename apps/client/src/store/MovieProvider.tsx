import { createContext } from "preact";
import { PropsWithChildren, useState } from "preact/compat";

export interface MovieCoordinate {
  x: number;
  y: number;
}

export interface BackdropContextType {
  coordinate: MovieCoordinate;
  setCoordinate: (x: number, y: number) => void;
}

export const MovieContext = createContext<BackdropContextType>({
  coordinate: { x: -1, y: -1 },
  setCoordinate: () => {},
});

export function MovieProvider({ children }: PropsWithChildren) {
  const [coordinate, setCoordinate] = useState({ x: -1, y: -1 });

  return (
    <MovieContext.Provider
      value={{
        coordinate,
        setCoordinate: (x, y) => setCoordinate({ x, y }),
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
