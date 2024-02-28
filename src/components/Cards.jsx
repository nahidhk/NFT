import image1 from "../../public/bit.png";
import image2 from "../../public/bit2.png";
import image3 from "../../public/bit3.png";
import image4 from "../../public/Vector-1.png";
import image5 from "../../public/Vector-2.png";
import image6 from "../../public/Vector.png";

export default function Card() {
  return (
    <>
      <main className=" container mx-auto  pt-10  px-8 lg:px-20">
        <div className="text-color flex flex-col justify-between items-center gap-10 lg:flex-row lg:items-start">
          <div className=" border-2 border-cyan-700 md:min-w-[400px] min-w-[300px] w-full flex-1 mt-8 p-8 order-2 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 ">
            <div className="   mb-7 pb-7 flex items-center justify-center">
              <img src={image2} alt="" className="rounded-3xl w-20 h-20" />
            </div>
            <div className="  space-y-2 md:space-y-3 mb-10 md:mb-16 flex flex-col place-content-center place-items-center">
              <h1 className=" text-[30px] md:text-[38px] lg:text-[45px]">Bitcoin</h1>
              <h1 className=" text-[30px] md:text-[38px] lg:text-[45px] dollar">2.544,32 USD</h1>
              <img src={image4} alt="" />
            </div>

            <a
              href="#/"
              className="flex justify-center items-center gradient-background rounded-ss-xl rounded-ee-xl py-5 px-4 text-center text-white text-xl"
            >
              Buy Now
            </a>
          </div>
          <div className="border-4  border-s-cyan-300 border-emerald-500 md:min-w-[400px] min-w-[300px] w-full flex-1 p-8 order-1 shadow-xl rounded-3xl   border-color-v1 green-gradient-background  sm:w-96 lg:w-full lg:order-2 lg:mt-0">
            <div className="mb-8 pb-8 flex items-center justify-center">
              <img src={image1} alt="" className="rounded-3xl w-20 h-20" />
            </div>
            <div className=" space-y-4 md:space-y-3 mb-10 md:mb-16 flex flex-col place-content-center place-items-center">
              <h1 className=" text-[30px] md:text-[38px] lg:text-[45px]">Ethereum</h1>
              <h1 className=" text-[30px] md:text-[38px] lg:text-[45px] dollar">2.544,32 USD</h1>
              <img src={image5} alt="" />
            </div>

            <a
              href="#/"
              className="flex gradient-background justify-center items-center   rounded-ss-xl rounded-ee-xl py-6 px-4 text-center text-white text-2xl"
            >
              Buy Now
            </a>
          </div>
          <div className=" border-2 border-cyan-700 md:min-w-[400px] min-w-[300px] w-full flex-1 mt-8 p-8 order-3 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3  ">
            <div className="mb-7 pb-7 flex items-center  justify-center">
              <img src={image3} alt="" className="rounded-3xl w-20 h-20" />
            </div>
            <div className="  space-y-4 md:space-y-3 mb-10 md:mb-16 flex flex-col place-content-center place-items-center">
              <h1 className=" text-[30px] md:text-[38px] lg:text-[45px]">Ripple</h1>
              <h1 className=" text-[30px] md:text-[38px] lg:text-[45px] dollar">2.544,32 USD</h1>
              <img src={image6} alt="" />
            </div>
            <a
              href="#/"
              className="flex gradient-background  justify-center items-center rounded-ss-xl rounded-ee-xl py-5 px-4 text-center text-white text-xl"
            >
              Buy Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
