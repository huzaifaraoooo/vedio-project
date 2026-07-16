import { useEffect, useState } from 'react'
const links=['about','skills','projects','experience','contact']
export default function Header(){
  const [open,setOpen]=useState(false);const [active,setActive]=useState('')
  useEffect(()=>{document.body.classList.toggle('menu-open',open);return()=>document.body.classList.remove('menu-open')},[open])
  useEffect(()=>{const sections=links.map(id=>document.getElementById(id)).filter(Boolean);const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-35% 0px -55%'});sections.forEach(s=>observer.observe(s));return()=>observer.disconnect()},[])
  return <header className="site-header"><a className="brand" href="#top" aria-label="Rao Huzaifa home"><span className="mark">RH</span><span>RAO HUZAIFA</span></a><button className="menu-button" onClick={()=>setOpen(!open)} aria-controls="primary-nav" aria-expanded={open} aria-label={open?'Close menu':'Open menu'}>{open?'CLOSE':'MENU'}<i/></button><nav id="primary-nav" className={open?'nav-links open':'nav-links'} aria-label="Primary navigation">{links.map(id=><a key={id} className={active===id?'active':''} href={`#${id}`} onClick={()=>setOpen(false)}>{id}</a>)}</nav></header>
}
