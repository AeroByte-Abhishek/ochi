import React from 'react';
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1" 
      className='w-full rounded-tl-3xl rounded-tr-3xl py-10 bg-[#004d43]'
    >
      <div className="text border-t-2 overflow-hidden border-b-2 border-zinc-300 flex whitespace-nowrap">
        <motion.h1 
          initial={{x: 0}} 
          animate={{x: "-100%"}} 
          transition={{ease: "linear", repeat: Infinity, duration: 10}} 
          className='text-[24vw] pr-20 leading-none font-["Founders Grotesk"] uppercase pt-10 -mt-[4.8vw] font-bold'
        >
          We are ochi
        </motion.h1>
        <motion.h1 
          initial={{x: 0}} 
          animate={{x: "-100%"}} 
          transition={{ease: "linear", repeat: Infinity, duration: 10}}  
          className='text-[24vw] pr-20 leading-none font-["Founders Grotesk"] uppercase -mt-[4.8vw] pt-10 font-bold'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
