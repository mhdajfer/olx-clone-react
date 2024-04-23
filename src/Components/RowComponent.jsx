import { carData } from "../Static/Data";
import ItemCard from "./ItemCard";

function RowComponent() {
  console.log(carData);
  return (
    <>
      <h1 className="mt-6 font-semibold text-xl">Recommending</h1>
      <div className=" h-fit flex mt-4">
        {carData.map((car, i) => (
          <div key={i}>
            <ItemCard car={car} />
          </div>
        ))}
      </div>
    </>
  );
}

export default RowComponent;
