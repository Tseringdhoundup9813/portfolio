"use client"
import React from 'react'
import "@/css/circularimagecomponent.css"
import {motion} from "framer-motion"
import Image from 'next/image'
import MyImage from "../../public/image/tsering.png"


function CircularImageComponent() {
  return (
    <div className='circular-image-main-section'>
    <div>
      <Image src={MyImage} width={500} alt='portfolio image' height={500}></Image>
    </div>
    </div>
  )
}

export default CircularImageComponent