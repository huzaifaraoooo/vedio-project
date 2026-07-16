import { useEffect, useRef, useState } from 'react'
import './App.css'

const VIDEO_A = '/Video/PixVerse_V6_Image_Text_360P_Keep_the_character.mp4'
const VIDEO_B = '/Video/PixVerse_V6_Image_Text_360P_Keep_the_character (1).mp4'

function Mark() { return <span className="mark" aria-hidden="true">N</span> }

function App() {
  const [muted, setMuted] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroVideo = useRef(null)
  useEffect(() => { if (heroVideo.current) heroVideo.current.muted = muted }, [muted])
  return <main>
    <section className="hero" id="top">
      <video ref={heroVideo} className="heroVideo" autoPlay loop muted playsInline preload="auto"><source src={VIDEO_A} type="video/mp4" /></video><div className="wash" />
      <header className="nav"><a className="brand" href="#top" aria-label="Noma home"><Mark /><span>NOMA</span></a><button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span>{menuOpen ? 'CLOSE' : 'MENU'}</span><i /></button><nav className={menuOpen ? 'links open' : 'links'} aria-label="Primary navigation"><a href="#story" onClick={() => setMenuOpen(false)}>Story</a><a href="#edition" onClick={() => setMenuOpen(false)}>Edition 01</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav></header>
      <div className="eyebrow"><span>Independent image studio</span><span>Los Angeles · 2026</span></div>
      <div className="heroCopy"><p className="kicker">Character in motion</p><h1>Built for<br/><em>impact.</em></h1></div>
      <div className="heroFooter"><p>Digital characters for culture<br/>that refuses to stand still.</p><a className="roundLink" href="#story" aria-label="Discover the story">↘</a><button className="sound" onClick={() => setMuted(!muted)} aria-label={muted ? 'Turn sound on' : 'Turn sound off'}><span className={muted ? '' : 'playing'}><i/><i/><i/><i/></span>{muted ? 'Sound off' : 'Sound on'}</button></div>
    </section>
    <div className="ticker" aria-hidden="true"><div>KEEP THE CHARACTER — KEEP THE CHARACTER — KEEP THE CHARACTER — KEEP THE CHARACTER — KEEP THE CHARACTER — KEEP THE CHARACTER — </div></div>
    <section className="story" id="story"><div className="sectionIndex">01 / Philosophy</div><div className="storyBody"><p className="overline">Keep the character</p><h2>Every frame needs<br/>its own <i>attitude.</i></h2><div className="storyDetails"><p>NOMA is an independent image studio creating digital characters with a pulse—shaped through film, fashion, and movement.</p><p>Our work is controlled without feeling careful: graphic silhouettes, tactile detail, and energy that lands before the image resolves.</p></div></div></section>
    <section className="edition" id="edition"><div className="editionMedia"><video autoPlay loop muted playsInline preload="metadata"><source src={VIDEO_B} type="video/mp4" /></video><span className="frame frameA"/><span className="frame frameB"/><p className="vertical">Archive / Motion study / 001</p></div><div className="editionCopy"><div className="sectionIndex">02 / Current edition</div><div><p className="overline">Motion study No. 001</p><h2>Own the<br/><i>frame.</i></h2></div><div className="editionMeta"><span>Direction<br/><b>NOMA Studio</b></span><span>Format<br/><b>Digital film</b></span><span>Edition<br/><b>One of one</b></span></div></div></section>
    <section className="statement"><p>Never neutral. Never static.</p><h2>Presence is<br/><span>a moving target.</span></h2><Mark /></section>
    <footer id="contact"><div className="footerTop"><p>Have a story worth keeping?</p><a href="mailto:studio@example.com">Start a conversation <span>↗</span></a></div><div className="footerWord">NOMA</div><div className="footerBottom"><span>© 2026 NOMA STUDIO</span><span>LOS ANGELES / AVAILABLE WORLDWIDE</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>
}
export default App
