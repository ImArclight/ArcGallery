import React from 'react'
import logo from '../assets/Logo.png'
import './section.css'


export default function Section1() {
  return (
    <div>
      <div className='profile'>
        <img src={logo} style={{width:'200px'}}/>
        <h2 className='aka'>FeiX/Arclight/Virm</h2>
        <h3 className='desc'>He's just An ordinary human who claimed himself as an Artist for real</h3>
      </div>
    </div>
  )
}
