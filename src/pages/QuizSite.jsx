import React, { useState, useEffect } from 'react';
import QuizHeader from '../component/QuizHeader';
import jss1Ques from '../questions/jss1Ques.json';
import year1Ques from '../questions/year1Ques.json';
import year2Ques from '../questions/year2Ques.json';
import year3Ques from '../questions/year3Ques.json';
import year4Ques from '../questions/year4Ques.json';
import year5Ques from '../questions/year5Ques.json';

function QuizSite({ name, Class }) {
  const questionsMapping = {
    "year 1": year1Ques['year1Ques'],
    "year 2": year2Ques['year2Ques'],
    "year 3": year3Ques['year3Ques'],
    "year 4": year4Ques['year4Ques'],
    "year 5": year5Ques['year5Ques'],
    "Jss 1": jss1Ques['jss1Ques']
  };

  

  const [timing, setTiming] = useState(() => parseInt(localStorage.getItem('timing')) || 1800);
  const [scoreList, setScoreList] = useState(() => JSON.parse(localStorage.getItem('scoreList')) || {});
  const [studentScore, setScore] = useState(() => parseInt(localStorage.getItem('studentScore')) || 0);
  const [currentQuestion, setCurrentQuestion] = useState(() => parseInt(localStorage.getItem('currentQuestion')) || 0);
  const [selectedOptions, setSelectedOptions] = useState(() => JSON.parse(localStorage.getItem('selectedOptions')) || {});
  const [showScore, setShowScore] = useState(false);
  const [studentName, setStudentName] = useState(() => localStorage.getItem('studentName') || name);
  const [studentClass, setStudentClass] = useState(() => localStorage.getItem('studentClass') || Class);
  const questions = questionsMapping[studentClass] || {"id": 1, "question": "error on student class"};
  
  useEffect(() => {
    localStorage.setItem('studentName', studentName);
    localStorage.setItem('studentClass', studentClass);
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    localStorage.setItem('scoreList', JSON.stringify(scoreList));
    localStorage.setItem('studentScore', studentScore);
  }, [studentName, studentClass, currentQuestion,selectedOptions, scoreList, studentScore]);

  const resetLocalStorage = () => {
    localStorage.removeItem('timing');
    localStorage.removeItem('scoreList');
    localStorage.removeItem('studentScore');
    localStorage.removeItem('currentQuestion');
    localStorage.removeItem('selectedOptions');
    localStorage.removeItem('studentName');
    localStorage.removeItem('studentClass');
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
          localStorage.setItem('timing', prevTime - 1);
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      resetLocalStorage();
    }
  }, [showScore]);

  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const results = {
      name: studentName,
      Class: studentClass,
      scoreList,
      studentScore,
    };
    try {
      const response = await fetch('http://localhost:3001/submit-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(results),
      });
      if (response.ok) {
        console.log('Results sent successfully');
        setShowScore(true);
      } else {
        console.error('Failed to send results');
      }
    } catch (error) {
      console.error('Error sending results:', error);
    }
  };

  const handleOptionChange = (questionId, option) => {
    const isCorrect = option.toLowerCase() === questions[questionId - 1].answer.toLowerCase();
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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  console.log(studentScore)
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <QuizHeader name={studentName} Class={studentClass} setShowScore={setShowScore} />
        <p className='text-center m-auto rounded-xl mt-3 bg-[#e6b82b] w-16'>ICT</p>
        {showScore ? (
          <div className='text-center text-2xl mt-5'>
            Congratulation <b className='text-[#0f4a68]'>{studentName}</b>, 
            <br/> You have completed the quiz.  
           <br/> However, your score is <b className='text-[#0f4a68]'>{studentScore}/{questions.length}</b>
          </div>
        ) : (
          <>
            <section className='flex gap-8 flex-wrap justify-around mb-2'>
              <article>
                <div className='font-bold'>{questions[currentQuestion].id}.</div>
                <div className='bg-white p-6 ml-5 w-[max(40vw,16.5em)] rounded-lg'>
                  <p>{questions[currentQuestion].question}</p>
                  {questions[currentQuestion].image && (
                    <p className='pt-1'>
                      <img className="w-[13rem]" src={`public/image/${questions[currentQuestion].image}`} alt="Question visual aid" />
                    </p>
                  )}
                </div>
                <div className='mt-5'>
                  {questions[currentQuestion].options.map((option, i) => (
                    <p key={i}className='flex'>
                     <span className='basis-[29px]'>{String.fromCharCode(65 + i)}. &nbsp; </span> 
                      <input
                        checked={selectedOptions[questions[currentQuestion].id] === option}
                        onChange={() => handleOptionChange(questions[currentQuestion].id, option)}
                        name={`question${questions[currentQuestion].id}`}
                        value={option}
                        type="radio"
                      /> &nbsp; &nbsp; {option}
                    </p>
                  ))}
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
                type="button"
                onClick={() => setCurrentQuestion(prev => currentQuestion === 0 ? questions.length - 1 : prev - 1)}
                className='bg-white py-1 w-24 rounded-md hover:bg-black hover:text-white'>
                &larr; PREV
              </button>
              <div className='bg-[#7fa0b1] py-1 text-xl w-24 rounded-md'>{formatTime(timing)}</div>
              <button
                type="button"
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

export default React.memo(QuizSite);
