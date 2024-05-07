"use client";
import React from "react";
import "@/css/expe.css";
import { motion } from "framer-motion";

function ExperiencePage() {
  return (
    <div className="experience-main-wrapper">
      <motion.h1
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="exp-main-title"
      >
        Expereince
      </motion.h1>
      <motion.p
        className="exp-main-des"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        The experience that I have gained in recent years.
      </motion.p>

      <div className="exp-box-wrapper">
        <div className="exp-box-container">
          <h1>GLOBAL TECH</h1>
          <p>Date 2019-3-10</p>
          <p>
            I have had the opportunity to create a company portfolio website,
            where my primary responsibilities included designing and developing
            the website.
          </p>
        </div>
        {/* --------------- */}
        <div className="exp-box-container">
          <h1>SMARTDOORS</h1>
          <p>Date 2022-3-10</p>
          <p>
            I have developed a website for SmartDoors company, which includes an
            about page, home page, and product page. The website is designed to
            showcase the companys products and services in a user friendly
            manner.
          </p>
        </div>
        {/* ---------------- */}
        <div className="exp-box-container">
          <h1>NAKSAL GUMPA</h1>
          <p>Date DATE 2023-3-10</p>
          <p>
            I have designed a website for the Naksal Monastery, featuring a
            banner, sections for information about the monastery, its history, a
            gallery of images, news updates, and a contact page. My primary role
            in this project was to develop the API and assist with frontend
            development.
          </p>
        </div>

        <div className="exp-box-container">
          <h1>PADMAI SCHOOL</h1>
          <p>Date DATE 2023-6-5</p>
          <p>
            I have developed a website for a non funded school, which includes
            features such as a banner, about section, history, gallery, news,
            and contact information. My role in this project was to build the
            API and create the user interface. I worked as a full stack
            developer, handling both front end and back-end development tasks.
          </p>
        </div>

        <div className="exp-box-container">
          <h1>PHULARYI gUMPA</h1>
          <p>Date 2024-2-8</p>
          <p>
            I have developed a web app for Phulari Monastery located in Boudha,
            which serves as a prayer ordering system. The features of the app
            include adding sponsor details, ordering pujas, implementing a
            filter system, and providing a dashboard for the administrative
            team. My role in this project was to develop the API and handle the
            frontend API.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
