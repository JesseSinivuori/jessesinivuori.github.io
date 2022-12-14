import styles from "../style"

//return contact info
export default function Contact() {
    return (

        //container
        <div className={`${styles.flexCenter} flex flex-col
        
        `}>

            {/**email*/}
            <div className={`${styles.heading2} `}>
                <h2 className="ss:text-[36px] xs:text-[28px] text-[22px]">
                    sinivuorii@gmail.com
                </h2>

            </div>

            {/**a link to open email app*/}
            <div className={`${styles.paragraph} ${styles.flexCenter}`}>
                <a href="mailto:[sinivuorii@gmail.com]">
                    <p className="hover:text-[#70ffff] text-[18px]">
                        Click here to mail.
                    </p>
                </a>
            </div>

        </div>

    )
}
