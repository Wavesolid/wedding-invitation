import { useState, useRef, useEffect } from 'react';
import Qr from 'qrcode.react';


export default function QrContextGenerator(props)
{
    const url = `${process.env.BASE_URL}/seat`;
        return (
                <Qr
                    size={props.size}
                    id={props.name}
                    value={`${url}/${props.name}`}
                />
        )
}

