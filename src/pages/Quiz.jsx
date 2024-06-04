import React from 'react'
function Quiz(props) {
  const { name, Class } = props;
  const Subject=[
    {name:"ICT"},
    {name:"Mathematics"},
    {name:"English"},
    {name:"Civic"},
    {name:"Health Education"},
    {name:"PHE"},
  ]
  ;
   
  return (
    <>
     <div>
     {name}-{Class}
     </div> 
    </>
  )
}

export default React.memo(Quiz)
