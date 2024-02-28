/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function HeadingLayout({ data }) {
  const { title, subtitle } = data;
  return (
    <div className=" space-y-3 md:space-y-7 lg:space-y-8 text-color mt-20 md:mt-28 lg:mt-36 container text-center">
      <h1 className=" text-center fancy text-[53px] lg:text-[60px] font-semibold leading-[60px]">{title}</h1>
      <h3 className="text-center text-[17px] md:text-[22px] max-w-[460px] mx-auto lg:text-[20px]">
        {subtitle}
      </h3>
    </div>
  );
}
