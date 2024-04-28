import Navbar from "../Components/Navbar";
import SubNavbar from "../Components/SubNavbar";
import RowComponent from "../Components/RowComponent";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import { db } from "../firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
function Home() {
  const getData = async () => {
    const usersCollectionRef = collection(db, "products");
    const data = await getDocs(usersCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log("Filtered data:", filteredData[0]);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Banner />
      <RowComponent title={"Recommendations.."} />
      <RowComponent title={"Near your place."} />
      <Footer />
    </div>
  );
}

export default Home;
