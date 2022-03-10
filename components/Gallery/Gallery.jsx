import ImageSlider from './ImageSlider';
import images1 from '../../public/Photo/image-slide1.png';
import images2 from '../../public/Photo/image-slide2.png';
import images3 from '../../public/Photo/image-slide3.png';


export default function Gallery(){

    const theme = [images1,images2,images3];

    return(
        <div className="bg-putih flex flex-col items-center text-[#621109]">
            <span className="text-[24px] font-bold mt-[12px] mb-[8px]">Gallery Photo</span>
            <ImageSlider images={theme} />
        </div>
    )
}