'use client'
import React from 'react'
import Link from "next/link"
import "@/css/navbar.css"
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname();


  return (
    <section className='navbar-main-container-wrapper'>
        <ul>
            <li><Link className={`${pathname=='/'?'active':''}`} href="/">Home</Link></li>
            <li><Link  className={`${pathname=='/project'?'active':''}`} href="/project">Project</Link></li>

        </ul>
    </section>
  )
}

export default Navbar