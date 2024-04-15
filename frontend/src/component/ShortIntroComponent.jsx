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
      <h1 className='short-intro-main-title'>Profolio</h1>
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
        <div className='short-intro-para-container'>
          <motion.p
              initial={{y:100,opacity:0}}
              animate={{y:0,opacity:1}}
              style={{originX:0}}
              transition={{delay:0.3,duration:0.5}}>
              My name is Tsering Dhoundup Lama, and I am from Nepal. 
              I am a web developer with approximately two years of experience in the field. 
              Despite not having completed my formal education, I have discovered a deep passion for technology. 
              I have  also explored game development for about a year,further expanding my knowledge and expertise in the tech industry.
              My ultimate dream is to create a tech product that resonates on a global scale, 
              making a positive impact on people's lives. 
              I am dedicated to honing my skills and expanding my knowledge in the ever-evolving world of technology,
              striving to turn my dreams into reality.
        </motion.p>
   
        </div>
    </div>
  )
}

export default ShortIntroComponent