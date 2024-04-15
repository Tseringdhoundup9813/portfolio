'use client'
import React from 'react'
import Link from "next/link"
import "@/css/navbar.css"
import { usePathname } from 'next/navigation'

import { GoHome } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { TiContacts } from "react-icons/ti";
import { GiLaddersPlatform } from "react-icons/gi";

function Navbar() {
    const pathname= usePathname();


  return (
    <section className='navbar-main-container-wrapper'>
        <ul>
            <li><Link className={`${pathname=='/'?'active':''}`} href="/">Home<span><GoHome className='navbar-icon' /></span></Link></li>
            <li><Link  className={`${pathname=='/project'?'active':''}`} href="/project">Project<span><CgWorkAlt className='navbar-icon'/></span></Link></li>
            <li><Link  className={`${pathname=='/skill'?'active':''}`} href="/skill">Skill<span><FaTools className='navbar-icon'/></span></Link></li>
            <li><Link  className={`${pathname=='/experience'?'active':''}`} href="/experience">Expereince<span><GiLaddersPlatform className='navbar-icon'/></span></Link></li>
            <li><Link  className={`${pathname=='/contact'?'active':''}`} href="/contact">contact<span><TiContacts className='navbar-icon'/></span></Link></li>

        </ul>
    </section>
  )
}

export default Navbar