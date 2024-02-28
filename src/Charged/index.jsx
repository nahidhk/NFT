import HeadingLayout from "../components/HeadingLayout";
import image from "../../public/charged.png";
import avater from "../../public/avater.png";
const data = {
  title: "Charged  Punks",
};
export default function Charged() {
  return (
    <div>
      <HeadingLayout data={data} />
      <div className=" container px-8 lg:px-16 flex-col-reverse grid lg:grid-cols-2 grid-cols-1 gap-10 my-20 place-content-center place-items-center">
        <div className=" flex flex-col items-start justify-start space-y-8  ">
          <div className=" flex items-center justify-center gap-5 text-color">
            <img className=" size-10 lg:size-[96px]" src={avater} alt="" />
            <div className="">
              <h1 className=" text-[16px] md:text-[18px] lg:text-[20px]">
                Creator
              </h1>
              <h3 className=" text-[22px] md:text-[27px] lg:text-[32px]">
                Jermone Bell
              </h3>
            </div>
          </div>
          <h1 className=" text-color text-[20px] font-light">
            Some of these assets are physical and tangibie and others are
            digital and intangible
          </h1>
          <div className=" text-color space-y-1">
            <h1 className=" text-[16px] md:text-[18px] lg:text-[20px] font-light ">
              Current Bid
            </h1>
            <h1 className=" text-[20px] md:text-[28px] lg:text-[32px]   font-semibold">
              1.00 ERN
            </h1>
            <h1 className=" text-[16px] md:text-[18px] lg:text-[20px] font-light ">
              $16,350
            </h1>
          </div>
          <div className=" text-color space-y-1">
            <h1 className=" text-[16px] md:text-[18px] lg:text-[20px] font-light ">
              Action End in
            </h1>
            <h1 className=" text-[20px] md:text-[28px] lg:text-[32px]   font-semibold">
              11:32:45
            </h1>
          </div>
          <div className="   flex items-start justify-start gap-5 md:gap-10 ">
            <button className=" px-4 py-2 rounded-ss-xl rounded-ee-xl font-medium text-[18px] gradient-background    text-neutral-900">
              {" "}
              Place a Bid
            </button>
            <button className="border-color-v2 px-4 py-2 rounded-ss-xl rounded-ee-xl font-medium text-[18px]  border  text-gray-100">
              {" "}
              View Details
            </button>
          </div>
        </div>

        <div className=" rounded-tr-[40px] rounded-bl-[40px]  border border-s-cyan-900 border-teal-800">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
