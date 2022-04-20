import QrCodeGenerator from "../QrCodes/GenerateQrCode";

export default function Seat({props})
{
    const { totalSouvenir } = props.data;
    const { seatNumber } = props.data;
    const { name } = props.data;

    return (
        <div className="h-screen bg-merah flex flex-col items-center justify-center">
            <div>
                <img src="/Icon/asset-batik-8.svg"/>
            </div>
                {seatNumber.split(',').map((x) => 
                    <h1 key={x.trim()} className='text-putih text-[24px] flex flex-row'>{x.trim()}</h1>
                )}
            <div>
                <img className='rotate-180' src="/Icon/asset-batik-8.svg"/>
            </div>
            <div>
                <span className="text-putih text-[24px]">Souvenir : {totalSouvenir}</span>
            </div>
            <div className='rounded-lg bg-merah p-[24px] my-0 mx-auto flex items-center justify-between text-putih'>
                <div className="w-[50%]">Tunjukan barcode ini ke penerima tamu untuk mengkonfirmasi kehadiran anda</div>
                <div className='bg-white p-[8px]'>
                    <QrCodeGenerator name={name} size={100}/>
                </div>
            </div>
        </div>
    )
}
