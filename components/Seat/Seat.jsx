export default function Seat({props})
{
    const { seatNumber } = props.data;
    console.log(seatNumber);

    console.log(seatNumber);

    return (
        <div className="h-screen bg-[#621109] flex flex-col items-center justify-center">
            <div>
                <img src="/Icon/asset-batik-8.svg"/>
            </div>
                {seatNumber.split(',').map((x) => 
                    <h1 key={x.trim()} className='text-white text-[64px] flex flex-row'>{x.trim()}</h1>
                )}
            <div>
                <img className='rotate-180' src="/Icon/asset-batik-8.svg"/>
            </div>
        </div>
    )
}
