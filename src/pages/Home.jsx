import React from 'react'
import Header from "../Header"
import Content from "../Content"
import { useState } from "react"

function Home(props) {
    const{block,hide,getStartedBtn,handleCancel,Class,setClass,name,setName}=props
  return (
    <>
     <Header getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>
    <Content name={name} Class={Class} setClass={setClass} setName={setName} block={block} hide={hide} getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>
    </>
  )
}

export default React.memo(Home)
