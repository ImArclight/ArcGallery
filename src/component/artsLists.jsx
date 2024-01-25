import React from 'react'
import art1 from '../assets/Art1.png'
import art2 from '../assets/Art2.png'
import art3 from '../assets/Art3.png'
import art4 from '../assets/Art4.png'
import art5 from '../assets/Art5.png'
import art6 from '../assets/Art6.png'
import art7 from '../assets/Art7.png'
import art8 from '../assets/Art8.png'
import art9 from '../assets/Art9.png'
import art12 from '../assets/Art12.png'
import './arts.css'

export default function ArtsLists() { 
  return (
    <div>
      <h3>
        Well anyway, this is some of my arts I draw since ......
      </h3>

      <div className='row1'>
        <img id='first' src={art5} alt="FeiX" />
        <img id='first' src={art8} alt="FeiX" />
      </div>

      <div className='row2'>
        <img id='second' src={art3} alt="FeiX" />
      </div>

      <div className='row3'>
        <img id='third' src={art1} alt="FeiX" />
        <img id='third' src={art9} alt="FeiX" />
        <img id='third' src={art2} alt="FeiX" />
      </div>

      <div className='row4'>
        <img id='fourth' src={art12} alt="FeiX" />
      </div>

      <div className='row5'>
        <img id='fifth' src={art6} alt="FeiX" />
        <img id='fifth' src={art7} alt="FeiX" />
      </div>

      <div className='row6'>
        <img id='sixth' src={art4} alt="FeiX" />
      </div>

    </div>
  )
}
