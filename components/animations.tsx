
import styles from './animations.module.css'
import ThreeDReactLogo from './animations/3DReactLogo'
import ThreeDText from './animations/3DText'
import RotateInFadeOut from './animations/RotateInFadeOut'

export default function animations() {

    return (
        <div className={styles['main-wrapper']}>
            <RotateInFadeOut />
            <ThreeDText />
            <ThreeDReactLogo />
        </div>
    )

}