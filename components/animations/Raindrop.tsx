import { useEffect, useRef } from "react"
import styles from "./Raindrop.module.css"

function Raindrop() {
    const mouseUpDownRef: any = useRef(null)


    const bubbleMaker = () => {
        const userWidth = document.body.offsetWidth
        const bubble = document.createElement('div')
        const childBubble = document.createElement('div')
        bubble.appendChild(childBubble)

        bubble.className = styles.bubble
        bubble.style.left = Math.floor(Math.random() * userWidth) + 'px'

        childBubble.className = styles.child_bubble
        const location: HTMLElement | null = document.getElementById('tap_pointer')
        if (location) location.className = styles.wrapper
        if (location) location.appendChild(bubble)
        setTimeout(() => { location?.removeChild(bubble) }, 4000)


    }


    const mouseUpHandler = () => {
        if (mouseUpDownRef.current) {
            clearInterval(mouseUpDownRef.current)
            mouseUpDownRef.current = null;
        }
    }
    const mouseDownHandler = () => {
        if (mouseUpDownRef.current) return;
        mouseUpDownRef.current = setInterval(() => { bubbleMaker() }, 64)
    }
    useEffect(() => {
        return () => {
            mouseUpDownRef.current = null;
        }


    }, [])
    return (<>
        <div id="wrapper">
            <button type="button" className={styles.bubble_btn}
                onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} >bubble</button>

        </div>
    </>)
}

export default Raindrop