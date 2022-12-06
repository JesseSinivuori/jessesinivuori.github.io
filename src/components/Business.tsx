import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { mygamegif, unity, csharp } from '../assets'

type props = {
    icon: string,
    title: string,
    content: string,
    index: number
}

function FeatureCard({ icon, title, content, index }: props) {
    return (
        <div className={`flex felx-row p-6 rounded-[20px] 
        ${index !== features.length - 1} ? 'mb-6' : 'mb-0' feature-card`}>
            <div className={`w-[64px] h-[64px] ${styles.flexCenter} bg-dimblue`}>
                <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
            </div>
            <div className='flex-1 flex flex-col ml-3'>
                <h4 className='font-poppins font-semibold text-white text-[18px]
                leading-[23px] mb-1'>
                    {title}
                </h4>
                <p className='font-poppins font-normal text-dimWhite text-[16px]
                leading-[24px] mb-1'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default function Business() {
    const images = [
        {
            id: 'unity',
            img: unity,
            name: 'Unity',
        },
        {
            id: 'csharp',
            img: csharp,
            name: 'C Sharp',
        },
    ];
    return (
        <section id='features'>
            <section className={`${layout.section} `}>
                <div className={`${layout.sectionInfo}
                `}>

                    <h2 className={`${styles.heading2} ${styles.flexCenter}
                text-center mb-6 
                `}>
                        Original{" "}
                        {/*<br className={`${styles.heading2} sm:block hidden
                `} />*/}
                        Game
                    </h2>
                    <p className={`${styles.paragraph} w-full 
                 ${styles.flexCenter} 
                `}>
                        Designed and developed from scratch.<br />
                        Made in Unity, using C Sharp.
                    </p>
                    <div className={`${styles.flexCenter} w-full`}>
                        {images.map((img) => (
                            <div className={`justify-start
                            items-center flex-row  hover:scale-[1.2] mt-6 `}>
                                <div key={img.id} className={`${styles.flexCenter}  flex-row flex-wrap sm:mb-6 mb-2 
                                 '} 
                            `}>
                                    <img src={img.img} className={`object-contain object-center
                        sm:w-[80px] w-[80px] m-6 ${img.id !== 'unity' ? '' : 'bg-white'}
                        
                        `} />
                                    <h4 className={`text-center font-poppins font-normal 
                    xs:-text-[30px] text-[20px] xs:leading-[53px] leading-[43px] 
                    text-white flex-col`}>{img.name}</h4>




                                </div>
                            </div>
                        ))}



                    </div>

                    {/*
                <Button styles='mt-10' />
    */}


                </div>
                <div className={`${layout.sectionImg} `}>

                    <img src={mygamegif} alt='My game gif' className={`
            object-contain`}/>

                    {/*
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))} */}

                </div>
            </section>

        </section>
    )
}
