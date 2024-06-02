import React from 'react'
import { useLocation } from 'react-router-dom';
function Quiz(props) {
  const Subject=[
    {name:"ICT"},
    {name:"Mathematics"},
    {name:"English"},
    {name:"Civic"},
    {name:"Health Education"},
    {name:"PHE"},
  ]
   const location = useLocation();
   const { name, Class } = location.state || {};
  return (
    <>
     <div>
      {name}-{Class}
     </div> 
    </>
  )
}

export default Quiz
