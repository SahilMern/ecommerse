import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import NewSectionCard from "../NewSectionCard/NewSectionCard";
// import HomeSectionCardData from "../../../assets/HomeSectionCard/HomeSectionCardData";

const NewSectionCarousel = ({data,section_name}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = data.slice(0,20).map((item, index) => (
    <NewSectionCard key={index} item={item} />
  ));
  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-gray-600">{section_name}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls={true} 
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default NewSectionCarousel;
