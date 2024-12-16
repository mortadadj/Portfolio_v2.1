import React, { useRef } from 'react';
import './hero.css';

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
          initial={{transform :"scale(0)"}}
          animate={{transform :"scale(1)"}}
          transition={{damping:8, type :"spring",stiffness :200}}
          
          //initial={{scale:0}}
          //animate={{scale:1.1}}
          //transition={{duration:2, type :"spring",stiffness :200}}
           src="./hlm.jpg" alt="" className='avatar' /> {/*djamel.jpg*/}
          <div className='icon-verified'></div>
        </div> 


          <motion.h1
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
          className='title'>
            Spécialiste en  développement web, applications mobiles et intelligence artificielle 
          </motion.h1>
          <p className='sub-title'>Je suis Djemal, développeur spécialisé Électrique industriel ,en sites Web et applications mobiles, avec une expertise en intelligence artificielle. Vous trouverez ici quelques-unes de mes réalisations.
            </p>
          <div className='all-icons flex'>

            <div className="icon icon-twitter"> </div>
            <div className="icon icon-instagram"> </div>
            <div className="icon icon-github"> </div>
            <div className="icon icon-linkedin"> </div>

            
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
