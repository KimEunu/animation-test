
import styles from './animations.module.css'
import ThreeDReactLogo from './animations/3DReactLogo'
import ThreeDText from './animations/3DText'
import RotateInFadeOut from './animations/RotateInFadeOut'
import TextRising from './animations/textRising'

export default function animations() {

    return (
        <div className={styles['main-wrapper']}>
            <RotateInFadeOut />
            <ThreeDText />
            <ThreeDReactLogo />
            <TextRising />
        </div>
    )

}