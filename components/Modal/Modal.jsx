export default function Modal(props){
    return(
        <div>
            <div className="fixed top-0 left-0 w-[100%] h-screen z-[10] bg-black-rgba"></div>
            <div className={`fixed top-[30vh] left-[10%] md:left-[25%] rounded-[10px] w-[80%] max-w-[350px] z-[100] bg-[#F2C777] md:!left-[38%]`}>
                <header className="bg-[#0D0D0D] text-[white] p-4">
                    {props.title}
                </header>
                <div className="p-4 text-[#0D0D0D]">
                    {props.content}
                </div>
                <footer className="flex p-4 justify-end">
                    <button className="border-[1px] border-[#0D0D0D] bg-[#0D0D0D] text-[#F2C777] py-1 px-4" onClick={props.onConfirm}> Okay </button>
                </footer>
            </div>
        </div>
    )
}