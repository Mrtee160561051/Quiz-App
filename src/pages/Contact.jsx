import React from 'react'
import Header from '../Header'
function Contact(props) {
  const {getStartedBtn,handleCancel} = props
  return (
    <>
       <Header getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>
      contact
    </>
  )
}

export default React.memo(Contact)
