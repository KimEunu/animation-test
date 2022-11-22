import { useRef, useState } from 'react'
import styles from './textRising.module.css'
export default function TextRising() {
    const userInputRef = useRef<any>('')
    const [textState, setTextState] = useState<any>()
    const text: object[] = []

    const userInputHandler = () => {
        const textValue = userInputRef.current.value.split('')
        textValue.map((t: String) => text.push(<span className={styles.text}>{t}</span>))
        setTextState(text)

    }


    return (
        <div className={styles.wrapper}>
            <div className={styles['text-area']} >
                {textState}
            </div>
            <input ref={userInputRef} className={styles['user-input']} placeholder='Write something!' maxLength='28' onChange={userInputHandler}></input>
        </div>
    )
}