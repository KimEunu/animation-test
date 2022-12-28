
import styles from './animations.module.css'
import ThreeDText from './animations/3DText'
import RadioButton from './animations/RadioButton'
import Raindrop from './animations/Raindrop'
import RotateInFadeOut from './animations/RotateInFadeOut'
import TextRising from './animations/textRising'

export default function animations() {

    return (
        <div className={styles['main-wrapper']}>
            <RotateInFadeOut />
            <ThreeDText />

            <TextRising />
            <Raindrop />
            <RadioButton />
        </div>
    )

}