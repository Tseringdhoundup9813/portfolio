"use client"
import React from 'react'
import "@/css/project.css"
import UI1 from "../../../public/image/ui1.webp"
import UI2 from "../../../public/image/ui.jpg"
import UI3 from "../../../public/image/ui2.jpg"
import padmaiImage from "../../../public/image/padmai.png"
import naksaImage from "../../../public/image/naksa.png"
import globaltechImage from "../../../public/image/globaltech.png"


import {motion} from "framer-motion"

import Link from 'next/link'
import Image from "next/image"

function page() {
  return (
    <section  className='project-container-wrapper'>
      <motion.h1 className='project-container-title'
        initial={{x:150,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.3}}>
        My Recent Work
      </motion.h1>
      <motion.p
       initial={{x:-150,opacity:0}}
       animate={{x:0,opacity:1}}
       transition={{duration:0.3}}
      >Here are a few past design projects Ive worked on</motion.p>

      <section className='project-list-container'>
        <motion.div
          initial={{opacity:0.2}}
          animate={{opacity:1}}
          transition={{duration:0.5}}
        >
            <Link href={"https://padmaischool.edu.np/"}>
              <Image src={padmaiImage} width={500} height={500} alt='img'></Image>
            </Link>
            <div className='project-detail-container'>
              <div className='project-detail-title-and-year-container'>
                <h1 className='project-detail-title'> Padmai School </h1>
                <p className='project-detail-year'>Date 2023</p>
              </div>
              <p className='project-detail-des'>
              The school website serves as a comprehensive portfolio showcasing various features such as a banner,
               information about the founder, a gallery of images, and a list of teachers. These components provide visitors
                with a clear overview of the school's key information and personnel.
              </p>
              <div className='project-detail-tools-container'>
                <h1>Technologies </h1>
                <ul>
                  <li>HTML</li>
                  <li>JAVASCRIPT</li>
                  <li>CSS</li>
                  <li>REACT</li>
                  <li>EXPRESS JS</li>
                  <li>MONGO DB</li>

                </ul>
              </div>
            </div>
          </motion.div>


        <motion.div
           initial={{opacity:0.2}}
           animate={{opacity:1}}
           transition={{duration:1.2}}>
           <Link href="https://naksagumba.org.np/">
              <Image src={naksaImage} width={500} height={500} alt='img'></Image>
           </Link>
          <div className='project-detail-container'>
            <div className='project-detail-title-and-year-container'>
              <h1 className='project-detail-title'>Naksa Chholing Monastery</h1>
              <p className='project-detail-year'>Date 2023</p>
            </div>
            <p className='project-detail-des'>
              The Village Monastery website serves as a hub of information about the monastery, its history, founders, 
              and contact details for those interested in making donations. 
              The site features a gallery showcasing the beauty of the monastery and 
              the peaceful surroundings it offers to visitors.
            </p>
            <div className='project-detail-tools-container'>
              <h1>Technologies are</h1>
              <ul>
                  <li>HTML</li>
                  <li>JAVASCRIPT</li>
                  <li>CSS</li>
                  <li>REACT</li>
                  <li>EXPRESS JS</li>
                  <li>MONGO DB</li>
              </ul>
            </div>
          </div>
        </motion.div>



        <motion.div   initial={{opacity:0.2}}
          animate={{opacity:1}}
          transition={{duration:1}}>
          <Link href={"https://globaltech.com.np/"}>
           <Image src={globaltechImage} width={500} height={500} alt='img'></Image>
          </Link> 
          <div className='project-detail-container'>
            <div className='project-detail-title-and-year-container'>
              <h1 className='project-detail-title'>GLOBAL TECH IT COMPANY</h1>
              <p className='project-detail-year'>Date 2019</p>
            </div>
            <p className='project-detail-des'>
            IT company website portfolio showcases a range of our services, products, and client work. From eye-catching banners 
            to detailed service descriptions, we have created a dynamic and engaging platform to highlight our capabilities.
             the portfolio also includes a contact page for potential clients to easily get in touch with us. 
            Explore our website to see the quality of work we deliver and how we can help your business succeed in the digital world
            </p>
            <div className='project-detail-tools-container'>
              <h1>Technologies are</h1>
              <ul>
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </motion.div>

        


     
     
      </section>

    </section>
  )
}

export default page