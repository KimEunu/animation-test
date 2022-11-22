import styles from './RotateInFadeOut.module.css'
import { useState } from 'react'
export default function RotateIn() {
    const fullText: String = "Hello"
    const text: String[] = fullText.split('')
    const [isFade, setIsFade] = useState(styles.wrapper)

    const animationAdd = () => {
        setIsFade(styles['wrapper-fade'])
    }
    return (
        <div className={isFade} >

            {text.map((text, index) => <span key={index} onClick={animationAdd}>{text}</span>)}
        </div >
    )
} 