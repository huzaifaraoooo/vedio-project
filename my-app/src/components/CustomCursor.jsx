import { useEffect, useRef } from 'react'

export default function CustomCursor(){
  const dot=useRef(null), ring=useRef(null)
  useEffect(()=>{
    if(!matchMedia('(pointer: fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return
    let mx=-50,my=-50,rx=-50,ry=-50,frame
    const move=e=>{mx=e.clientX;my=e.clientY;dot.current?.style.setProperty('transform',`translate3d(${mx}px,${my}px,0)`)}
    const hover=e=>ring.current?.classList.toggle('cursor-active',Boolean(e.target.closest('a,button,.project-row,.skill-card')))
    const tick=()=>{rx+=(mx-rx)*.14;ry+=(my-ry)*.14;ring.current?.style.setProperty('transform',`translate3d(${rx}px,${ry}px,0)`);frame=requestAnimationFrame(tick)}
    addEventListener('pointermove',move);addEventListener('mouseover',hover);frame=requestAnimationFrame(tick)
    return()=>{removeEventListener('pointermove',move);removeEventListener('mouseover',hover);cancelAnimationFrame(frame)}
  },[])
  return <><span ref={dot} className="cursor-dot" aria-hidden="true"/><span ref={ring} className="cursor-ring" aria-hidden="true"/></>
}
