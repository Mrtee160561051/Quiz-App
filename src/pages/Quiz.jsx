import React from 'react'
import Header from '../Header'
function Quiz(props) {
    const {getStartedBtn,handleCancel} = props
  return (
    <div>
        <Header getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>
        Quiz
    </div>
  )
}

export default Quiz