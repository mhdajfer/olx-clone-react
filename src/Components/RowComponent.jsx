import { useContext } from "react";
import ItemCard from "./ItemCard";
import { CarContext } from "../Context/DataContextProvider";

// eslint-disable-next-line react/prop-types, no-unused-vars
function RowComponent({ title }) {
  const { vehicleData } = useContext(CarContext);

  return (
    <>
      <h1 className="mt-6 font-semibold text-xl">{title}</h1>
      <div className=" h-fit flex mt-4">
        {!vehicleData.length ? (
          <h1>Nothing to sell!!...</h1>
        ) : (
          vehicleData.map((car, i) => (
            <div key={i}>
              <ItemCard car={car} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default RowComponent;
