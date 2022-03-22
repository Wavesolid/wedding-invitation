import { useState, useRef, useEffect } from 'react';
import Qr from 'qrcode.react';


export default function QrContextGenerator(props)
{
    const url = `${process.env.BASE_URL}/seat`;
    // const {name} = props;
        return (
            // <div className='bg-white p-[8px]' ref={qrRef}>
                <Qr
                    size={props.size}
                    id={props.name}
                    value={`${url}/${props.name}`}
                    // renderAs='svg'
                />
            // </div>
        )
}

