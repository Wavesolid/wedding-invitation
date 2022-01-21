export default function Youtube(){

    const handlerClick = () => {
        window.open("https://youtube.com/");
    };

    return(
        <div className="bg-[#0D0D0D] flex flex-col items-center">
            <span className="font-bold text-[#F2C777] text-[24px] mb-[26px]">Live Streaming</span>
            <div className="w-[335px] h-[289px] rounded-[10px] bg-[#F2C777] flex flex-col items-center mb-[24px]">
                <p className="w-[305px] text-center text-[#735032] text-[14px] my-[8px]">
                    In eget sagittis enim. Duis ac augue at tortor ullamcorper vestibulum sed et diam. 
                    Vivamus posuere purus posuere egestas laoreet. Sed tempor convallis elit, vel iaculis turpis. 
                    Pellentesque egestas magna non mauris bibendum, id aliquam enim aliquet. 
                    Fusce ut velit et mi eleifend aliquet a id quam.
                </p>
                <img className="mb-[12px]" src="/Icon/asset-batik-5.svg" alt="" />
                <span className="text-[#735032] text-[14px] mb-[12px]">Link Youtube</span>
                <button onClick={handlerClick} className="border rounded-[15px] border-[#735032] py-[2px] px-[21px] mb-[-1.5rem] text-[#735032] hover:text-[#F2C777] hover:bg-[#735032] transition  " type="button">
                    <span className="text-[14px] text-[14px]">Klik Disini</span>
                </button>
            </div>
        </div>
    )
}