import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

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
    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" />we'll handle
                    the money.</h2>
                <p className={`${styles.paragraph} max-w-[470px]`}>With the right credit card, youcan improve you financial life by
                    building credit, earning rewards and saving money. But with hundreds
                    of credit cards on the market.
                </p>
                <Button styles='mt-10' />

            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    )
}