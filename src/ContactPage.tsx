import styles from "./style"
import Contact from "./components/Contact"
import { Footer } from "./components"

//return contact page
export default function ContactPage() {
    return (

        //container
        <div className={`${styles.flexCenter}`}>

            {/**padding */}
            <div className={`${styles.paddingY} ${styles.flexCenter}
            `}>

                {/**content container */}
                <div className={`${styles.flexCenter}
                 flex flex-col mt-[60%] `}>
                    <Contact />
                    <Footer styles={'absolute bottom-0'} />
                </div>
            </div>
        </div>

    )
}
