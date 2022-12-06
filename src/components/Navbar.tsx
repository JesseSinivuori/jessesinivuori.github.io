import { useState } from 'react';
import { Link } from 'react-router-dom';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants/index.jsx';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar 
        
         ">
            {/*<img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />*/}
                <p className='text-white font-light'>

                    <span className={'text-white'}>.</span>
                    j
                    <span className={'text-[#70ffff]'}>s</span>
                </p>


            <ul className='list-none flex justify-end items-center flex-1 '>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins
                        font-normal
                        cursor-pointer
                        text-[16px]
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                        text-white
                        hover:text-[#70ffff]
                        `}
                    >
                        {/*
                        <Link to={`${nav.id}`}>{nav.title}</Link>
                */}

                        <a href={`${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] obejct-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} 
                    p-6 bg-black-gradient fixed top-20 right-0
                    mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>

                    <ul className='list-none felx-col justify-end items-center 
                    flex-1  '>
                        {navLinks.map((nav, index) => (
                            
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal 
                                cursor-pointer text-[16px] 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                        text-white 
                        `}
                            >

                                {/*
                        <Link to={`${nav.id}`}>{nav.title}</Link>
                */}

                                <a href={`${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </nav>
    )
}
