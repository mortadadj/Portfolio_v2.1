import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
//import Main from './components/3-main/Main'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
//import Contact from './components/4-contact/Cntc'
import Footer from './components/5-footer/Footer'
import { useEffect, useState } from 'react'



// src/App.js
// src/App.jsx
//import React from "react";
//import ProjectsList from "./components/ProjectsList";
//
//function App() {
//  return (
//    <div>
//      <ProjectsList />
//    </div>
//  );
//}
//
//export default App;
//
//
//



function App() {
 useEffect(() =>{ 
     window.addEventListener("scroll",() => {
       if(window.scrollY>200){
        setshowScrollBTN(true)
       }
       else{
        setshowScrollBTN(false)
       }

       
     }
     )
 },[])
 const [showScrollBTN,setshowScrollBTN]=useState(false);

  return (
    <div id='up' className=' container'>
      <Header/>
      
      <Hero/>
      <div className=' divider'/>
      <Main/>
      <div className='divider'/>
      <Contact/>
      <div className='divider'/>
      <Footer/>
{/*   {showScrollBTN && (<a href="#up">
      <button className=' icon-keyboard_arrow_up scroll2Top '></button>
      </a>)}
*/}
     <a style={{opacity: showScrollBTN? 1 : 0 ,transition:"3s"}} href="#up">
      <button className=' icon-keyboard_arrow_up scroll2Top '></button>
      </a>
    
    </div>
  )
}


export default App