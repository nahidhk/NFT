import HeadingLayout from "../components/HeadingLayout";
import Cards from "../components/Cards";

const data = {
  title: "Top  Crypto Now",
  subtitle: "Choose from Top 30+ crypto and stablecoins.",
};
export default function Top() {
  return (
    <>
      <HeadingLayout data={data} />
      <Cards />
    </>
  );
}
