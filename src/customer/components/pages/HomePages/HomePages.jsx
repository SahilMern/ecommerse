// import HomeSectionCarousel from "../../HomeSectionCarousel/HomeSectionCarousel";
import Homecarousel from "../../MainCarousel/Homecarousel";
import { mens_kurta } from "../../NewSectionCarousel/MensDetails";
import NewSectionCarousel from "../../NewSectionCarousel/NewSectionCarousel";

const HomePages = () => {
  return (
    <div>
      <Homecarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <NewSectionCarousel data={mens_kurta} section_name={"Mens Kurta"} />
        <NewSectionCarousel data={mens_kurta} section_name={"Mens Shoes"} />
        <NewSectionCarousel data={mens_kurta} section_name={"Mens paint"} />
        <NewSectionCarousel data={mens_kurta} section_name={"Women"} />
        {/* <HomeSectionCarousel /> */}
      </div>
    </div>
  );
};

export default HomePages;
