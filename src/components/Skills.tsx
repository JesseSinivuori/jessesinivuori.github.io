import { mySkills } from "../constants";
import styles from "../style";

//return skills
export default function Skills() {

    return (

        //section
        <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6 relative`}>

            {/**heading */}
            <h4 className={`${styles.heading2} ${styles.flexCenter} mb-20`}>
                My skills
            </h4>

            {/**contain skills */}
            <div className={`${styles.flexCenter} flex-wrap `}>

                {/**map skills */}
                {mySkills.map((skills) => (

                    //contain skill
                    <div key={skills.id} className={`justify-start 
                    items-center flex-row hover:scale-[1.2] `}>

                        {/**image */}
                        <div className={`${styles.flexCenter} flex-row flex-wrap`}>
                            <img src={skills.img} className={`object-contain object-center
                            w-[80px] min-w-[80px] m-10`} />
                        </div>

                        {/**name */}
                        <h4 className={`text-center font-poppins font-normal 
                        xs:text-[22px] text-[16px] xs:leading-[53px] leading-[43px] 
                        text-white flex-col mb-8`}>
                            {skills.name}
                        </h4>

                    </div>
                ))}
            </div>
        </section>

    )
}



