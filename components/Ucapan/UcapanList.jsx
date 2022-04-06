export default function UcapanList(props){

    return(
        <div className="w-[100%] mb-[18px] bg-merah border-emas border-[5px] rounded-[5px] p-[8px] text-[14px] font-kapital-bold flex">
            <div className="flex flex-col ml-[18px] text-[14px]">
                <span className="text-[18px] break-words">{props.name}</span>
                <span className="font-normal break-words">{props.domisili}</span>
                <span className="font-light break-words">{props.message}</span>
            </div>
        </div>
    )
}