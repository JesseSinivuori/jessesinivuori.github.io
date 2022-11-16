import styles from '../style';
import { arrowUp } from '../assets';
import { useState } from 'react';

export default function GetStarted() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full 
         p-[2px] cursor-pointer 
         bg-gradient-to-r from-[#70ffff] to-[#7088ff] 
         hover:from-[#ffdf87] hover:to-[#ff4a4a]
         text-[#70ffff] hover:text-[#ffa759] 
         
        `}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]
            rounded-full
            `}>
                <div className={`${styles.flexStart} flex-row
                `}>
                    <p className='font-poppins  font-medium text-[18px] leading-[23px] mr-2 '>
                        <span className=''>Get</span>
                    </p>
                    <img src={arrowUp} className=' w-[23px] h-[23px] ogject-contain'
                        alt='arrow' />
                </div>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className=''>Started</span>
                </p>
            </div>
        </div>
    )
}