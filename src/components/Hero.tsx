import styles from '../style';
import { imgofme } from '../assets';
import ContactButton from './ContactButton';

//return hero section
export default function Hero() {
    return (
        //section
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} mb-0`}>

            {/**container */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-[100px]`}>

                {/**contain heading and button*/}
                <div className='flex flex-row justify-between items-center w-full'>

                    {/**heading */}
                    <h1 className='flex-1 font-poppins font-normal ss:text-[72px]
                    text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                        .jesse <br className='sm:block hidden' /> {" "}
                        <span className='text-gradient'>sinivuori</span> {" "}
                    </h1>

                    {/**button */}
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <ContactButton />
                    </div>
                </div>

                {/**text under heading */}
                <h1 className='font-poppins font-semibold ss:text-[68px]
                    text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
                    Software Engineer
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    I build websites, apps and games.
                </p>

            </div>

            {/**contain image and gradient */}
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

                {/**image */}
                <img src={imgofme} alt='Image of me.' className='w-[100%] h-[100%] 
                object-contain z-[5] mt-6'/>

                {/**gradients */}
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full
                bottom-40 white__gradient'></div>
                <div className='absolute z-[0] w-[50%] h-[50%] right-20
                bottom-20 blue__gradient'></div>
            </div>

        </section>
    )
}
