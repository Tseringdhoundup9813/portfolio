"use client"
import React from 'react'
import "@/css/circularimagecomponent.css"
import {motion} from "framer-motion"
import Image from 'next/image'
import MyImage from "../../public/image/tsering.png"


function CircularImageComponent() {
  return (
    <motion.div
    initial={{y:"-250%",x:"-50%"}}
    viewport={{once:true}}
    animate={{y:"-20%",x:"-50%"}}
    transition={{duration:0.3,type:'tween'}} 
    className='circular-image-main-section'>
    <div>
      <Image src={MyImage} width={500} height={500}></Image>
    </div>
    </motion.div>
  )
}

export default CircularImageComponent