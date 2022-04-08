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
import imagesSd5 from '../../public/Photo/bg-desktop.jpg'



export default function Gallery(){

    const gallery1 = [imagesFormal1,imagesFormal2,imagesJawa1,imagesJawa3,imagesJawa5]

    const gallery2= [imagesFormal3, imagesFormal5, imagesJawa2, imagesJawa4, imagesSd5, imagesSd4]

    const gallery3 = [imagesSd1,imagesSd2,imagesSd3,imagesFormal4,imagesFormal1]

    return(
        <div className="bg-putih flex flex-col items-center text-[#621109]">
            <span className="text-[24px] font-bold mt-[12px] mb-[8px]">Gallery Photo</span>
            <ImageSlider images={gallery1} />
            <ImageSlider images={gallery2} />
            <ImageSlider images={gallery3} />
        </div>
    )
}