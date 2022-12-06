import { stats, mySkills } from "../constants";
import styles, { layout } from "../style";

export default function Stats() {
    return (
        <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
            <h4 className={`${styles.heading2} ${styles.flexCenter} mb-14`}>
                My skills
            </h4>
            {mySkills.map((skills) => (
                <div key={skills.id} className={`justify-start
                items-center flex-row  hover:scale-[1.2]`}>
                    <div className={`${styles.flexCenter}  flex-row flex-wrap sm:mb-6 mb-2
                    
                    `}>
                        <img src={skills.img} className={`object-contain object-center
                        sm:w-[80px] w-[80px] m-6
                        `} />

                        
                    </div>
                    <h4 className={`text-center font-poppins font-normal 
                    xs:-text-[30px] text-[20px] xs:leading-[53px] leading-[43px] 
                    text-white flex-col`}>{skills.name}</h4>


                    {/*
                    <h4 className='font-poppins font-semibold xs:-text-[40px] text-[30px]
                    xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
                    <p className='font-poppins font-normal xs:-text-[20px] text-[15px]
                    xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
                        {stat.title}
                    </p>
            */}
                </div>
            ))}
        </section>
    )
}
