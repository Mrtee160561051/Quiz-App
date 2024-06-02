import React from 'react'
import Header from "../Header"
import Content from "../Content"
import { useState } from "react"

function Home(props) {
    const{block,hide,getStartedBtn,handleCancel}=props
  return (
    <>
    <Content block={block} hide={hide} getStartedBtn={getStartedBtn} handleCancel={handleCancel}/>
    </>
  )
}

export default Home
