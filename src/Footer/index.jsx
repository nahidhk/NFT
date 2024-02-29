import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
const Footer = () => (
  <div className=" mt-20 lg:my-20 container flex flex-col md:flex-row
   items-start  justify-between space-y-20 md:space-y-0">
    {/* left */}
    <div className=" md:min-w-[500px] space-y-2">
      <h1 className=" text-color text-[24px] md:text-[25px] lg:text-[40px] font-semibold">{`Let's Talk`}</h1>
      <div>
        <input
          type="text"
          id="first_name"
          className=" outline-none  text-xl bg-background opacity-80 text-color   border-b    border-text-color   block w-full p-2.5  "
          placeholder="Enter Your Email"
          required
        />
      </div>
      <div
        className=" flex 
      items-end  justify-between"
      >
        <input
          type="password"
          className=" outline-none  max-w-[360px] opacity-80 text-xl bg-background text-color   border-b   border-text-color   block w-full p-2.5  "
          placeholder="John"
          required
        />
        <button className=" text-color border-b cursor-pointer">
          {" "}
          Subscribe
        </button>
      </div>
    </div>

    <div className=" space-y-5 lg:mt-5">
      <h1 className="text-color text-[18px] md:text-[20px] lg:text-[25px] font-semibold">
        Connect to our social Site.
      </h1>
      <div className=" flex flex-1 items-start justify-start space-x-3 text-color b ">
        <BiLogoFacebook size={25} /> <BiLogoTwitter size={25} />{" "}
        <BiLogoInstagram size={25} />
      </div>
      <div className=" flex items-start justify-start gap-5 text-color ">
        <h1>Privacy Policy</h1>
        <h1>Term of Service</h1>
      </div>
    </div>
  </div>
);

export default Footer;
