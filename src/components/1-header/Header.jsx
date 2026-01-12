//rfc pour creer fonction de react

import { useEffect, useState } from "react";
import "./header.css";
import { FaGlobe } from "react-icons/fa";

import { translations } from "../../i18n/translation";
export default function Header({ lang, setLang }) {
  const t = translations[lang]; // 👈 texte selon langue
  const [ShowModal, setshowModal] = useState(false)


  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark") /* hadu tab3a l dark mode and light */
  /*hna  njibo mal local storage hada local yjiblk l9ima li stkhdemha wala rahy kayna 9bal  ila maknche kanat null wala vide ydirlk dark hadi utilise si la 14 er fois utilisateur visite le site   */

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
    else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }


  }, [theme]);
  return (
    <header className='flex'>
      <button onClick={() => { setshowModal(true) }} className="menu icon-menu flex" />
      <div />
      <nav>
        <ul className='flex'>
          <li>
            <a href="#about">{t.about}</a>
          </li>
          
         
          <li>
            <a href="#projets">{t.Projets}</a>
          </li>
        {/**
          <li>
            <a href="">Projets</a>
          </li>

          <li>
            <a href="">Speaking</a>
          </li>
        */}
          <li>
            <a href="#contact">{t.contact}</a>
          </li>

        </ul>
      </nav>





          {/* 🌍 Switch langue (1 seul bouton) */}
          {/* 🌍 + 🌙 actions à droite */}
<div className="header-actions">

  {/* 🌍 Lang switch */}
  <button
    className="lang-toggle"
    onClick={() => setLang(lang === "fr" ? "en" : "fr")}
    title={lang === "fr" ? "Switch to English" : "Passer en Français"}
  >
    <FaGlobe />
    <span className="lang-label">{lang.toUpperCase()}</span>
  </button>

  {/* 🌙 Dark / Light */}
  <button
    onClick={() => {
      const newTheme = theme === "dark" ? "light" : "dark";
      localStorage.setItem("currentMode", newTheme);
      setTheme(newTheme);
    }}
    className="mode flex"
  >
    {theme === "dark"
      ? <span className="icon-moon-o"></span>
      : <span className="icon-sun"></span>
    }
  </button>

</div>

      {ShowModal && (

        <div className="fixed">

          <ul className="modal ">
            <li >
              <button className="icon-close" onClick={() => { setshowModal(false) }} />



            </li>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            {/** 
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            */}
            <li><a href="">Uses</a></li>
          </ul>


        </div>

      )}

    </header>



  )
}
