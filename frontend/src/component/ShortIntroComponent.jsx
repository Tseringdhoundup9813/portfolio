'use client'
import React from 'react'
import "@/css/shortintro.css"
import Image from 'next/image'
import MyImage from "../../public/image/tsering.png"
import bgDesign from "../../public/image/blob.svg"

import {motion} from 'framer-motion'

function ShortIntroComponent() {
  return (
    <div className='short-intro-main-section'>

        <div className='short-image-main-section'>
            <div>
               <motion.h1
                   initial={{x:-20,opacity:0}}
                   animate={{x:0,opacity:1}}
                   transition={{duration:0.1,type:"spring",damping:15,bounce:20}}>
                Hi !</motion.h1>
               <motion.h1
                 initial={{x:-20,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{delay:0.2,duration:0.3,type:"spring",damping:15,bounce:20}}>
                  I AM</motion.h1>
               <motion.h1
                 initial={{x:-20,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{delay:0.5,duration:0.3,type:"spring",damping:5,bounce:60}}>Tsering</motion.h1>
               <motion.h1
                 initial={{x:-20,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{delay:0.7,duration:0.3,type:"spring",damping:6,bounce:20}}>Dhoundup</motion.h1>
               <motion.h2 
                 initial={{x:-20,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{}}>Full STACK DEVELOPER</motion.h2>
            </div>
            <motion.div      
                initial={{x:200,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{duration:0.2}}>
               <Image src={MyImage} width={500} height={500} alt='project-image'></Image>
            </motion.div>
        </div>
        <motion.h1 
          style={{originX:0}}
          initial={{y:-500,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{delay:0.5,duration:0.6,type:"spring",damping:15,bounce:20}}>
            Hi !
        </motion.h1>
        <motion.h2
         initial={{x:200,opacity:0}}
         animate={{x:0,opacity:1}}
         style={{originX:0}}
         transition={{delay:0.3,duration:0.5,type:"spring",damping:18}}>
          I am tsering Dhoundup
         </motion.h2>
        <motion.h3
          initial={{opacity:0}}
          animate={{opacity:1}}
          style={{originX:0}}
          transition={{delay:0.2,duration:0.5}}>
        Full Stack Web developer
        </motion.h3>


        <h1 className='mobile-device-about-me-title'>About Me</h1>
        <motion.p
             initial={{y:100,opacity:0}}
             animate={{y:0,opacity:1}}
             style={{originX:0}}
             transition={{delay:0.3,duration:0.5}}>
            This is Tsering Dhoundup.I am a young learner who is looking 
            for the pace to work with company
            that works for technology. 
            I have spent the quite few years learni
      </motion.p>
    </div>
  )
}

export default ShortIntroComponent