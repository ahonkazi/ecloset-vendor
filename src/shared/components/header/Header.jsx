import React, { useContext } from 'react'
import { HeaderWrapper } from '../wrapper/DefaultWrapper'
import { GetGlobalContext } from '../../../context/GlobalContext'
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { BiBell } from 'react-icons/bi';
import profilePic from '../../assets/profile.webp';
const Header = () => {
    const globalContext = useContext(GetGlobalContext);
    return (
        <header className='h-[50px] xl:h-[60px] flex items-center w-full bg-white shadow-1 z-[90] fixed top-0 left-0'>
            <HeaderWrapper>
                <div className="flex justify-between items-center">
                    <div className={`${globalContext.sidebarStatus ? 'xs:hidden md:block' : ''}`}>

                        <IconButton onClick={() => globalContext.setSidebarStatus(!globalContext.sidebarStatus)}>
                            <svg width="18px" height="18px" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H25" stroke="black" />
                                <path d="M0 9H25" stroke="black" />
                                <path d="M0 17H25" stroke="black" />
                            </svg>
                        </IconButton>
                    </div>
                    <div className="right text-DarkGray flex items-center gap-2 font-WorkSans">
                        <Link to={'/help'}>Help</Link>
                        <IconButton>
                            <BiBell />
                        </IconButton>

                        <button>
                            <img className='w-10 h-10 rounded-full' src={profilePic} alt="" />
                        </button>
                    </div>
                </div>
            </HeaderWrapper>
        </header>
    )
}

export default Header