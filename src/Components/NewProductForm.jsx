import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { ImgDb, db } from "../firebase/Config";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";

function NewProductForm() {
  const [price, setPrice] = useState("");
  const [modelName, setModelName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [place, setPlace] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!price || !modelName || !year || !place || !image) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const ImgRef = ref(ImgDb, `images/${image.name}`);
      const data = await uploadBytes(ImgRef, image);
      const url = await getDownloadURL(data.ref);

      // Adding data to the database
      const prodDoc = collection(db, "products");
      await addDoc(prodDoc, {
        model: modelName,
        price: price,
        year: year,
        place: place,
        image: url,
      });
      toast.success("Product added successfully");
      setPlace("");
      setPrice("");
      setYear("");
      setImage("");
    } catch (error) {
      console.error(
        "Error uploading image or adding data to the database: ",
        error
      );
      toast.error("Failed to upload image or add data to the database");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="modelName"
            className="block text-sm font-medium text-gray-700"
          >
            Model Name
          </label>
          <input
            type="text"
            id="modelName"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700"
          >
            Year
          </label>
          <input
            type="number"
            id="year"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="place"
            className="block text-sm font-medium text-gray-700"
          >
            Place
          </label>
          <input
            type="text"
            id="place"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <img
          src={image ? URL.createObjectURL(image) : ""}
          alt="image"
          className="h-48"
        />
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            className="mt-1"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default NewProductForm;
