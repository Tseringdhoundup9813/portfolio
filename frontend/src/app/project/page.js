"use client"
import React from 'react'
import "@/css/project.css"
import UI1 from "../../../public/image/ui1.webp"
import UI2 from "../../../public/image/ui.jpg"
import UI3 from "../../../public/image/ui2.jpg"
import {motion} from "framer-motion"



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
            <Image src={UI1} width={500} height={500} alt='img'></Image>
            <div className='project-detail-container'>
              <div className='project-detail-title-and-year-container'>
                <h1 className='project-detail-title'> Padmai School </h1>
                <p className='project-detail-year'>Date 2019</p>
              </div>
              <p className='project-detail-des'>Since beginning my journey as a freelance designer 12 years ago, Ive done remote work for agencies, consul</p>
              <div className='project-detail-tools-container'>
                <h1>Technologies are</h1>
                <ul>
                  <li>HTML</li>
                  <li>JAVASCRIPT</li>
                  <li>CSS</li>
                  <li>REACT</li>
                </ul>
              </div>
            </div>
          </motion.div>


        <motion.div
           initial={{opacity:0.2}}
           animate={{opacity:1}}
           transition={{duration:1.2}}>
          <Image src={UI2} width={500} height={500} alt='img'></Image>
          <div className='project-detail-container'>
            <div className='project-detail-title-and-year-container'>
              <h1 className='project-detail-title'>Padmai School</h1>
              <p className='project-detail-year'>Date 2019</p>
            </div>
            <p className='project-detail-des'>Since beginning my journey as a freelance designer 12 years ago, Ive done remote work for agencies, consul</p>
            <div className='project-detail-tools-container'>
              <h1>Technologies are</h1>
              <ul>
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>CSS</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
        </motion.div>



        <motion.div   initial={{opacity:0.2}}
          animate={{opacity:1}}
          transition={{duration:1}}>
          <Image src={UI3} width={500} height={500} alt='img'></Image>
          <div className='project-detail-container'>
            <div className='project-detail-title-and-year-container'>
              <h1 className='project-detail-title'>Padmai School</h1>
              <p className='project-detail-year'>Date 2019</p>
            </div>
            <p className='project-detail-des'>Since beginning my journey as a freelance designer 12 years ago, Ive done remote work for agencies, consul</p>
            <div className='project-detail-tools-container'>
              <h1>Technologies are</h1>
              <ul>
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>CSS</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
        </motion.div>

        


        <motion.div   initial={{opacity:0.2}}
          animate={{opacity:1}}
          transition={{duration:1.1}}>
          <Image src={UI2} width={500} height={500} alt='img'></Image>
          <div className='project-detail-container'>
            <div className='project-detail-title-and-year-container'>
              <h1 className='project-detail-title'>Padmai School</h1>
              <p className='project-detail-year'>Date 2019</p>
            </div>
            <p className='project-detail-des'>Since beginning my journey as a freelance designer 12 years ago, Ive done remote work for agencies, consul</p>
            <div className='project-detail-tools-container'>
              <h1>Technologies are</h1>
              <ul>
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>CSS</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div    initial={{opacity:0.2}}
          animate={{opacity:1}}
          transition={{duration:1.4}}>
          <Image src={UI3} width={500} height={500} alt='img'></Image>
          <div className='project-detail-container'>
            <div className='project-detail-title-and-year-container'>
              <h1 className='project-detail-title'>Padmai School</h1>
              <p className='project-detail-year'>Date 2019</p>
            </div>
            <p className='project-detail-des'>Since beginning my journey as a freelance designer 12 years ago, Ive done remote work for agencies, consul</p>
            <div className='project-detail-tools-container'>
              <h1>Technologies are</h1>
              <ul>
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>CSS</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div   initial={{opacity:0.2}}
          animate={{opacity:1}}
          transition={{duration:3}}div>
          <Image src={UI1} width={500} height={500} alt='img'></Image>
          <div className='project-detail-container'>
            <div className='project-detail-title-and-year-container'>
              <h1 className='project-detail-title'>Padmai School</h1>
              <p className='project-detail-year'>Date 2019</p>
            </div>
            <p className='project-detail-des'>Since beginning my journey asncies, consul</p>
            <div className='project-detail-tools-container'>
              <h1>Technologies are</h1>
              <ul>
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>CSS</li>
                <li>REACT</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

    </section>
  )
}

export default page