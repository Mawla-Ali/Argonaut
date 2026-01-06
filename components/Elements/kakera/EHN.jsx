import Navhp from "./NHP";
import Tombol from "./NHP";

const Navbar = (props) => {
  return (
    <div className="relative">
      <div className="mx-16 flex grid-auto-fit">
        <a href="#">
          <h1 className="font-bold text-2xl -ml-14 md:text-5xl text-white md:mr-40 md:-ml-2 ">ARGONAUT</h1>
        </a>
        {/* Navbar Start */}
        <Navhp className="block md:hidden" />
        <div className="hidden md:block lg:block">
          <div
            className="
    flex flex-nowrap items-center ml-5 mt-3
    gap-2 md:gap-4 lg:gap-6
    whitespace-nowrap
    md:text-xl lg:text-2xl
  "
          >
            <a
              href="#"
              className="relative font-bold text-white md:text-[clamp(1rem,1.4vw,1.8rem)] 
             after:absolute after:left-1/2 after:-bottom-1
             after:h-0.5 after:w-3/4 after:-translate-x-1/2 after:bg-white
             after:transition-transform after:duration-300 after:scale-x-0 after:origin-center
            hover:after:scale-x-100"
            >
              Home
            </a>

            <a
              href="#About"
              className="relative font-bold text-white md:text-[clamp(1rem,1.4vw,1.8rem)]
             after:absolute after:left-1/2 after:-bottom-1
             after:h-0.5 after:w-3/4 after:-translate-x-1/2 after:bg-white
             after:transition-transform after:duration-300 after:scale-x-0 after:origin-center
            hover:after:scale-x-100"
            >
              About Us
            </a>
            <a
              href="#Portofolio"
              className="relative font-bold text-white md:text-[clamp(1rem,1.4vw,1.8rem)]
             after:absolute after:left-1/2 after:-bottom-1
             after:h-0.5 after:w-3/4 after:-translate-x-1/2 after:bg-white
             after:transition-transform after:duration-300 after:scale-x-0 after:origin-center
            hover:after:scale-x-100"
            >
              Portofolio
            </a>
            <a
              href="#Pricing"
              className="relative font-bold text-white md:text-[clamp(1rem,1.4vw,1.8rem)]
             after:absolute after:left-1/2 after:-bottom-1
             after:h-0.5 after:w-3/4 after:-translate-x-1/2 after:bg-white
             after:transition-transform after:duration-300 after:scale-x-0 after:origin-center
            hover:after:scale-x-100"
            >
              Pricing
            </a>
          </div>
        </div>

        {/* Navbar End */}
        {/* Sosmed Start*/}
        <div className="hidden lg:flex lg:gap-x-6 lg:ml-52">
          {/* <div className="content-center inline-flex justify-center ml-36 mt-1 space-x-1 "> */}
          <a href="#" className="">
            <img src="Img/Hero/lk.svg" alt="" className="w-[clamp(28px,3vw,48px)] h-[clamp(28px,3vw,48px)] mt-1" />
          </a>
          <a href="https://www.instagram.com/argonaut_657673/">
            <img src="Img/Hero/ig.svg" alt="" className="w-[clamp(28px,3vw,48px)] h-[clamp(28px,3vw,48px)] mt-1" />
          </a>
          <a href="https://github.com/Mawla-Ali">
            <img src="Img/Hero/gt.svg" alt="" className="w-[clamp(28px,3vw,48px)] h-[clamp(28px,3vw,48px)] mt-1" />
          </a>
          {/* </div> */}
          {/* Sosmed End */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
