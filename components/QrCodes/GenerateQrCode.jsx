import { useState, useRef, useEffect } from 'react';
import Qr from 'qrcode.react';


export default function QrContextGenerator(props)
{
    const url = `${process.env.BASE_URL}/checkin`;
        return (
                <Qr
                    size={props.size}
                    id={props.slug}
                    value={`${url}/${props.slug}`}
                    />
        )
}

