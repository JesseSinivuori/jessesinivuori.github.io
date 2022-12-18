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
                    s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m
                </h2>

            </div>

            {/**a link to open email app*/}
            <div className={`${styles.paragraph} ${styles.flexCenter}`}>
                <a href="&#109;a&#105;lt&#111;:s&#105;niv&#117;o&#114;&#105;i&#64;&#103;&#109;&#97;il&#46;c&#111;m"
                    target='blank'
                >
                    <p className="hover:text-[#70ffff] text-[18px]">
                        Click here to mail.
                    </p>
                </a>
            </div>

        </div>

    )
}
