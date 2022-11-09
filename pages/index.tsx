import Head from 'next/head'
import Animations from '../components/animations'
import { useEffect } from "react";
import styles from './tapping.module.css'

export default function Home() {
  useEffect(() => {
    const mouseTapListner = (event: any) => {
      const tap = document.createElement("div")
      tap.className = styles.tapping
      tap.style.top = event.clientY - 100 + "px"
      tap.style.left = event.clientX - 100 + "px"
      document.body.appendChild(tap)
      setTimeout(() => document.body.removeChild(tap), 400)
    }
    const timer = setInterval(
      () => {
        document.addEventListener('click', mouseTapListner)
      }, 1000)

    return () => {
      clearInterval(timer)
      document.addEventListener('click', mouseTapListner)
    }
  }, [])

  return (
    <div>
      <Animations />
    </div>
  )
}
