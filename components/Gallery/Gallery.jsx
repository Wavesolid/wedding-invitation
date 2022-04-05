import ImageSlider from './ImageSlider';

import imagesFormal1 from '../../public/Photo/gallery-formal-1.jpg';
import imagesFormal2 from '../../public/Photo/gallery-formal-2.jpg';
import imagesFormal3 from '../../public/Photo/gallery-formal-3.jpg';
import imagesFormal4 from '../../public/Photo/gallery-formal-4.jpg';
import imagesFormal5 from '../../public/Photo/gallery-formal-5.jpg';

import imagesJawa1 from '../../public/Photo/gallery-jawa-1.jpg';
import imagesJawa2 from '../../public/Photo/gallery-jawa-2.jpg';
import imagesJawa3 from '../../public/Photo/gallery-jawa-3.jpg';
import imagesJawa4 from '../../public/Photo/gallery-jawa-4.jpg';
import imagesJawa5 from '../../public/Photo/gallery-jawa-5.jpg';

import imagesSd1 from '../../public/Photo/gallery-sd-1.jpg';
import imagesSd2 from '../../public/Photo/gallery-sd-2.jpg';
import imagesSd3 from '../../public/Photo/gallery-sd-3.jpg';
import imagesSd4 from '../../public/Photo/gallery-sd-4.jpg';



export default function Gallery(){

    const themeFormal = [imagesFormal1,imagesFormal2,imagesFormal3,imagesFormal4,imagesFormal5];

    const themeJawa = [imagesJawa1,imagesJawa2,imagesJawa3,imagesJawa4,imagesJawa5];

    const themeSd = [imagesSd1, imagesSd2, imagesSd3, imagesSd4]

    return(
        <div className="bg-putih flex flex-col items-center text-[#621109]">
            <span className="text-[24px] font-bold mt-[12px] mb-[8px]">Gallery Photo</span>
            <ImageSlider images={themeFormal} />
            <ImageSlider images={themeJawa} />
            <ImageSlider images={themeSd} />
        </div>
    )
}