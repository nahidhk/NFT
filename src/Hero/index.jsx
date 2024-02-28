import heroImage from "../../public/hero.png";

export default function Hero() {
  return (
    <section className=" container ">
      <div className=" grid lg:grid-cols-2 grid-cols-1  md:gap-10 gap-16  mt-10 md:mt-16 lg:mt-24 flex-col-reverse">
        <div className=" space-y-6 md:space-y-7">
          <h4 className=" text-color text-[32px] tracking-wider">Metaverse</h4>
          <h1 className=" md:text-[70px]  text-color-v1   fancy text-[50px] lg:text-[60px] font-semibold leading-[60px]">
            Crypto <br /> <span className=" text-color fancy">Marketplace</span>
          </h1>
          <h1 className=" text-[28px] md:text-[40px] text-color">
            ____ on Binance Smart Chain
          </h1>

          <div className="   flex items-start justify-start gap-5 md:gap-10 ">
            <button className=" px-4 py-2 rounded-ss-xl rounded-ee-xl font-medium text-[18px] gradient-background hover:text-white/80   text-neutral-900">
              {" "}
              Connect Us
            </button>
            <button className="px-4 py-2 rounded-ss-xl rounded-ee-xl font-medium text-[18px] gradient-background hover:text-white/80  text-neutral-900">
              {" "}
              Explore
            </button>
          </div>
        </div>
        <div className=" space-y-5">
          <img src={heroImage} alt="" />
          <p className=" text-color text-[20px] md:text-[24px] leading-[30px] md:leading-[39.5px]">
            Crypto Binance owns the worlds leading digital asset trading
            platform, meet your trading needs.
          </p>
        </div>
      </div>
    </section>
  );
}
