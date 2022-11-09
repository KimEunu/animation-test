import styles from './3DReactLogo.module.css'
export default function ThreeDReactLogo() {
    return <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.orbit1}></div>
        <div className={styles.orbit2}></div>
        <div className={styles.orbit3}></div>
    </div >
}