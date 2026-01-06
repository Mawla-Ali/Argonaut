import Ebk from "../Elements/kakera/EHBK";
import Navbar from "../Elements/kakera/EHN";

const Hero = (props) => {
  return (
    <div className="">
      <div className=" md:bg-[#14C5DB] min-h-screen md:bg-linear-to-br md:from-[#1446DB] w-full md:via-[#1485DB] md:to-[#14C5DB] relative bg-[#145ddb] ">
        <div className="absolute inset-0 bg-[url('../../public/Img/Hero/pattern.png')] opacity-75 pointer-events-none" />
        <nav className=" p-5 border-b-4 border-white fixed top-0 z-50 w-full md:bg-[#1446DB] md:bg-linear-to-l md:from-[#1485DB] md:to-[#1446DB] bg-[#1446DB] ">
          <Navbar />
        </nav>
        <div className="py-24">
          <Ebk />
        </div>
      </div>
    </div>
  );
};

export default Hero;
