import React, { useState } from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json"
import conatctAnimation from "../../animation/contact.json"

export default function Contact() {
  const [state, handleSubmit] = useForm("xyzykanw");
  const [animationKey, setAnimationKey] = useState(0);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setAnimationKey(prevKey => prevKey + 1); // Change la clé pour redémarrer l'animation
    await handleSubmit(event);
  };

  return (
    <section id='contact' className='contact-us'>
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
            <p className='flex' style={{ fontSize: "18px", marginTop: "1.7rem" }}>
              <Lottie style={{ height: 35 }} animationData={doneAnimation} loop={false} />
              Votre message a été envoyé avec succès👌
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            key={animationKey} // Nouvelle clé pour redémarrer l'animation
            className='conatctAnimation'
            style={{ height: "350px", width: "350px" }}
            animationData={conatctAnimation}
            loop={false}
          />
        </div>
      </div>
    </section>
  )
}