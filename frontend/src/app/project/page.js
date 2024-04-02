import React from 'react'
import "@/css/project.css"
import UI1 from "../../../public/image/ui1.webp"
import Image from "next/image"

function page() {
  return (
    <section  className='project-container-wrapper'>
      <h1 className='project-container-title'>My Recent Work</h1>
      <p>Here are a few past design projects I've worked on</p>

      <section className='project-list-container'>
      <div>
          <Image src={UI1} width={500} height={500}></Image>
          <h1>Padmai School</h1>
          <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consul</p>
        </div>
        <div>
          <Image src={UI1} width={500} height={500}></Image>
          <h1>Padmai School</h1>
          <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consul</p>
        </div>
        <div>
          <Image src={UI1} width={500} height={500}></Image>
          <h1>Padmai School</h1>
          <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consul</p>
        </div>
        <div>
          <Image src={UI1} width={500} height={500}></Image>
          <h1>Padmai School</h1>
          <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consul</p>
        </div>
        <div>
          <Image src={UI1} width={500} height={500}></Image>
          <h1>Padmai School</h1>
          <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consul</p>
        </div>
        <div>
          <Image src={UI1} width={500} height={500}></Image>
          <h1>Padmai School</h1>
          <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consul</p>
        </div>
      </section>

    </section>
  )
}

export default page