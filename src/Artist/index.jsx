import HeadingLayout from "../components/HeadingLayout";
import group1 from "../../public/cards/group-card3.png";
import group2 from "../../public/cards/group-card2.png";
import group3 from "../../public/cards/group-card1.png";
import group4 from "../../public/cards/group-card.png";

const data = {
  title: "Top  Artist",
  subtitle:
    "A Battle-Srategy P2E Game with Sound In-Game Economics 7 Strong Progression Incentives",
};

export default function Artist() {
  const images = [group1, group2, group3, group4];
  return (
    <div>
      <HeadingLayout data={data} />
      <div className=" my-20 container grid place-content-center  place-items-center gap-5 md:gap-7 lg:gap-10 lg:grid-cols-2">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
