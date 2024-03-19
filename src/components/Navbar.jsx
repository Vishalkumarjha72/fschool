import logo from '../assets/logo-new.svg'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="w-full h-12 border-b-[1px] flex items-center justify-center">
        <div className="flex w-[81%] items-center justify-between" >
            <div >
                <img src={logo} alt="logo" className=''/>
            </div>

            <div className='flex gap-8 pr-6'>
                <div className='flex items-center text-[14px] hover:text-black text-[#525252] font-semibold font-sans cursor-pointer gap-1 '>
                    <Link> Explore</Link>
                    <IoMdArrowDropdown/>
                </div>
                <div className='flex items-center text-[14px] hover:text-black text-[#525252] font-semibold font-sans cursor-pointer gap-1'>
                    <Link> Certifications</Link>
                    <IoMdArrowDropdown/>
                </div>
                <div className='flex items-center text-[14px] hover:text-black text-[#525252] font-semibold font-sans cursor-pointer gap-1'>
                    <Link> Course Creation</Link>
                    <IoMdArrowDropdown/>
                </div>
                <Link className='text-[14px] hover:text-black text-[#525252] font-semibold'>About Us</Link>
                <Link className='text-[14px] hover:text-black text-[#525252] font-semibold'>Blog</Link>
                <Link className='text-[14px] text-[#525252] hover:text-black font-semibold'>Login</Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar