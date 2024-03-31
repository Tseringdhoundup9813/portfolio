"use client"
import React from 'react'
import {motion} from "framer-motion"
import CircularImageComponent from './CircularImageComponent'

function LeftSideComponent() {
  return (
        <motion.div
          initial={{x:"-50%",width:"100%"}}
          viewport={{once:true}}
          transition={{duration:0.3,delay:0.3}}  
          animate={{x:0,width:"17%"}}>
      
          <CircularImageComponent/>

        </motion.div>

  )
}

export default LeftSideComponent