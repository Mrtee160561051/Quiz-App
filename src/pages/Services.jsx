import React from 'react'
import Header from '../Header'
function Services(props) {
  const {getStartedBtn,handleCancel} = props
  return (
    <div>
      <Header getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>
      Service
    </div>
  )
}

export default React.memo(Services)
