import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import homeCaroselData from './MaiCaroselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const items = homeCaroselData.map((elem, index) =>{
    return (
        <>
        <img src={elem.image} alt='' key={index+1} className='cursor-pointer h-[80vh] w-full p-2 object-cover object top  '/>
        </>
    )
})

const Homecarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableDotsControls
         // responsive={responsive}
        // controlsStrategy="alternate"
    />
);


export default Homecarousel