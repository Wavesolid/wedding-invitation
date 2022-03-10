import Qr from 'qrcode.react';
import { useState } from 'react';

export default function QrCode(props) {
    const { link } = props;
    const [qrCode, setQrCode] = useState(link);

    return (
        <div className='flex-col bg-putih items-center justify-center h-screen px-[12px]'>
            <div className='text-center py-[16px]'>
                <h1 className='text-merah font-sambung text-[36px]'>Wedding</h1>
            </div>
            <div className='text-center pb-[37px]'>
                <h2 className='text-merah font-sambung text-[36px]'>Nesya <span className='font-tanda-huruf'>&</span> Gintano</h2>
            </div>
            <div className='rounded-lg bg-merah p-[24px] my-0 mx-auto flex items-center'>
                <div className='bg-white p-[8px]' >
                    <Qr
                        size={180}
                        id='qr-code'
                        value={qrCode}
                    />
                </div>
            </div>
            <div className='text-center mt-4'>
                <p className='text-[#621109] break-words'> Mohon tunjukan Qr code ini ke pagar ayu untuk mendapatkan nomor bangku yang telah diberikan </p>
            </div>
        </div>
    );
}