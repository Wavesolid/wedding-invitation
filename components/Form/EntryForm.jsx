import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Location from '../Location/Location.jsx';
import Modal from '../Modal/Modal'


export default function EntryForm({name,totalPerson,isFilled, slug}){

    const [invalid, setInvalid] = useState();

    const {ref,inView} = useInView({
        threshold:1,
        triggerOnce: true
    });

    const animation = useAnimation();

    const animation2 = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x: 0,
                opacity: 1,
                transition:{
                    duration:1.5,
                    delay: 0.5
                }
            })

            animation2.start({
                x:0,
                scaleX:-1,
                opacity: 1,
                transition:{
                    duration:1.5,
                    delay: 0.5
                }
            })

        }

        if(!inView){
            animation.start({
                x: -100,
                opacity: 0
            })

            animation2.start({
                x: 100,
                scaleX:-1,
                opacity: 0
            })
        }
    },[inView])

    const clickHandler = () => {
        setInvalid({
            title: "Invalid",
            content: "Anda telah mengkonfirmasi untuk tidak hadir pada acara ini"
        });
    }

    const invalidHandler = () => {
        setInvalid(null);
    }

    return(
        <div className='bg-putih'>
            <div className="bg-merah h-auto flex flex-col items-center rounded-b-[130px] p-[24px] pb-[85px]">
                {/* <div>
                    <motion.img animate={animation} className="float-right" src="/Icon/asset-batik-3-upper-right.svg"></motion.img>
                    <motion.img animate={animation2} src="/Icon/asset-batik-3-upper-left.svg"></motion.img>
                </div> */}
                <div className='bg-putih border-emas border-[10px] rounded-[5px] w-full h-auto'>
                    <Location/>

                    <div className='flex flex-col items-center mt-[3rem] text-emas'>
                        <div className='w-[80%] flex flex-col items-center border-y-[3px] border-emas mb-[12px] pt-[12px] font-kapital-bold mb-[40px]'>
                            <span ref={ref} className="text-[28px] font-bold">RSVP</span>
                            <span className="text-[14px] text-center">Mohon untuk konfirmasi kehadiran anda</span>
                            <div className="mt-[-32px] text-center relative top-[35px] bg-putih w-[40%]">
                                <span>sebelum</span>
                                <br/>
                                <span className="text-[14px] ">22 Mei 2022</span>
                            </div>
                        </div>
                        { totalPerson > 0 && 
                            <Link href={`/form/${slug}`}>
                                <button type='button' className="border-[5px] text-emas border-emas bg-merah rounded-[25px] text-[14px] p-[4px] w-[120px] mb-[16px] hover:bg-putih hover:text-emas transition duration-300" >
                                    <span>Klik Disini</span>
                                </button>
                            </Link>
                        }
                        { totalPerson <= 0 && 
                            <button type='button' onClick={clickHandler} className="border-[5px] text-emas border-emas bg-merah rounded-[25px] text-[14px] p-[4px] w-[120px] mb-[16px]" >
                                <span>Klik Disini</span>
                            </button>
                        }
                    </div>

                    <div>
                        <motion.img animate={animation} src="/Icon/bunga-3.png" className='w-[25%] float-right' alt=""  />
                        <motion.img animate={animation2} src="/Icon/bunga-3.png" className='w-[25%] float-left scale-x-[-1]' alt=""  />
                    </div>

                </div>
                {invalid && <Modal title={invalid.title} content={invalid.content} onConfirm={invalidHandler} />}
            </div>
        </div>
    )
}