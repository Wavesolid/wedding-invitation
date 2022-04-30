export default function NewDataGuestForm() {
    return(
        <div>
             <div className="w-[80%] my-4 mx-auto">
                <form className="grid grid-cols-2 grid-rows-3 auto-cols-auto auto-rows-auto">
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Name</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Email</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">No. Wa</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Total Person</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Imgur qrcode</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left">
                        <button className='text-red-500 hover:text-red-300 font-bold' >Cancel</button>
                        <button className='text-green-500 hover:text-green-300 font-bold'>Add Guest</button>
                    </div>
                </form>
            </div>
        </div>
    )
}