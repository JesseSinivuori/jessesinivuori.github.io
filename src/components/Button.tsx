import { Link } from "react-router-dom";
import styles from "../style";

type Props = {
    styles: string; //add styles to button
    to: string; //tell the button which page to go to like: "/contact"
}

//return a button
export default function Button(props: Props) {
    return (
        //container
        <div className={``}>

            {/**make the button a link */}
            <Link to={props.to}>

                {/**button */}
                <button type='button' className={`py-4 px-6 font-poppins
                font-medium text-[18px] text-primary outline-none rounded-[10px]
                bg-gradient-to-r from-[#70ffff] to-[#7088ff] 
                hover:from-[#ffdf87] hover:to-[#ff4a4a] ${props.styles}
                ${styles.flexCenter}`
                }>Contact</button>
            </Link>
        </div>

    )
}
