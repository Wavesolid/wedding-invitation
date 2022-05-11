import { useState, useRef, useEffect} from 'react';

export default function DataGuestItem(props){
    const [guestEdit, setguestEdit] = useState({
        name: props.name,
        email: props.email,
        waNumber: props.waNumber,
        totalPerson: props.totalPerson,
        isFilled: props.isFilled,
        seatNumber: props.seatNumber,
        emailCount : props.emailCount,
        isEmailSent: props.isEmailSent,
        qrCode : props.qr,
        totalSouvenir: props.totalSouvenir,
        isCheckIn: props.isCheckIn,
        checkInTime: props.checkInTime,
        imgurQrCode: props.imgurQrCode,
        slug: props.slug
    })
    const qrs = useRef();   
    useEffect(() => {
        props.refQr(qrs.current.innerHTML, qrs.current.children[0])
    })

    const clickHandler = () => {
        props.onEdit(guestEdit);
    }

    const sendEmailHandler = () => {
        props.onSend({
            name: props.name,
            email: props.email,
            waNumber: props.waNumber,
            totalPerson: props.totalPerson,
            seatNumber: props.seatNumber,
            totalSouvenir: props.totalSouvenir,
            isCheckIn: props.isCheckIn,
            checkInTime: props.checkInTime,
            imgurQrCode: props.imgurQrCode,
            emailCount: props.emailCount
        });
    }

    const dateFormat = new Date(guestEdit.checkInTime).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    const link = `${process.env.BASE_URL}/${guestEdit.slug}`;

    const andRegex = new RegExp(/&/g);
    const andUrlencoded = "%26"
    const indonesianNumber = guestEdit.waNumber.replace("0", "62");

    const formattedName = guestEdit.name.split(" ");
    const formattedSlug = guestEdit.slug.split("-");
    if(andRegex.test(guestEdit.name)) {
        formattedName.map((x, index) => {
            if(andRegex.test(x)) {
                formattedName[index] = andUrlencoded
            }
        })
    } 
    if(andRegex.test(guestEdit.slug)) {
        formattedSlug.map((x, index) => {
            if(andRegex.test(x)) {
                formattedSlug[index] = andUrlencoded
            }
        })
    } 
    const waMsg = `Assalamualaikum+Warahmatullahi+Wabarakatuh+%0D%0A%0D%0AKepada+Yth.%0D%0ABapak%2FIbu%2FSaudara%2Fi+*${formattedName.join(" ")}*+%0D%0A%0D%0ABismillahirrahmanirrahim+%0D%0A%0D%0ADengan+memohon+rahmat+dan+ridho+Allah+SWT%2C+kami+bermaksud+untuk+menyelenggarakan+acara+pernikahan+kami%3A%0D%0A%0D%0Adrg.+Neysa+Almira+%26+Gintano+Scorpy+Sugihartono%2C+S.T+%0D%0A%0D%0Ayang+InsyaAllah+akan+dilaksanakan+pada%3A+%0D%0A%0D%0A%F0%9F%97%93Hari%2Ftgl+%3A%0D%0AMinggu%2C+29+Mei+2022+%0D%0A%0D%0A%F0%9F%95%9BPukul+%3A%0D%0A07.30+WIB+%7C+Akad+Nikah%0D%0A11.00+WIB+%7C+Resepsi%0D%0A%0D%0A%F0%9F%8F%A0Tempat+%3A%0D%0ASheraton+Grand+Jakarta%2C+Gandaria+City+Hotel%2C+3rd+Floor+%0D%0A%0D%0AKlik+disini+untuk+melihat+undangan+anda+%3A+%0D%0A%0D%0Aweddingneysagintano.me/${formattedSlug.join("-")}+%0D%0A%0D%0AMerupakan+suatu+kehormatan+dan+kebahagiaan+bagi+kami+apabila+Bapak%2FIbu%2FSaudara%2Fi+*${formattedName.join(" ")}*+berkenan+hadir+dan+memberikan+do%E2%80%99a+restu%0D%0A%0D%0AWassalamu%E2%80%99alaikum+Warahmatullahi+Wabarakatuh`


    return(
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center">
                    <div>
                        <div className="text-sm font-medium text-gray-900">{guestEdit.name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">{guestEdit.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                <a className="text-indigo-600 hover:text-indigo-900" target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${waMsg}&phone=${indonesianNumber}`}> {guestEdit.waNumber} </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.totalPerson}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                {guestEdit.isFilled === true && "Hadir"}
                {guestEdit.isFilled !== true && "Pending"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.seatNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.totalSouvenir}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.isCheckIn}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{dateFormat}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.isEmailSent}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{link}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500" ref={qrs}>
                <img src={guestEdit.imgurQrCode} alt="qrcode"/>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={clickHandler} className="text-indigo-600 hover:text-indigo-900">Edit</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={sendEmailHandler} className="text-indigo-600 hover:text-indigo-900">Send Per Email</button>
            </td>
        </tr>
    )
}