import { useEffect, useState } from 'react'

export default function Loader(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches
  const [progress,setProgress]=useState(reduced?100:0)
  const [done,setDone]=useState(reduced)
  useEffect(()=>{
    document.body.classList.add('is-loading')
    if(reduced){document.body.classList.remove('is-loading');return}
    const started=performance.now()
    const timer=setInterval(()=>{
      const value=Math.min(100,Math.round((performance.now()-started)/7.5))
      setProgress(value)
      if(value===100){clearInterval(timer);setTimeout(()=>{setDone(true);document.body.classList.remove('is-loading')},220)}
    },24)
    return()=>{clearInterval(timer);document.body.classList.remove('is-loading')}
  },[reduced])
  if(done)return null
  return <div className={`loader ${progress===100?'loader-out':''}`} role="status" aria-live="polite"><div className="loader-mark">RH</div><div className="loader-name">Rao Huzaifa</div><div className="loader-progress"><span>{progress}</span><small>%</small></div><div className="loader-line"><i style={{width:`${progress}%`}}/></div></div>
}
