import React, { useState, useEffect } from 'react';
import QuizHeader from '../componet/QuizHeader';
import img1 from "../image/greatLil.jpg";

function Quiz(props) {
  const questions =[
    {id: 1,
     question:img1,
     options:["Information tier","Information technology","Instructional technology","Information tool"],
     answer:"Information technology"
    },
    {
      id: 2,
     question:"A typical computer system hardware is made up of the ____ and ____",
     options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
     answer:"System unit, peripherals"
    },
    {
     id: 3,
     question:"IT means ___",
     options:["Information tier","Information technology","Instructional technology","Information tool"],
     answer:"Information technology"
    },
    {id: 4,
      question:"IT means ___",
      options:["Information tier","Information technology","Instructional technology","Information tool"],
      answer:"Information technology"
     },
     {
       id: 5,
      question:"A typical computer system hardware is made up of the ____ and ____",
      options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
      answer:"System unit, peripherals"
     },
     {
      id: 6,
      question:"IT means ___",
      options:["Information tier","Information technology","Instructional technology","Information tool"],
      answer:"Information technology"
     },
     {id: 7,
      question:"IT means ___",
      options:["Information tier","Information technology","Instructional technology","Information tool"],
      answer:"Information technology"
     },
     {
       id: 8,
      question:"A typical computer system hardware is made up of the ____ and ____",
      options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
      answer:"System unit, peripherals"
     },
     {
      id: 9,
      question:"IT means ___",
      options:["Information tier","Information technology","Instructional technology","Information tool"],
      answer:"Information technology"
     },
     {id: 10,
      question:"IT means ___",
      options:["Information tier","Information technology","Instructional technology","Information tool"],
      answer:"Information technology"
     },
     {
       id: 11,
      question:"A typical computer system hardware is made up of the ____ and ____",
      options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
      answer:"System unit, peripherals"
     },
     {
      id: 12,
      question:"IT means ___",
      options:["Information tier","Information technology","Instructional technology","Information tool"],
      answer:"Information technology"
     },
     {id: 13,
      question:"IT means ___",
      options:["Information tier","Information technology","Instructional technology","Information tool"],
      answer:"Information technology"
     },
     {
       id: 14,
      question:"A typical computer system hardware is made up of the ____ and ____",
      options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
      answer:"System unit, peripherals"
     },
     {
      id: 15,
      question:"IT means ___",
      options:["Information tier","Information technology","Instructional technology","Information tool"],
      answer:"Information technology"
     },
     {id: 16,
       question:"IT means ___",
       options:["Information tier","Information technology","Instructional technology","Information tool"],
       answer:"Information technology"
      },
      {
        id: 17,
       question:"A typical computer system hardware is made up of the ____ and ____",
       options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
       answer:"System unit, peripherals"
      },
      {
       id: 18,
       question:"IT means ___",
       options:["Information tier","Information technology","Instructional technology","Information tool"],
       answer:"Information technology"
      },
      {id: 19,
       question:"IT means ___",
       options:["Information tier","Information technology","Instructional technology","Information tool"],
       answer:"Information technology"
      },
      {
        id: 20,
       question:"A typical computer system hardware is made up of the ____ and ____",
       options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
       answer:"System unit, peripherals"
      },
      {
       id: 21,
       question:"IT means ___",
       options:["Information tier","Information technology","Instructional technology","Information tool"],
       answer:"Information technology"
      },
      {id: 22,
       question:"IT means ___",
       options:["Information tier","Information technology","Instructional technology","Information tool"],
       answer:"Information technology"
      },
      {
        id: 23,
       question:"A typical computer system hardware is made up of the ____ and ____",
       options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
       answer:"System unit, peripherals"
      },
      {
       id: 24,
       question:"IT means ___",
       options:["Information tier","Information technology","Instructional technology","Information tool"],
       answer:"Information technology"
      },
      {id: 25,
        question:"IT means ___",
        options:["Information tier","Information technology","Instructional technology","Information tool"],
        answer:"Information technology"
       },
       {
         id: 26,
        question:"A typical computer system hardware is made up of the ____ and ____",
        options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
        answer:"System unit, peripherals"
       },
       {
        id: 27,
        question:"IT means ___",
        options:["Information tier","Information technology","Instructional technology","Information tool"],
        answer:"Information technology"
       },
       {id: 28,
         question:"IT means ___",
         options:["Information tier","Information technology","Instructional technology","Information tool"],
         answer:"Information technology"
        },
        {
          id: 29,
         question:"A typical computer system hardware is made up of the ____ and ____",
         options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
         answer:"System unit, peripherals"
        },
        {
         id: 30,
         question:"IT means ___",
         options:["Information tier","Information technology","Instructional technology","Information tool"],
         answer:"Information technology"
        },
        {id: 31,
         question:"IT means ___",
         options:["Information tier","Information technology","Instructional technology","Information tool"],
         answer:"Information technology"
        },
        {
          id: 32,
         question:"A typical computer system hardware is made up of the ____ and ____",
         options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
         answer:"System unit, peripherals"
        },
        {
         id: 33,
         question:"IT means ___",
         options:["Information tier","Information technology","Instructional technology","Information tool"],
         answer:"Information technology"
        },
        {id: 34,
         question:"IT means ___",
         options:["Information tier","Information technology","Instructional technology","Information tool"],
         answer:"Information technology"
        },
        {
          id: 35,
         question:"A typical computer system hardware is made up of the ____ and ____",
         options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
         answer:"System unit, peripherals"
        },
        {
         id: 36,
         question:"IT means ___",
         options:["Information tier","Information technology","Instructional technology","Information tool"],
         answer:"Information technology"
        },
        {id: 37,
         question:"IT means ___",
         options:["Information tier","Information technology","Instructional technology","Information tool"],
         answer:"Information technology"
        },
        {
          id: 38,
         question:"A typical computer system hardware is made up of the ____ and ____",
         options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
         answer:"System unit, peripherals"
        },
        {
         id: 39,
         question:"IT means ___",
         options:["Information tier","Information technology","Instructional technology","Information tool"],
         answer:"Information technology"
        },
        {id: 40,
          question:"IT means ___",
          options:["Information tier","Information technology","Instructional technology","Information tool"],
          answer:"Information technology"
         },
         {
           id: 41,
          question:"A typical computer system hardware is made up of the ____ and ____",
          options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
          answer:"System unit, peripherals"
         },
         {
          id: 42,
          question:"IT means ___",
          options:["Information tier","Information technology","Instructional technology","Information tool"],
          answer:"Information technology"
         },
         {id: 43,
          question:"IT means ___",
          options:["Information tier","Information technology","Instructional technology","Information tool"],
          answer:"Information technology"
         },
         {
           id: 44,
          question:"A typical computer system hardware is made up of the ____ and ____",
          options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
          answer:"System unit, peripherals"
         },
         {
          id: 45,
          question:"IT means ___",
          options:["Information tier","Information technology","Instructional technology","Information tool"],
          answer:"Information technology"
         },
         {id: 46,
          question:"IT means ___",
          options:["Information tier","Information technology","Instructional technology","Information tool"],
          answer:"Information technology"
         },
         {
           id: 47,
          question:"A typical computer system hardware is made up of the ____ and ____",
          options:["System unit, peripherals","Control unit, processing unit","Arithmetic unit, CPU","Central processing unit, control unit"],
          answer:"System unit, peripherals"
         },
         {
          id: 48,
          question:"IT means ___",
          options:["Information tier","Information technology","Instructional technology","Information tool"],
          answer:"Information technology"
         },
   ]
 
   const { name, Class } = props;
   const [timing, setTiming] = useState(10); 
   const [scoreList, setScoreList] = useState({});
   const [studentScore, setScore] = useState(0);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [selectedOptions, setSelectedOptions] = useState({});
   const [showScore, setShowScore] = useState(false);

   const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };
 
   const handleOptionChange = (questionId, option) => {
     const isCorrect = option === questions[questionId - 1].answer;
     const updatedSelectedOptions = { ...selectedOptions, [questionId]: option };
     const updatedScoreList = { ...scoreList, [questionId]: isCorrect };
     setSelectedOptions(updatedSelectedOptions);
     setScoreList(updatedScoreList);
     setScore(Object.values(updatedScoreList).filter(Boolean).length);
   };
 
   const handleTimerEnd = () => {
     alert("Time's up!");
     setShowScore(true);
   };
   
  
      useEffect(() => {
        if (!showScore) {
          const timer = setInterval(() => {
            setTiming(prevTime => {
              if (prevTime <= 0) {
                clearInterval(timer);
                handleTimerEnd();
                return 0;
              }
              return prevTime - 1;
            });
          }, 1000);

          return () => clearInterval(timer);
        }
      }, [showScore]);
   const formatTime = (seconds) => {
     const mins = Math.floor(seconds / 60);
     const secs = seconds % 60;
     return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
   };
 
   return (
     <>
      <form onSubmit={handleFormSubmit}>
       <QuizHeader name={name} Class={Class} setShowScore={setShowScore}/>
       <p className='text-center m-auto rounded-xl mt-3 bg-[#e6b82b] w-16'>ICT</p>
       {showScore ? (
         <div className='text-center text-2xl mt-5'>
           Your score: {studentScore} / {questions.length}
         </div>
       ) : (
         <>
           <section className='flex gap-8 flex-wrap justify-around mb-2'>
             <article>
               <div className='font-bold'>{questions[currentQuestion].id}.</div>
               <div className='bg-white p-6 ml-5 w-[max(40vw,16.5em)] rounded-lg'>
                  {questions[currentQuestion].question.includes("/Quiz-App/")?
                  <img className="w-[13rem]" src={questions[currentQuestion].question} alt="school logo" />
                  :questions[currentQuestion].question}
               </div> 
               <div className='mt-5'>
                 {questions[currentQuestion].options.map((option, i) =>
                   <p key={i}>
                     <input  
                       checked={selectedOptions[questions[currentQuestion].id] === option}
                       onChange={() => handleOptionChange(questions[currentQuestion].id, option)}
                       name={`question${questions[currentQuestion].id}`} 
                       value={option} 
                       type="radio">
                     </input>&nbsp;{String.fromCharCode(65 + i)}. {option}
                   </p>
                 )}
               </div>
             </article>
             <article className='w-[17em]'>
               <div className='flex flex-wrap border-8 w-[17em]'>
                 {questions.map((ques, i) => {
                   const isCurrent = i === currentQuestion;
                   const isSelected = selectedOptions.hasOwnProperty(ques.id);
                   const bgColor = isCurrent ? 'bg-[#e6b82b]' : isSelected ? 'bg-[#79b7e098]' : 'bg-white';
 
                   return (
                     <div
                       key={ques.id}
                       onClick={() => setCurrentQuestion(i)}
                       className={`w-1/6 ${bgColor} max-h-12 cursor-pointer border border-black text-center`}>
                       {ques.id}
                     </div>
                   );
                 })}
               </div>
             </article>
           </section>
           <section className='flex mb-7 mt-12 justify-center gap-4 text-center md:right-[30%] md:left-[30%] md:bottom-10 md:absolute'>
             <button 
               onClick={() => setCurrentQuestion(prev => currentQuestion === 0 ? questions.length - 1 : prev - 1)} 
               className='bg-white py-1 w-24 rounded-md hover:bg-black hover:text-white'>
               &larr; PREV
             </button>
             <div className='bg-[#7fa0b1] py-1 text-xl w-24 rounded-md'>{formatTime(timing)}</div>
             <button 
               onClick={() => setCurrentQuestion(prev => currentQuestion === questions.length - 1 ? 0 : prev + 1)} 
               className='bg-white py-1 w-24 rounded-md hover:bg-black hover:text-white'>
               NEXT &rarr;
             </button>
           </section>
         </>
       )}
       </form>
     </>
   );
 }
 
 export default React.memo(Quiz);