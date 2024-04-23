import Navbar from "../Components/Navbar";
import SubNavbar from "../Components/SubNavbar";
import RowComponent from "../Components/RowComponent";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";

function Home() {
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
