import React from 'react'
import Section1 from './component/section1'
import Header from './component/header'
import ArtsLists from './component/artsLists'

export default function Container() {
  return (
    <div>
      <Header />
      <Section1 /> 
      <hr/>
      <ArtsLists />
    </div>
  )
}
