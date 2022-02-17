import Qr from 'qrcode.react';
import { useState } from 'react';

export default function QrCode(props) {
    const { link } = props;
    const [qrCode, setQrCode] = useState(link);

    return (
        <div className='flex-col items-center justify-center'>
            <div className='text-center pt-[100px] pb-[16px]'>
                <h1 className='text-black font-bold text-2xl'>Wedding</h1>
            </div>
            <div className='text-center pb-[37px]'>
                <h2 className='text-black font-bold text-2xl'>Jeniffer & Hamzah</h2>
            </div>
            <div className='rounded-lg bg-black  w-[335px] h-[349px] my-0 mx-auto flex items-center'>
                <div className='bg-white py-[1.4rem] pl-[1.4rem] pr-[1rem]  mx-auto w-[225px] h-[225px]' >
                    <Qr
                        size={180}
                        id='qr-code'
                        value={qrCode}
                    />
                </div>
            </div>
            <div className='text-center pt-[25px]'>
                <p className='text-black break-words'>*Proin suscipit, purus ut cursus faucibus, eros ligula fermentum quam, sit amet faucibus est nisi interdum libero. Aenean mattis egestas eros ac aliquam.  </p>
            </div>
        </div>
    );
}