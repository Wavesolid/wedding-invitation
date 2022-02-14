export default function UcapanList(props){

    let name = props.name;
    let nameMatch = name.match(/\b(\w)/g);
    var nameJoin = nameMatch.join('').toUpperCase();

    return(
        <div className="w-[100%] mb-[18px] flex">
            <div className=" flex items-center justify-center h-[45px] w-[45px] bg-[#bbb] rounded-[50%] ml-[18px]">
                <span>{nameJoin}</span>
            </div>
            <div className="flex flex-col ml-[18px] text-[14px]">
                <span className="font-normal">{props.name}</span>
                <span className="font-light">dari <span className="font-normal">{props.domisili}</span></span>
                <span className="font-light">{props.message}</span>
            </div>
        </div>
    )
}