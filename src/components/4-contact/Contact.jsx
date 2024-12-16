
  {/**
import React from 'react'
import './contact.css'


import { useForm, ValidationError } from '@formspree/react';

import Lottie from "lottie-react";

import doneAnimation from "../../animation/done.json"
import conatctAnimation from "../../animation/contact.json"

export default function Contact() {
  const [state, handleSubmit] = useForm("xyzykanw");


  return (
    <section id='contact' className='contact-us'>

      <h1 className=' title'>
        <span className=' icon-envelope'></span>
        Contact us
      </h1>
      <p className='sub-title'>Contactez-nous pour plus d'informations
      </p>

      <div style={{justifyContent:"space-between"}} className="  flex">
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Adresse email :</label>
            <input autoComplete='off' required type="email" name='email' id='email' />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{ marginTop: "24px" }}>

            <label htmlFor="message">Votre message :</label>
             // required c'est la obligation pour enter msg   
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className='submit'>
            {state.submitting ? "Soumission ..." : "Soumettre"}
          </button>
          {state.succeeded && (
            
              <p className='flex' style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                <Lottie  style={{ height: 35 }} animationData={doneAnimation} loop={false}/>
                 Votre message a été envoyé avec succès👌
              </p>
            
          )}

        </form>
        <div className="  animation">
        <Lottie className='conatctAnimation' style={{height:"350px",width:"350"}} 
        animationData={conatctAnimation}
        />
           </div>
      </div>
    </section>
  )
}
 */}

 import React, { useState, useRef } from 'react'
 import './contact.css'
 import { useForm, ValidationError } from '@formspree/react';
 import Lottie from "lottie-react";
 import doneAnimation from "../../animation/done.json"
 import conatctAnimation from "../../animation/contact.json"
 
 export default function Contact() {
   const [state, handleSubmit] = useForm("xyzykanw");
   const contactAnimationRef = useRef(null); // Crée une référence pour l'animation
 
   const handleFormSubmit =  (event) => {
     event.preventDefault();
     
     // Joue l'animation une fois à la soumission
     if (contactAnimationRef.current) {
       contactAnimationRef.current.play(); // Lance l'animation
     }
 
      handleSubmit(event); // Appelle la fonction de soumission de Formspree
   };
 
   return (
     <section id='contact' className=' contact-us'>
       <h1 className='title'>
         <span className='icon-envelope'></span>
         Contact us
       </h1>
       <p className='sub-title'>Contactez-nous pour plus d'informations</p>
 
       <div style={{ justifyContent: "space-between" }} className="flex">
         <form onSubmit={handleFormSubmit}>
           <div className='flex'>
             <label htmlFor="email">Adresse email :</label>
             <input autoComplete='off' required type="email" name='email' id='email' />
 
             <ValidationError
               prefix="Email"
               field="email"
               errors={state.errors}
             />
           </div>
 
           <div className='flex' style={{ marginTop: "24px" }}>
             <label htmlFor="message">Votre message :</label>
             <textarea required name="message" id="message"></textarea>
             <ValidationError
               prefix="Message"
               field="message"
               errors={state.errors}
             />
           </div>
 
           <button type="submit" disabled={state.submitting} className='submit'>
             {state.submitting ? "Soumission ..." : "Soumettre"}
           </button>
           {state.succeeded && (
             <p className='flex msg_env ' >
               <Lottie style={{ height: 35 }} animationData={doneAnimation} loop={false} />
               Votre message a été envoyé avec succès👌
             </p>
           )}
         </form>
         <div className=" animation">
         {state.succeeded && (
           <Lottie
             lottieRef={contactAnimationRef} // Attribue la référence à l'animation
             className=' conatctAnimation'
             
             animationData={conatctAnimation}
             loop={false} // Joue l'animation une seule fois
           /> )}
         </div>
       </div>
     </section>
   )
 }
 