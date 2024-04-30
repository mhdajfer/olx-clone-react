import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/Config";
import { collection, getDocs } from "firebase/firestore";

export const CarContext = createContext();

// eslint-disable-next-line react/prop-types
function DataContextProvider({ children }) {
  const [vehicleData, setVehicleData] = useState([]);
  const getData = async () => {
    const usersCollectionRef = collection(db, "products");
    const data = await getDocs(usersCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setVehicleData(filteredData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CarContext.Provider value={{ vehicleData }}>
      {children}
    </CarContext.Provider>
  );
}

export default DataContextProvider;
