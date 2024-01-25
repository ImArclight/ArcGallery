import React from 'react'
import art1 from '../assets/fgo2.png'
import art2 from '../assets/hsr1.png'
import art3 from '../assets/Reverse1999.png'
import art4 from '../assets/404.png'
import art5 from '../assets/fgona.png'
import './me.css'
import { SocialIcon } from 'react-social-icons'


export default function Me() {
  return (
    <div>
        <h2 style={{textAlign:"center"}}>What is All This?????</h2>
        <br/>
        <hr/>
        <section>
          <h2>Fate/Grand NA</h2>
          <p className='fgo-id'>777,719,210</p>
          <img style={{width:'500px'}} src={art5} alt="" />
        </section>
        <br/>
        <hr/>
        <section className='fgo'>
          <h2>Fate/Grand JP</h2>
          <p className='fgo-id'>961,364,758</p>
          <img className='fgo-deck' src={art1} />
        </section>
        <br/>
        <hr/>
        <section>
          <h2>Ark Knights</h2>
          <img style={{width:'500px'}} src={art4} alt="" />
        </section>
        <br/>
        <hr/>
        <section>
          <h2>Rail Star Impact</h2>
          <img className='hsr-prof' src={art2} />
        </section>
        <br/>
        <hr/>
        <section>
          <h2>Reverse 21st Century</h2>
          <img className='rvr' src={art3} />
        </section>
         <br/>
          <hr/>
          <section>
            <h2>3rd Impact</h2>
            <img style={{width:'500px'}} src={art4} alt="" />
          </section>
    </div>
  )
}
