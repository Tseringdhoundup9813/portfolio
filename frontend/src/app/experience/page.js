
"use client"
import React from 'react'
import '@/css/expe.css'
import {motion} from "framer-motion"



function ExperiencePage() {
  return (
    <div className='experience-main-wrapper'>
        <motion.h1 
          initial={{x:150,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.3}}
        className='exp-main-title'>Expereince</motion.h1>
        <motion.p className='exp-main-des'
         initial={{x:-150,opacity:0}}
         animate={{x:0,opacity:1}}
         transition={{duration:0.3}}>
        The experience that I have gained in recent years.</motion.p>

        <div className='exp-box-wrapper'>
            <div className='exp-box-container'>
                <h1>Naksal Cholling Gompa</h1>
                <p>Date 2024-3-10</p>
                <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <ul>
                    <li>It is a long established fact that a reader will be distracted</li>
                    <li>software like Aldus PageMaker including versions of Lorem Ipsum</li>
                    <li>The standard chunk of Lorem Ipsum used</li>
                  </ul>
            </div>
            {/* --------------- */}
            <div className='exp-box-container'>
                <h1>Naksal Cholling Gompa</h1>
                <p>Date 2024-3-10</p>
                <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <ul>
                    <li>It is a long established fact that a reader will be distracted</li>
                    <li>software like Aldus PageMaker including versions of Lorem Ipsum</li>
                    <li>The standard chunk of Lorem Ipsum used</li>
                  </ul>
            </div>
            {/* ---------------- */}
            <div className='exp-box-container'>
                <h1>Naksal Cholling Gompa</h1>
                <p>Date 2024-3-10</p>
                <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <ul>
                    <li>It is a long established fact that a reader will be distracted</li>
                    <li>software like Aldus PageMaker including versions of Lorem Ipsum</li>
                    <li>The standard chunk of Lorem Ipsum used</li>
                  </ul>
            </div>
        </div>
    </div>
  )
}

export default ExperiencePage