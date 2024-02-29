import HeadingLayout from "../components/HeadingLayout";
import card1 from "../../public/card.png";
import card2 from "../../public/card2.png";
import card3 from "../../public/card3.png";

const data = {
  title: "Our  Feature",
  subtitle:
    "We are platform for everyone.Cryptocurrencies are a digital representation of value considered by their holders as a means of payment.",
};

export default function Feature() {
  return (
    <div>
      <HeadingLayout data={data} />
      <main className="max-w-6xl mx-auto pt-10 pb-36 px-8 relative">
        <div className="flex flex-col  justify-between items-center lg:flex-row">
          {/*  */}
          <div className="w-full flex-1 mt-8 p-8 order-2 bg-[background: rgba(0, 25, 34, 1)] shadow-xl rounded-3xl sm:w-96 lg:w-full  lg:rounded-r-none">
            <div className="     flex items-center justify-center">
              <img src={card2} alt="" className="rounded-3xl size-2/4" />
            </div>
            <div className="  space-y-2 md:space-y-3 mb-10 md:mb-0 flex flex-col place-content-center place-items-center">
              <h1 className=" text-color text-[30px] md:text-[38px] lg:text-[45px]">
                Discover
              </h1>
              <h1 className=" text-[15px] text-color opacity-65 md:text-[18px] lg:text-[24px]  text-center">
                A cryptocurrency can be acquired through so called “mining”.
                Mining is conducted by the verification.
              </h1>
              <h2 className=" text-[24px]  text-color-v3">Learn more--&gt;</h2>
            </div>
          </div>
          {/*  */}
          <div className="w-full flex-1 mt-8 p-8 order-2 bg-[background: rgba(0, 25, 34, 1)] shadow-xl rounded-3xl sm:w-96 lg:w-full  lg:rounded-r-none">
            <div className="  lg:my-3   flex items-center justify-center">
              <img src={card1} alt="" className="rounded-3xl lg:size-3/4" />
            </div>
            <div className="  space-y-2 md:space-y-3 mb-10 md:mb-0 flex flex-col place-content-center place-items-center">
              <h1 className=" text-color text-[30px] md:text-[38px] lg:text-[45px]">
                Discover
              </h1>
              <h1 className=" text-[15px] text-color opacity-65 md:text-[18px] lg:text-[24px]  text-center">
                A cryptocurrency can be acquired through so called “mining”.
                Mining is conducted by the verification.
              </h1>
              <h2 className=" text-[24px]  text-color-v3">Learn more--&gt;</h2>
            </div>
          </div>
          {/* start */}
          <div className="w-full flex-1 mt-8 p-8 order-2 bg-[background: rgba(0, 25, 34, 1)] shadow-xl rounded-3xl sm:w-96 lg:w-full  lg:rounded-r-none">
            <div className="     flex items-center justify-center">
              <img src={card3} alt="" className="rounded-3xl " />
            </div>
            <div className="  space-y-2 md:space-y-3 mb-10 md:mb-0 flex flex-col place-content-center place-items-center">
              <h1 className=" text-color text-[30px] md:text-[38px] lg:text-[45px]">
                Launchpad
              </h1>
              <h1 className=" text-[15px] text-color opacity-65 md:text-[18px] lg:text-[24px] font-light    text-center">
                Crypto supports the blockchain ecosystem of various projects and
                invites thee creators from project.
              </h1>
              <h2 className=" text-[24px]  text-color-v3">Learn more--&gt;</h2>
            </div>
          </div>
        </div>
      </main> 
    </div>
  );
}
