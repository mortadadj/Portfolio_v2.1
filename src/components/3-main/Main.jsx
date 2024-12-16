import React, { useState } from 'react'
import './main.css'
import { myProjects } from './myProjects';
import { AnimatePresence, motion } from 'framer-motion';






{/*
  IA
  Traitement d'images médicales IA
  
  
  
  */ }

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [InfoMore, setInfoMore] = useState(false);
  const [Paragraphe, setParagraphe] = useState('')


  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {

      const ZZZ = item.category.filter((myItem) => { 
        return myItem == buttonCategory })
      return ZZZ[0] == buttonCategory
    })

    /* const newArr= [myProjects[1]]  hadi mithode tnjm tutilisiha bsh ta3 filtre khir  */
    setArr(newArr);

  }

  return (

    <main className='flex'>



      <section id='articles' className=' flex left-section' >
        <button onClick={() => {
          setcurrentActive("all");
          setArr(myProjects);

        }} className={currentActive === "all" ? "active" : null}>All projects</button>


        <button onClick={() => {
          handleClick("css")
        }} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>







        <button onClick={() => { handleClick("js") }} className={currentActive === "js" ? "active" : null}>JavaScript</button>
        <button onClick={() => { handleClick("react") }} className={currentActive === "react" ? "active" : null}>React & MUI</button>

        <button onClick={() => { handleClick("flutter") }} className={currentActive === "flutter" ? "active" : null}>Flutter</button>
        <button onClick={() => { handleClick("ia") }} className={currentActive === "ia" ? "active ia" : null}>Intelligence Artificielle</button>


      </section>



      <section className=' flex right-section'>
        <AnimatePresence>

          {arr.map((item) => {
            return (

              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 60 }}
                //exit={{ transform: "scale(0)" }}

                key={item.imgPath} className=' card'>
                <img width={"266px"} src={item.imgPath} alt="" />
                <div className="box">
                  <h1 className='title'> {item.projectTitle} </h1>
                  <p className='sub-title'>{item.subTitel}</p>

                </div>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className='flex'>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <button onClick={() => { setInfoMore(true) , setParagraphe(item.paragraphe) }} >
                    
                    more
                    <span style={{ alignSelf: "end" }} className='icon-arrow-right'></span>

                  </button>


                </div>

              </motion.article>


            )



          }
          )}
          {InfoMore && (

            <div className="fixed">

              <ul className="modal ">
                <li >
                  <button className="icon-close" onClick={() => { setInfoMore(false) }} />



                </li>
                <li><p className='paragraphe'>{Paragraphe} </p></li>

              </ul>


            </div>

          )}

        </AnimatePresence>
      </section>



    </main>
  )
}
