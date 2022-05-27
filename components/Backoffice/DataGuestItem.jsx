import { useState, useRef, useEffect} from 'react';
import ConfirmModal from '../Modal/ConfirmModal'

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
    });

    const clickHandler = () => {
        props.onEdit(guestEdit);
    }

    const sendEmailHandler = () => {

        setConfirm({
            title: "Confirmation",
            content: "Apakah anda yakin?"
        })

    }

    const confirmEmailHandler = () => {
        setConfirm(null);
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
            emailCount: props.emailCount,
            slug: props.slug
        });
    }

    const [confirm, setConfirm] = useState();

    const checkInHandler = () => {
        setConfirm({
            title: "Confirmation",
            content: "Apakah anda yakin?"
        })
    }

    const confirmHandler = () => {
        const url = `${process.env.BASE_URL}/checkin/${guestEdit.slug}`;
        window.open(url,'_blank')
        setConfirm(null);
    }

    const confirmCancelHandler = () => {
        setConfirm(null);
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


    //const waMsg = `Assalamualaikum+Warahmatullahi+Wabarakatuh+%0D%0A%0D%0AKepada+Yth.%0D%0ABapak%2FIbu%2FSaudara%2Fi+*${formattedName.join(" ")}*+%0D%0A%0D%0ABismillahirrahmanirrahim+%0D%0A%0D%0ADengan+memohon+rahmat+dan+ridho+Allah+SWT%2C+kami+bermaksud+untuk+menyelenggarakan+acara+pernikahan+putra/i+kami%3A%0D%0A%0D%0Adrg.+Neysa+Almira+%26+Gintano+Scorpy+Sugihartono%2C+S.T+%0D%0A%0D%0Ayang+InsyaAllah+akan+dilaksanakan+pada%3A+%0D%0A%0D%0A%F0%9F%97%93Hari%2Ftgl+%3A%0D%0AMinggu%2C+29+Mei+2022+%0D%0A%0D%0A%F0%9F%95%9BPukul+%3A%0D%0A07.30+WIB+%7C+Akad+Nikah%0D%0A11.00+WIB+%7C+Resepsi%0D%0A%0D%0A%F0%9F%8F%A0Tempat+%3A%0D%0ASheraton+Grand+Jakarta%2C+Gandaria+City+Hotel%2C+3rd+Floor+%0D%0A%0D%0ATanpa+mengurangi+rasa+hormat%2C+perkenankan+kami+mengundang+Bapak%2FIbu%2FSaudara%2Fi++untuk+menghadiri+*Resepsi*+Pernikahan+Putra%2Fi+kami.+%0D%0A%0D%0AKlik+disini+untuk+melihat+undangan+dan+konfirmasi+kehadiran+anda+%3A+%0D%0A%0D%0Aweddingneysagintano.me/${formattedSlug.join("-")}+%0D%0A%0D%0AMerupakan+suatu+kehormatan+dan+kebahagiaan+bagi+kami+apabila+Bapak%2FIbu%2FSaudara%2Fi+*${formattedName.join(" ")}*+berkenan+hadir+dan+memberikan+do%E2%80%99a+restu%0D%0A%0D%0AWassalamu%E2%80%99alaikum+Warahmatullahi+Wabarakatuh`
    //const waMsg = `Kepada+yth+Bapak%2FIbu%2FSaudari%2Fi+*${formattedName.join(" ")}*+%0D%0ATerima+kasih+telah+melakukan+konfirmasi+kehadiran+pada+acara+pernikahan+Neysa+Almira+dan+Gintano+Scorpy.%0D%0A%0D%0AAcara+akan+dilaksanakan+pada+%3A%0D%0A%0D%0A%F0%9F%97%93Hari%2Ftgl+%3A%0D%0A*Minggu%2C+29+Mei+2022*+%0D%0A%0D%0A%F0%9F%95%9BPukul+%3A%0D%0A*07.30+WIB+%7C+Akad+Nikah*%0D%0A*11.00+WIB+%7C+Resepsi*%0D%0A%0D%0AMohon+klik+link+${process.env.BASE_URL}/seat/${guestEdit.slug}+untuk+melihat+nomor+meja+yang+disediakan+beserta+barcode+yang+akan+ditunjukkan+ke+penerima+tamu+agar+mengetahui+presensi+anda+pada+pernikahan+nanti.%0D%0ADimohon+undangan+dapat+hadir+tepat+waktu+demi+kelancaran+berlangsungnya+acara.%0D%0A%0D%0ATerimakasih.`

    const waMsg = `Assalamualaikum+Warahmatullahi+Wabarakatuh+%0D%0A%0D%0AKepada+yth+Bapak%2FIbu%2FSaudari%2Fi+*${formattedName.join(" ")}*+%0D%0ATerima+kasih+telah+melakukan+konfirmasi+kehadiran+pada+acara+pernikahan+%0D%0A%0D%0A+*drg.+Neysa+Almira+%26+Gintano+Scorpy+Sugihartono%2C+S.T*+%0D%0A%0D%0AAcara+akan+dilaksanakan+pada+%3A%0D%0A%0D%0A%F0%9F%97%93Hari%2Ftgl+%3A%0D%0A*Minggu%2C+29+Mei+2022*+%0D%0A%0D%0A%F0%9F%95%9BPukul+%3A%0D%0A*07.30+WIB+%7C+Akad+Nikah*%0D%0A*11.00+WIB+%7C+Resepsi*%0D%0A%0D%0Auntuk+melihat+*nomor+meja*+anda%2C+mohon+klik+link+berikut+%3A%0D%0A%0D%0Aweddingneysagintano.me/seat/${formattedSlug.join("-")}+%0D%0A%0D%0A*Mohon+tunjukkan+barcode+pada+link+diatas+kepada+penerima+tamu+saat+kehadiran+anda*%0D%0A%0D%0A%0D%0ADimohon+undangan+dapat+hadir+tepat+waktu+demi+kelancaran+berlangsungnya+acara%0D%0A%0D%0ATerimakasih`

    return(
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{guestEdit.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                <a className="text-indigo-600 hover:text-indigo-900" target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${waMsg}&phone=${indonesianNumber}`}> {guestEdit.waNumber} </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.totalPerson}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 flex justify-center">
                {guestEdit.isFilled === true && 
            
                <div className='bg-green-200 rounded-[20px] w-full p-1'>
                    <span className='text-green-900'>Konfirmasi</span>
                </div>

                }
                {guestEdit.isFilled !== true &&
                    <div className='bg-red-200 rounded-[20px] w-full p-1'>
                        <span className='text-red-900'>Pending</span>
                    </div>
                }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.seatNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.totalSouvenir}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 flex justify-center">
                {guestEdit.isCheckIn === "Pending" && 
                    <div className='bg-red-200 rounded-[20px] w-[100%] p-1'>
                        <span className='text-red-900'>Pending</span>
                    </div>
                }

                {guestEdit.isCheckIn === "Checked In" && 
                    <div className='bg-green-200 rounded-[20px] w-[100%] p-1'>
                        <span className='text-green-900'>Checked In</span>
                    </div>
                }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{dateFormat}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 flex justify-center">
                
                {guestEdit.isEmailSent === "Pending" && 
                    <div className='bg-red-200 rounded-[20px] w-full px-6'>
                        <span className='text-red-900'>Pending</span>
                    </div>
                }

                {guestEdit.isEmailSent === "Sent" && 
                    <div className='bg-green-200 rounded-[20px] w-full px-6'>
                        <span className='text-green-900'>Sent</span>
                    </div>
                }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{link}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                <img src={guestEdit.imgurQrCode} alt="qrcode"/>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={clickHandler} className="text-indigo-600 hover:text-indigo-900">Edit</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={sendEmailHandler} className="text-indigo-600 hover:text-indigo-900">Send Per Email</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={checkInHandler} className="text-indigo-600 hover:text-indigo-900">Check In</button>
            </td>
            {confirm && <ConfirmModal title={confirm.title} content={confirm.content} onConfirm={confirmHandler} onCancel={confirmCancelHandler} />}
            {confirm && <ConfirmModal title={confirm.title} content={confirm.content} onConfirm={confirmEmailHandler} onCancel={confirmCancelHandler} />}
        </tr>
    )
}