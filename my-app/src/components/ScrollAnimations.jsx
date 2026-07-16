import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function ScrollAnimations(){useLayoutEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const ctx=gsap.context(()=>{gsap.utils.toArray('[data-reveal]').forEach(el=>gsap.from(el,{opacity:0,y:48,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}}));gsap.utils.toArray('[data-media]').forEach(el=>gsap.from(el,{scale:1.07,duration:1.25,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 78%',once:true}}))});return()=>ctx.revert()},[]);return null}
