import styles from "../style";

type Props = {
    styles: string; //style the footer to set the position on different pages if needed
}

//return footer
export default function Footer(props: Props) {
    return (
        //container
        <div className={`bg-primary w-full ${styles.paddingX} ${styles.flexStart} ${props.styles}`}>

            {/**set width */}
            <div className={`${styles.boxWidth} `}>

                {/**make a section for content */}
                <section className={`${styles.flexCenter} py-6 mt-6 flex-col`}>

                    {/**make the gray line */}
                    <div className="w-full flex-row justify-between items-center md:flex-row
                                    flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">

                        {/**footer text */}
                        <p className="font-popping font-normal text-center text-[18px]
                                    leading-[27px] text-white ">
                            2022 Jesse Sinivuori.{" "}
                            <br className="xs:hidden block" />
                            All Rights Reserved.
                        </p>
                    </div>

                </section>
            </div>
        </div>
    )
}
