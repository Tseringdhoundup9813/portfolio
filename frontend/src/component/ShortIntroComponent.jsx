'use client'
import React from 'react'
import "@/css/shortintro.css"

import {motion} from 'framer-motion'

function ShortIntroComponent() {
  return (
    <div className='short-intro-main-section'>
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