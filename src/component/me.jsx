import React from 'react'
import art1 from '../assets/fgo2.png'
import art2 from '../assets/hsr1.png'
import art3 from '../assets/Reverse1999.png'
import art4 from '../assets/404.png'
import './me.css'
import { SocialIcon } from 'react-social-icons'


export default function Me() {
  return (
    <div>
      <section className='social'>
            <h2>Here's all of my social account</h2>

            <div className='soc-icon'>
              <SocialIcon url="https://twitter.com/ImArclight" />
              <SocialIcon url="https://www.instagram.com/fsptraaaa/" />
              <SocialIcon network='discord' url="feikaa" />
              <SocialIcon url="https://open.spotify.com/user/fqpl0bx8cfx7awx3w5zocqm80" />
              <SocialIcon url="https://www.youtube.com/channel/UCNcoL9BnCSHqvusWeU_vmPw" />
              <SocialIcon network='MAL' url="https://myanimelist.net/profile/FeiX_" />
              <SocialIcon network='email' url="faisputra272@gmail.com" />
              <SocialIcon url="https://web.facebook.com/ImArclight224" />
            </div>
        </section>
        <br/>
        <hr/>
        <section className='fgo'>
          <h2>Fate/Grand Id</h2>
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
    </div>
  )
}
