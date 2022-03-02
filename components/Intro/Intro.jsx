export default function Intro()
{
    return (
        <div className="bg-[#0D0D0D] h-[667px] bg-[url('/Photo/bg-batik.png')] flex flex-col items-center justify-center">
            <span className="text-[#F2C777] text-[36px] font-bold mb-[8px]">THE WEDDING OF</span>
            <img className="mb-[8px]" src="/Icon/asset-batik-8-big.svg" alt="batik-8-big" />
            <div className="bg-[url('/Icon/foto-frame.svg')] bg-no-repeat w-[215.15px] h-[404px] mb-[16px]">
                <img className="mx-auto my-0 pt-[10px]" src="/Photo/foto-intro.png" alt="photo-intro" />
            </div>
            <img src="/Icon/asset-batik-4.svg" alt="" />
            <span className="text-[24px] font-bold mt-[16px] text-[#F2C777] ">Jennifer &#38; Hamzah</span>
        </div>
    );
}