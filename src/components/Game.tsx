import styles, { layout } from "../style";
import { mygamegif, unity, csharp } from '../assets'

//return game section
export default function Game() {

    //array of languages
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
        //section
        <section id='game' className={`${layout.section} `}>

            {/**container */}
            <div className={`${layout.sectionInfo} `}>

                {/**header */}
                <h2 className={`${styles.heading2} ${styles.flexCenter} text-center mb-6 `}>
                    Original{" "}
                    Game
                </h2>

                {/**text under header*/}
                <p className={`${styles.paragraph} w-full ${styles.flexCenter} `}>
                    Designed and developed from scratch.{" "}
                    <br className="xs:block hidden" />
                    Made in Unity, using C Sharp.
                </p>

                {/**container */}
                <div className={`${styles.flexCenter} w-full`}>

                    {/**map logos */}
                    {images.map((img) => (

                        //contain image and name
                        <div key={img.id} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-6
                        mb-2 hover:scale-[1.2] mt-6`}>

                            {/**image */}
                            <img src={img.img} className={`object-contain object-center
                            w-[80px] min-w-[80px] m-10 ${img.id !== 'unity' ? '' : 'bg-white'}
                                `} />

                            {/**name of image */}
                            <h4 className={`text-center font-poppins font-normal 
                        xs:text-[22px] text-[16px] xs:leading-[53px] leading-[43px] 
                        text-white flex-col `}>
                                {img.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            {/**contain gif */}
            <div className={`${layout.sectionImg} `}>

                {/**gif */}
                <img src={mygamegif} alt='My game gif' className={`
                object-contain max-w-[470px] min-w-[360px]`} />
            </div>
        </section>
    )
}
