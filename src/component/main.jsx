import React from 'react'
import Header from './header'
import Section1 from './section1'
import { SocialIcon } from 'react-social-icons'

export default function Main() {
  return (
    <div>
        <Header />
        <Section1 /> 
        <hr/>
        <section className='social' style={{textAlign:"center"}}>
            <div className='soc-icon'>
              <SocialIcon url="https://twitter.com/ImArclight" />
              <SocialIcon url="https://www.instagram.com/fsptraaaa_altern/" />
              <SocialIcon network='discord' url="feikaa" />
              <SocialIcon url="https://open.spotify.com/user/fqpl0bx8cfx7awx3w5zocqm80" />
              <SocialIcon url="https://www.youtube.com/channel/UCNcoL9BnCSHqvusWeU_vmPw" />
              <SocialIcon network='MAL' url="https://myanimelist.net/profile/FeiX_" />
              <SocialIcon network='email' url="faisputra272@gmail.com" />
              <SocialIcon url="https://web.facebook.com/ImArclight224" />
            </div>
        </section>
    </div>
  )
}

