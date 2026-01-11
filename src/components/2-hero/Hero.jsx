import React, { useRef } from 'react';
import './hero.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Lottie from "lottie-react";

import devAnimation from "../../animation/dev.json"
import { motion } from 'framer-motion';

export default function Hero() {


  const lottieRef = useRef();

  return (

    <section id="about" className=' hero flex '>

      <div className='left-section '>

        <div className=" parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 8, type: "spring", stiffness: 200 }}

            //initial={{scale:0}}
            //animate={{scale:1.1}}
            //transition={{duration:2, type :"spring",stiffness :200}}
            src="./profile.jpg" alt="" className='avatar' /> {/*djamel.jpg*/}
          <div className='icon-verified'></div>
        </div>


        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className='title'>
          Spécialisé en Recherche & Développement Informatique
        </motion.h1>
        <p className='sub-title'>
          Je suis Mortada Djebbouri, ingénieur en Recherche et Développement Informatique, spécialisé en systèmes embarqués, création d’images système pour cartes électroniques, intégration d’applications embarquées (GPS, communication) et analyse des données, avec une expérience en développement web, mobile et intelligence artificielle.
        </p>
        <div className='all-icons flex'>

        {/*<a href="#" className="icon icon-twitter"></a>
        <a href="#" className="icon icon-instagram"></a>
       {/* WhatsApp */}
  <a
    href="https://wa.me/213782441310"
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
    className="icon"
  >
    <FaWhatsapp />
  </a>

  <a
    href="mailto:31mortadadjabouri@gmail.com"
    aria-label="Email"
    className="icon"
  >
    <MdEmail />
  </a>

  <a
    href="https://github.com/mortadadj"
    target="_blank"
    rel="noreferrer"
    className="icon"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/mortada-djebbouri-24b299340/"
    target="_blank"
    rel="noreferrer"
    className="icon"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>






        </div>


      </div>
      <div className='right-section animation '>
        <Lottie
          lottieRef={lottieRef}
          className='devAnimation'
          onLoadedImages={() => {
            // @ts-ignore   
            //https://lottiereact.com/
            lottieRef.current.setSpeed(0.7);
          }
          }
          animationData={devAnimation}
        />
      </div>


    </section>
  )
}
