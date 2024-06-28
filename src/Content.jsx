import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
const Content = (props)=>{
  const{Class,setClass,name,setName}=props
    const navigate = useNavigate();
    const classOpts =[
      {value:"None",label:"Select a class",id:1,disabled:true},
      {value:"year 1",label:"year 1",id:2,disabled:false},
      {value:"year 2",label:"year 2",id:3,disabled:false},
      {value:"year 3",label:"year 3",id:4,disabled:false},
      {value:"year 4",label:"year 4",id:5,disabled:false},
      {value:"year 5",label:"year 5",id:6,disabled:false},
      {value:"Jss 1",label:"Jss 1",id:7,disabled:false}
    ]
    
    const handleSubmit =(e)=>{
      e.preventDefault();
         if(Class==="None"){
          alert("Add your class")
         }else{
         navigate("/Quiz-App/quizSite", { state: { name, Class } });
         }
    }
    

     return(
         <main className=" min-h-[80vh] gap-6 flex flex-col justify-center items-center">
             <section className={`text-center ${props.block}`}>
                <h1 className="font-bold text-center mb-4">Welcome to Great Lil school CBT Exam site</h1>
                <button onClick={props.getStartedBtn} className="bg-black rounded text-[#ffffff] px-5 py-1  hover:bg-[white] hover:text-[black] outline-double outline-2 outline-zinc-400">get started</button>
             </section>
             <form className={`bg-[#7c8c8b] mt-5 ${props.hide} pl-2 w-[min(40em,98%)] rounded-lg border-white outline border-4`} onSubmit={handleSubmit}>
                 <label className="block my-4 text-[whitesmoke]">Name: <input name="StudentName" value={name} onChange={(e)=>setName(e.target.value)} className="w-[min(18rem,98%)] text-black px-2 rounded" type="text" placeholder="Your Name" required/></label>
                 <label className="block mb-3 text-[whitesmoke]">Class:
                   <select value={Class} className="text-center text-black bg-white rounded mx-1" onChange={(e)=>setClass(e.target.value)} required>
                     <optgroup label="class">
                      {classOpts.map((opt,i)=>{
                        return <option key={opt.id} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                      })}
                     </optgroup>
                   </select>
                 </label>
                 <div className="text-[whitesmoke] ml-4 text-[14px]">
                    <h2 className="font-extrabold">Quiz Instructions</h2>
                    
                      <li>You have 30 minutes to complete the quiz.</li>
                      <li>The quiz consists of 40 multiple-choice questions for year5 while 20 questions for others.</li>
                      <li>Select the most appropriate answer for each question.</li>
                      <li>Each correct answer will earn you one point.</li>
                      <li>You can navigate through the questions using the "Next" and "Previous" buttons.</li>
                      <li>Once you have answered all the questions, click on the "Submit" button.</li>
                      <li>Make sure to review your answers before submitting, as you cannot make changes after submission.</li>
                    
                    <h2 className="font-extrabold">Tips for Success</h2>
                   
                      <li>Read each question carefully before selecting your answer.</li>
                      <li>Manage your time effectively, spending an average of 45 seconds per question.</li>
                      <li>Stay calm and focused throughout the quiz.</li>
                    <h2 className="font-extrabold">Good luck!</h2>
                 </div>
                 <div>
                    <button onClick={props.handleCancel} className="bg-black rounded m-4 text-[#ffffff] px-5 py-1  hover:bg-[white] hover:text-[black] outline-double outline-2 outline-zinc-400" type="reset">Exit quiz</button>
                    <button className="bg-black rounded m-4 text-[#ffffff] px-5 py-1  hover:bg-[white] hover:text-[black] outline-double outline-2 outline-zinc-400" type="submit">Continue</button>
                 </div>
             </form>
         </main>
     )
}
export default Content