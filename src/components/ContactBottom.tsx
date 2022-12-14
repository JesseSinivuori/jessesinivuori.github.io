import { arrowUp } from "../assets"
import styles from "../style"
import Button from "./Button"

//return contact button and arrow
export default function ContactBottom() {
    return (
        //container with pulse animation
        <div className={`${styles.flexCenter} flex-col animate-pulse -mt-12 `}>

            {/**contain arrow image, make a circle around it + bounce animation */}
            <div className={`animate-bounce ${styles.flexCenter}
            rounded-full w-[32px] h-[32px] bg-primary`}>

                {/**arrow image */}
                <img src={arrowUp} className={`rotate-[130deg] ${styles.flexCenter}`} />
            </div>

            {/**contain button */}
            <div className={`${styles.flexCenter} `}>

                {/**button */}
                <Button to="/contact" styles='mt-20 mb-20' />
            </div>
        </div>
    )
}
