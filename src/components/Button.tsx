import { CSSProperties, HtmlHTMLAttributes } from "react";

export default function Button({ styles }: any) {
    return (
        <button type='button' className={`py-4 px-6 font-poppins
        font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]
        bg-gradient-to-r from-[#70ffff] to-[#7088ff] 
        hover:from-[#ffdf87] hover:to-[#ff4a4a]
        `}>
            Get Started
        </button>
    )
}
