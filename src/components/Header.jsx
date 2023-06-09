import { motion } from 'framer-motion'
import logoImg from '../assets/img/logo.png'
import avatar from "../assets/img/avatar.png"
import {Carts} from './index'
import { Link } from 'react-router-dom'


function Header() {
  const menu = ["Home", "Menu", "About us", "Service"]
  return (
    <div className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop and tablet */}
      <header className='hidden md:flex w-full h-full justify-between'>

        <Link to={"/"} id='logo' className='flex items-center gap-2'>
          <img src={logoImg} alt="logo" className='w-8 object-cover'/>
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        <div className='flex gap-8'>

          <ul id='navigaton' className='flex items-center gap-8'>
            {menu.map((link, index)=><motion.li whileTap={{scale:0.8}}
            key={index}
            className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              {link}
            </motion.li>)}
          </ul>

          <Carts></Carts>

          <motion.img
          whileTap={{scale:0.6}}
          src={avatar}
          className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
          alt="userprofile" />

        </div>

      </header>
      {/* mobile */}
      <div className='flex md:hidden w-full h-full bg-red-600'>Mobile</div>
    </div>

  )
}

export default Header