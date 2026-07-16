import { useEffect, useRef, useState } from 'react'
import Header from './Header'

const VIDEO = '/Video/PixVerse_V6_Image_Text_360P_Keep_the_character.mp4'

export default function Hero() {
  const [muted, setMuted] = useState(true)
  const video = useRef(null)
  useEffect(() => { if (video.current) video.current.muted = muted }, [muted])
  return <section className="hero" id="top" aria-label="Introduction">
    <video ref={video} className="hero-video" autoPlay loop muted playsInline preload="metadata" poster="/images/hero-poster.png"><source src={VIDEO} type="video/mp4" /></video>
    <div className="hero-wash" /><Header />
    <div className="hero-meta"><span>Full-Stack Web Developer</span><span>Lahore, Pakistan · 2026</span></div>
    <div className="availability"><i />Available for opportunities</div>
    <div className="hero-copy"><p className="eyebrow">Engineering thoughtful digital products</p><h1>Built to<br /><em>perform.</em></h1></div>
    <div className="hero-bottom"><p>Modern digital experiences<br />engineered for real impact.</p><a className="round-link" href="#about" aria-label="Scroll to about">↘</a><button className="sound" onClick={() => setMuted(!muted)} aria-label={muted ? 'Turn sound on' : 'Turn sound off'}><span className={muted ? '' : 'playing'}><i /><i /><i /><i /></span>{muted ? 'Sound off' : 'Sound on'}</button></div>
  </section>
}
