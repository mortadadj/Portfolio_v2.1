import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
//import Main from './components/3-main/Main'

import Contact from './components/4-contact/Contact'
//import Contact from './components/4-contact/Cntc'
import Footer from './components/5-footer/Footer'
import { useEffect, useState } from 'react'
import Main from './components/3-main/Main2'

function App() {
  // 🌍 langue globale
  const [lang, setLang] = useState(
    localStorage.getItem("lang") ?? "fr"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

const [showScrollBTN,setshowScrollBTN]=useState(false);

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
  
  

  return (
    <div id="up" className="container">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <div className="divider" />
      <Main lang={lang} />
      <div className="divider" />
      <Contact lang={lang} />
      <div className="divider" />
      <Footer lang={lang} />

      <a style={{ opacity: showScrollBTN ? 1 : 0 }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;