//rfc pour creer fonction de react

import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
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
            <a href="#about">À propos</a>
          </li>
          
         
          <li>
            <a href="#articles">Articles</a>
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
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </nav>
      <button onClick={() => {
        // send value to local storidge
        localStorage.setItem( // localStorage.setItem tjiblna wad3 l hali li howa light hna drnaha haka
          "currentMode",  // currentMode li howa key hiya za3ma wade3 al hali 
          theme === "dark" ? "light" : "dark")  // hadik function ila kan theme howa dark "true " yraj3ah light w ila kan false ya3ni theme != dark ydirlna them ywali dark w hadi  nhavdoha fal localStirage 


        // get value from LS
        setTheme(localStorage.getItem("currentMode"))
      }
      } className="mode flex">
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ):(
          <span className="icon-sun"></span>)
          }
        

      </button>

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
