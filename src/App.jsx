import Header from "./Header"
import Content from "./Content"
import { useState,memo } from "react"


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizSite from "./pages/QuizSite";
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
function App() {
  const [hide,SetHide] = useState("hidden");
  const [block,SetBlock] = useState("block");
  const getStartedBtn=()=>{

    if(hide==="hidden" && block==="block"){
      SetBlock("hidden");
      SetHide("block");
    }else{
      SetBlock("block");
      SetHide("hidden");
    }
    }
   const handleCancel =()=>{
    SetBlock("block");
    SetHide("hidden");
   }
   
 const [Class,setClass] = useState("None");
 const [name,setName] = useState("");
  return (
    <>
     <Router>
      <Routes>
        <Route  index element={<Home name={name} Class={Class} setClass={setClass} setName={setName} block={block} hide={hide} getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>} />
        <Route path="/Quiz-App/" element={<Home name={name} Class={Class} setClass={setClass} setName={setName} block={block} hide={hide} getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>} />
        <Route path="/" element={<Home name={name} Class={Class} setClass={setClass} setName={setName} block={block} hide={hide} getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>} />
        <Route path="/Quiz-App/quizSite" element={<QuizSite name={name} Class={Class} />} />
        <Route path="/Quiz-App/quiz" element={<Quiz getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>}/>
        <Route path="/Quiz-App/about" element={<About getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>} />
        <Route path="/Quiz-App/services" element={<Services getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>} />
        <Route path="/Quiz-App/contact" element={<Contact getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default memo(App)
