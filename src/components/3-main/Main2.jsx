import React, { useState } from 'react'
import './main2.css'
import { myProjects } from './myProjects.jsx';
import { AnimatePresence, motion } from 'framer-motion';

import { translations } from "../../i18n/translation";





{/*
  IA
  Traitement d'images médicales IA
  
  
  
  */ }

export default function Main({ lang }) {
  const t = translations[lang]; // 👈 texte selon langue
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [newItems, setNewItem] = useState(myProjects);
  let arr1 = []
  const [InfoMore, setInfoMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [Paragraphe, setParagraphe] = useState('')


  const handleClick = (buttonCategory) => {

    setcurrentActive(buttonCategory);
    console.log('myProjects///////', myProjects)
    console.log('myProjects0///////', myProjects[0])
    console.log('myProjects1///////', myProjects[1])
    console.log('myProjects2///////', myProjects[2])
    console.log('myProjects3///////', myProjects[3])
    console.log('myProjects4///////', myProjects[4])
    const newArr = myProjects.filter((item) => {

      const ZZZ = item.category.filter((myItem) => {




        return myItem === buttonCategory
      });

      return ZZZ[0] === buttonCategory
    });


    /* const newArr= [myProjects[1]]  hadi mithode tnjm tutilisiha bsh ta3 filtre khir  */
    console.log("newArr-------", newArr)
    arr1 = []
    arr1 = newArr
    setArr(newArr);
    console.log("setArr(newArr);............", setArr(newArr))
    setNewItem(newArr);
    console.log("newItems-------", newItems)

  }

  return (

    <main className="projects-container">

      {/* FILTRES */}
      <section className="filters">
        {[
          { id: "all", label: "All" },
          { id: "css", label: "HTML & CSS" },
          { id: "js", label: "JavaScript" },
          { id: "react", label: "React" },
          { id: "flutter", label: "Flutter" },
          { id: "ia", label: "IA" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => {
              if (btn.id === "all") {
                setcurrentActive("all");
                setArr(myProjects);
              } else {
                handleClick(btn.id);
              }
            }}
            className={currentActive === btn.id ? "chip active" : "chip"}
          >
            {btn.label}
          </button>
        ))}
      </section>

      {/* PROJETS */}
      <section className="projects-grid">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              key={item.imgPath}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 60 }}
              className="project-card"
            >
              <img src={item.imgPath} alt={item.projectTitle[lang]} />

              <div className="content">
                <h3>{item.projectTitle[lang]}</h3>
                <p>{item.subTitel[lang]}</p>


                {/* BADGES */}
                <div className="badges">
                  {item.category.map((c) => (
                    <span key={c} className="badge">{c}</span>
                  ))}
                </div>
              </div>

              <button
                className="more-btn"
                onClick={() => {
                  setInfoMore(true);
                  setSelectedProject(item);
                }}
              >
                {t.seeMore}
              </button>
            </motion.article>
          ))}

          {InfoMore && selectedProject && (
            <div className="fixed">
              <ul className="modal">

                <li>
                  <button
                    className="icon-close"
                    onClick={() => setInfoMore(false)}
                  />
                </li>

                <li>
                  <h2>{selectedProject.projectTitle[lang]}</h2>

                  <p style={{ whiteSpace: "pre-line" }} className="paragraphe">
                    {selectedProject.paragraphe[lang]}
                  </p>
                </li>

              </ul>
            </div>
          )}

        </AnimatePresence>
      </section>

    </main>

  )
}
