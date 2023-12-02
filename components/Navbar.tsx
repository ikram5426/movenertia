import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className='bg-[#ececea] h-[7vh] flex flex-row items-center '>
      <div className='w-[33.5vw] pl-[15px]'><GiHamburgerMenu/></div>
      
      <div className="w-[32.5vw] h-[7vh]">
        <Link href='/'>
          <Image src="/khalillogo.jpg" priority className="image" fill={true} alt="logo" />
        </Link></div> 
    {/* <div className=''></div> */}
    </div>
  )
}

export default Navbar