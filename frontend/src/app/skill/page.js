"use client"
import React from 'react'
import "@/css/skill.css"
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaSquareGit } from "react-icons/fa6";

import { motion } from 'framer-motion';


function SkillPage() {
  return (
    <div className='skill-main-wrapper'>
        <motion.h1 
        initial={{x:-200}}
        animate={{x:0}}
        transition={{duration:0.4}}
        className='skill-main-title'>TECHNOLOGIES</motion.h1>
        <motion.p 
          initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.3}}
         className='skill-main-short-des'>Check out what I am good at.</motion.p>


        <div className='skill-box-container'>
            <h1>Frontend technologies</h1>
            <div>
                <div className='skill-main-box'>
                    <IoLogoJavascript className='skill-javascript' />
                    <h1>JavaScript</h1>
                </div>
                <div className='skill-main-box'>
                    <TiHtml5 className='skill-html'/>                
                <h1>HTML</h1>
                </div>
                <div className='skill-main-box'>
                    <TiHtml5 className='skill-css' />
                    <h1>CSS</h1>
                </div>
                <div className='skill-main-box'>
                    <FaReact className='skill-react' />
                    <h1>REACT</h1>
                </div>

            </div>
        </div>

        {/* BACKEND */}
        <div className='skill-box-container'>
            <h1>Backend Technologies</h1>
            <div>
                <div className='skill-main-box'>
                    <SiExpress className='skill-react' />
                    <h1>EXPRESS JS</h1>
                </div>
                <div className='skill-main-box'>
                    <SiMongodb  className='skill-react' />
                    <h1>MONGO DB</h1>
                </div>
                <div className='skill-main-box'>
                    <DiMysql  className='skill-react' />
                    <h1>MYSQL</h1>
                </div>
          

            </div>
        </div>

        <div className='skill-box-container'>
            <h1>Tools</h1>
            <div>
                <div className='skill-main-box'>
                        <FaSquareGit className='skill-git' />
                        <h1>GIT</h1>
                </div>
            </div>
        </div>


    </div>
  )
}

export default SkillPage