"use client"
import React from 'react'
import {motion} from "framer-motion"
import CircularImageComponent from './CircularImageComponent'

function LeftSideComponent() {
  return (
        <motion.div
          initial={{x:0,width:"14%"}}
          viewport={{once:true}}
          transition={{duration:0,delay:0.3}}  
          animate={{x:0,width:"14%"}}>
      
          <CircularImageComponent/>

        </motion.div>

  )
}

export default LeftSideComponent