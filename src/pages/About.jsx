import React from 'react'
import Header from '../Header'
function About(props) {
  const {getStartedBtn,handleCancel} = props
  return (
    <>
       <Header getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>
      About
    </>
  )
}

export default React.memo(About)
