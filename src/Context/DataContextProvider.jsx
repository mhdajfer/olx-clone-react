import { createContext } from "react";
import { carData } from "../Static/Data";

export const CarContext = createContext();

// eslint-disable-next-line react/prop-types
function DataContextProvider({ children }) {
  return <CarContext.Provider value={carData}>{children}</CarContext.Provider>;
}

export default DataContextProvider;
