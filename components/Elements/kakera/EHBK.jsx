import Button from "../Button";

//Elemen Bubble Kalimat
const Ebk = (props) => {
  return (
    <div className="relative px-10 mt-4 md:mt-20 lg:px-20 lg:-mt-5">
      {/* Kalimat dan Gambar*/}
      <div className="flex justify-beetwen items-center">
        <div className="bg-[#1485DB] drop-shadow-xl/50 -mt-2 rounded-tl-6 my-16 w-xl rounded-4xl md:ml-5 lg:-ml-9">
          <div className="">
            <div className="p-9 -mt md:p-7 lg:p-10 ">
              <h1 className="font-bold text-white text-2xl md:text-5xl">Where</h1>
              <h1 className="font-bold text-[#00FFC9] text-2xl md:text-5xl">Professionalism</h1>
              <h1 className="font-bold text-white text-2xl md:text-5xl">
                Meets <span className="font-bold text-[#00FFC9] text-2xl md:text-5xl">Personality</span>
              </h1>
              <p className="text-white text-xl md:text-2xl mt-6">We assist you in creating professional websites with modern, interactive, and responsive designs. Turning complex ideas into clear and effective solutions.</p>
            </div>
          </div>
        </div>
        <div className="ml-24 hidden md:flex">
          <img src="Img/Hero/Ilus(1).png" alt="" className="max-w-md lg:max-w-lg lg:ml-24" />
        </div>
      </div>
      <div className="p-3 -mt-10 justify-center drop-shadow-xl md:ml-6">
        <Button>Free Consult</Button>
      </div>
    </div>
  );
};

export default Ebk;
