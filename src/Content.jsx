import { useState } from "react"

const Content = ()=>{
    const classOpts =[
        {value:"None",label:"Select a class",id:1,disabled:true},
        {value:"year 1",label:"year 1",id:2,disabled:false},
        {value:"year 2",label:"year 2",id:3,disabled:false},
        {value:"year 3",label:"year 3",id:4,disabled:false},
        {value:"year 4",label:"year 4",id:5,disabled:false},
        {value:"year 5",label:"year 5",id:6,disabled:false},
        {value:"Jss 1",label:"Jss 1",id:7,disabled:false}
      ]
    const [Class,setClass] = useState("None");
    const [name,setName] = useState("");
    const handleChangeClass =(e)=>{
        setClass(e.target.value)
    }
    const handleChangeName =(e)=>{
        setName(e.target.value)
    }
    const handleSubmit =(e)=>{
         e.preventDefault();
    }
    const [hide,SetHide] = useState("hidden");
    const [block,SetBlock] = useState("block");
    const getStartedBtn=()=>{
      SetBlock("hidden");
      SetHide("block");
    }

     return(
         <main className=" min-h-[90vh] gap-6 flex flex-col justify-center items-center">
             <section className={`text-center ${block}`}>
                <h1 className="font-bold text-center mb-2">Welcome to Great Lil school CBT Exam site</h1>
                <button onClick={getStartedBtn} className="bg-black rounded text-[#ffffff] px-5 py-1  hover:bg-[white] hover:text-[black] outline-double outline-2 outline-zinc-400">get started</button>
             </section>
             <form className={`bg-[#7c8c8b] ${hide} pl-2 w-[30em] rounded-lg border-white outline border-4`} onSubmit={handleSubmit}>
                 <label className="block my-4">Name: <input name="StudentName" onChange={handleChangeName} className="w-72 px-2 rounded" type="text" placeholder="Your Name"/></label>
                 <label className="block mb-3">Class:
                   <select defaultValue={Class} className="text-center bg-white rounded mx-1" onChange={handleChangeClass}>
                     <optgroup label="class">
                      {classOpts.map((opt,i)=>{
                        return <option key={opt.id} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
                      })}
                     </optgroup>
                   </select>
                 </label>
                 <div>
                   <h3 className="text-white">INSTRUCTION</h3>
                 </div>
                 <div>
                    <button className="bg-black rounded m-4 text-[#ffffff] px-5 py-1  hover:bg-[white] hover:text-[black] outline-double outline-2 outline-zinc-400" type="cancel">Cancel</button>
                    <button className="bg-black rounded m-4 text-[#ffffff] px-5 py-1  hover:bg-[white] hover:text-[black] outline-double outline-2 outline-zinc-400" type="submit">Submit</button>
                 </div>
             </form>
             <div>{name}</div>
         </main>
     )
}
export default Content