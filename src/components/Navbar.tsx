import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../constants/index.jsx';
import styles from '../style';

//return navbar
export default function Navbar() {

    //toggle menu on mobile
    const [toggle, setToggle] = useState(false);

    return (
        //container
        <div className="bg-primary w-full overflow-hidden fixed z-[99]">

            {/**padding and centering*/}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>

                {/**set width */}
                <div className={`${styles.boxWidth} `}>

                    {/**nav container */}
                    <nav className="w-full flex py-6 justify-between items-center navbar">

                        {/**make logo a link to home page*/}
                        <Link to={'/'}>

                            {/**logo text */}
                            <p className='text-white font-light hover:tracking-widest'>
                                <span className={'text-white'}>.</span>
                                j
                                <span className={'text-[#70ffff] '}>s</span>
                            </p>
                        </Link>

                        {/**contain links */}
                        <ul className='list-none flex justify-end items-center flex-1 '>

                            {/**map links */}
                            {navLinks.map((nav, index) => (
                                //list link titles
                                <li key={nav.id} className={`font-poppins font-normal 
                                cursor-pointer text-[16px]
                                ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                                text-white hover:text-[#70ffff]`}>
                                    <Link to={`${nav.id}`}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>

                        {/**menu icon container on mobile(not in use(hidden)) */}
                        <div className='hidden flex flex-1 justify-end items-center'>

                            {/**menu icons */}
                            <img src={toggle ? close : menu}
                                alt='menu'
                                className='w-[28px] h-[28px] obejct-contain'
                                onClick={() => setToggle((prev) => !prev)}
                            />

                            {/**menu container*/}
                            <div className={`${toggle ? 'flex' : 'hidden'} 
                            p-6 bg-black-gradient fixed top-20 right-0
                            mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>

                                {/**contain links */}
                                <ul className='list-none felx-col justify-end items-center 
                                flex-1  '>
                                    {/**map links */}
                                    {navLinks.map((nav, index) => (
                                        //list link titles
                                        <li
                                            key={nav.id}
                                            className={`font-poppins font-normal 
                                            cursor-pointer text-[16px] 
                                            ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                                            text-white `}
                                        >
                                            <Link to={`${nav.id}`}>{nav.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
