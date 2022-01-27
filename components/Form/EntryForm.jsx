import Link from 'next/link';

export default function EntryForm(){
    return(
        <div className="bg-[#0D0D0D]">
            <div>
                <img className="float-right scale-y-[-1]" src="/Icon/asset-batik-3.svg"></img>
                <img className="scale-[-1]" src="/Icon/asset-batik-3.svg"></img>
            </div>

            <div className="text-[#F2C777] flex flex-col items-center">
                
                <span className="text-[24px] font-bold mt-[-2rem]">RSVP</span>
                <span className="text-[14px]">Kindly respond by</span>
                <div className="mb-[8px]">
                    <span>-</span>
                    <span className="text-[14px]">11 mei 2022</span>
                    <span>-</span>
                </div>
                <Link href='/form'>
                <button className="border rounded-[15px] border-current py-[2px] px-[21px] mb-[-1.5rem]">
                    <span className="text-[14px]" >Klik Disini</span>
                </button>
                </Link>
            </div>

            <div>
                <img className="float-right" src="/Icon/asset-batik-3.svg"></img>
                <img className="scale-x-[-1]" src="/Icon/asset-batik-3.svg"></img>
            </div>
        </div>
    )
}