import bannerImg from "../assets/banner.png";

function Banner() {
  return (
    <>
      <div className="flex justify-center h-64">
        <img src={bannerImg} alt="" />
      </div>
    </>
  );
}
export default Banner;
