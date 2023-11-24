import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import HomeSectionCardData from "../HomeSectionCard/HomeSectionCardData";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };


  const slidePrev = () => setActiveIndex(activeIndex-1);
  const slideNext = () => setActiveIndex(activeIndex+1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = HomeSectionCardData.map((item, index) => (
    <HomeSectionCard item={item} key={index} />
  ));

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
       {activeIndex !==0  && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            top: "8rem",
            position: "absolute",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}

        {activeIndex !==items.length-5 && 
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              top: "8rem",
              position: "absolute",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        }
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
