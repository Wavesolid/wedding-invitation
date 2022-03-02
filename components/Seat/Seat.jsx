export default function Seat({props})
{
    const { seatNumber } = props.data;
    console.log(seatNumber);

    return (
        <div className="h-screen bg-[#0D0D0D] flex flex-col items-center justify-center">
            <div>
                <img src="/Icon/asset-batik-8.svg"/>
            </div>
                {seatNumber.split(',').forEach((x) => <h1 className='text-white text-[64px] flex flex-row'>{x.trim()}</h1>)}
            <div>
                <img className='rotate-180' src="/Icon/asset-batik-8.svg"/>
            </div>
        </div>
    )
}
