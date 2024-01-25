import React from 'react'
import logo from '../assets/Logo.png'
import './section.css'


export default function Section1() { 
  return (
    <div>
      <div className='profile'>
        <img src={logo} style={{width:'200px'}}/>
        <h2 className='aka'>FeiX/Arclight/Virm</h2>
        <h3 className='desc'><h2>I Am Thou, Thou Art I</h2></h3>
      </div>
    </div>
  )
}
