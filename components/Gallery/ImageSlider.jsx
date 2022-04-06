import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageSlider({images}) {

    return(
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} swipeable={true} swipeScrollTolerance={1} className="mt-[24px] w-[70%]">
            {
                images.map((image)=>(
                    <div key={image.src}>
                        <img src={image.src} />
                    </div>
                ))
            }
        </Carousel>
    )
}