import Image from 'next/image'
import React from 'react'
import { BsTruck } from "react-icons/bs";
 import { RiTreasureMapFill } from "react-icons/ri";
const Hero = () => {
  return (
    <div className='h-[86vh] bg-[#000]'>
      {/*Hero Image  */}
      <div className='h-[70vh] w-[100vw]'>
        <Image src="/hero.png" fill alt="hero" className='image opacity-50' />
  
        {/* Hero Overlay text  */}
        <div className='bg-[#000]/50 absolute p-6  top-[7vh] text-[#fff] h-[86.5vh] leading-[1.20] font-sofia  flex items-center justify-center w-[100vw]  flex-col'>
          <h1 className=' text-[45px]  leading-[1.20] font-[800]  flex items-center justify-center text-center'>Movenertia Montreal & Ottawa</h1>
          <p className=' text-[20px] font-[500]  flex items-center justify-center flex-wrap text-center'>Local & Long distance high quality services for an effortless move</p>

          <div className='flex flex-row mt-[10vw] gap-4 font-[500] '>
            <button className='uppercase text-[12px] cursor-pointer text-[#fff] bg-[#f79800] py-[10px] px-[15px] rounded-xl'>Our Services</button>
            <button className='uppercase text-[12px] cursor-pointer text-[#333] bg-[#f5f5f5] py-[10px] px-[15px] rounded-xl'>Get A Free Quote</button>
          </div>
        </div>
      </div>
      <div className='bg-black w-[100vw] h-[150vh]'>
        <div className='bg-[#222] absolute mt-[10vh] ml-[10vw] h-auto py-6 w-[80vw] shadow-xl'>
{/* About us */}
        <div className='flex flex-col items-center justify-center py-4'>< BsTruck className="text-[#f79800] text-[70px] font-light" />
          <h3 className='text-[#fff] py-[3vh] font-sofia text-[24px] font-semibold'>About us</h3>
          <p className='text-center font-sofia text-[14px] text-[#bbbbbb] px-[8vw]'>Whether your move is large or small, we excel at handling every aspect with ease. Our proficient Movenertia are committed to ensuring a dependable and trustworthy delivery of your belongings, always delivered promptly and securely.</p>
        </div>

        <div className='flex flex-col items-center justify-center py-4'>
          <RiTreasureMapFill className="text-[#f79800] text-[70px] font-light" />
          <h3 className='text-[#fff] py-[3vh] font-sofia text-[24px] font-semibold'>What we do</h3>
          <p className='text-center font-sofia text-[14px] text-[#bbbbbb] px-[8vw]'>At Top Movers, our commitment lies in delivering top-notch moving services tailored for both residential and commercial clients. Explore our range of services to discover our areas of expertise.</p>
          </div>
          
          <div className='flex flex-col items-center justify-center py-4'><h3 className='text-[#fff] py-[3vh] font-sofia text-[24px] font-semibold'>GET A QUOTE</h3>
          
            <p className='text-center font-sofia text-[14px] text-[#bbbbbb] px-[8vw]'>
              Planning a move? Allow our Movenertia movers to handle all your needs. Simply complete our form, and we'll reach out to you with an estimate within 24 hours.</p>
          </div>
      </div></div>
      
    </div>
  )
}

export default Hero