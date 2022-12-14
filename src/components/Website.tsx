import { react, typescript, html5, tailwindcss, codeimg, arrowUp } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

//return website section
export default function Website() {

    //array of languages
    const images = [
        {
            id: 'react',
            img: react,
            name: 'React',
        },
        {
            id: 'typescript',
            img: typescript,
            name: 'Typescript',
        },
        {
            id: 'html5',
            img: html5,
            name: 'HTML',
        },
        {
            id: 'tailwindcss',
            img: tailwindcss,
            name: 'Tailwind CSS',
        },

    ];

    return (
        //section
        <section >

            {/**reverse section layout */}
            <section id='website' className={`${layout.sectionReverse} ${styles.flexCenter} mb-20`}>

                {/**contain image */}
                <div className={`${layout.sectionImgReverse} ${styles.flexStart} `}>

                    {/**image */}
                    <img src={codeimg} alt='Image of my code.' className={` z-[5] w-full 
                    object-contain
                    w-[470px]
                    max-w-[470px]
                    lg:w-[570px]
                    lg:max-w-[570px]
                    `} />

                </div>

                {/**contain gradients */}
                <div className='absolute z-[0] w-[40%] h-[35%] left-20'>
                    {/**gradients */}
                    <div className='absolute z-[0] w-[40%] h-[35%] left-0 pink__gradient'></div>
                    <div className='absolute z-[1] w-[80%] h-[80%] rounded-full 
                    bottom-40 white__gradient'></div>
                    <div className='absolute z-[0] w-[50%] h-[50%] top-60
                    bottom-20 blue__gradient'></div>
                </div>

                {/**container */}

                <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-6
                    
                  `}>

                    {/**heading */}
                    <h2 className={`${styles.heading2} text-center mb-6  `}>
                        This{" "}
                        Website
                    </h2>

                    {/**text under heading*/}
                    <p className={`${styles.paragraph} w-full ${styles.flexCenter} `}>
                        Built in React, with the following languages.
                    </p>
                    <div className={`flex-wrap ${styles.flexCenter}`}>
                        {/**map languages */}
                        {images.map((img) => (
                            //contain language
                            <div key={img.id} className={`justify-start 
                            items-center hover:scale-[1.2] mt-6 sm:mb-6 mb-2 
                            
                            `}>

                                {/**image */}
                                <img src={img.img} className={`object-contain object-center
                            w-[80px] min-w-[80px] m-10 
                                `} />

                                {/**name */}
                                <h4 className={`text-center font-poppins font-normal 
                        xs:text-[22px] text-[16px] xs:leading-[53px] leading-[43px] 
                        text-white flex-col `}>{img.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </section>

    )
}