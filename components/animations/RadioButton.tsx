import { useRef } from 'react'
import styles from './RadioButton.module.css'

function RadioButton() {
    let isDragging: Boolean
    const moveValue = useRef({ x: 0, y: 0 })
    const scrollDiv = useRef()
    const start = { x: 0, y: 0 }

    const startDrag = (event: any) => {
        event = event.changedTouches ? event.changedTouches[0] : event
        isDragging = true
        start.x = event.pageX
        start.y = event.pageY
    }
    const onDrag = (event: any) => {
        event = event.changedTouches ? event.changedTouches[0] : event
        if (isDragging) {
            moveValue.current.x = event.pageX - start.x
            moveValue.current.y = event.pageY - start.y
            scrollDiv.current.scrollLeft -= (moveValue.current.x / 10)
        }
    }
    const stopDrag = (event: any) => {
        if (isDragging) isDragging = false
        scrollDiv.current.scrollLeft -= 1
    }
    return (

        <form className={styles.radio_form}>
            <label>
                <input type="radio" value="test1" />

            </label>
            <label>
                <input type="radio" value="test2" />

            </label>
            <label>
                <input type="radio" value="test3" />

            </label>
            <div className={styles.square} ref={scrollDiv} onMouseDown={startDrag} onTouchStart={startDrag} onMouseMove={onDrag} onTouchMove={onDrag} onMouseUp={stopDrag} onTouchEnd={stopDrag} onMouseLeave={stopDrag}>
                sfsdfsdsfdffsdfsdfsdfdsfsdfsdfdsfsdfsfsddsdfsdfsdfsfsdfsdsfdffsdfsdfsdfdsfsdfsdfdsfsdfsfsddsdfsdfsdfsfsdfsdsfdffsdfsdfsdfdsfsdfsdfdsfsdfsfsddsdfsdfsdfsfsdfsdsfdffsdfsdfsdfdsfsdfsdfdsfsdfsfsddsdfsdfsdfsfsdfsdsfdffsdfsdfsdfdsfsdfsdfdsfsdfsfsddsdfsdfsdfsfsdfsdsfdffsdfsdfsdfdsfsdfsdfdsfsdfsfsddsdfsdfsdf
            </div>
        </form>

    )

}

export default RadioButton