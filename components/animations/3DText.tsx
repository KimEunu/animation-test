import styles from './3DText.module.css'

export default function ThreeDText() {
    return <div className={styles.wrapper}>
        <div className={styles.textfront}></div>
        <div className={styles.textback}></div>
        <div className={styles.textleft}></div>
        <div className={styles.textright}></div>
        <div className={styles.texttop}></div>
        <div className={styles.textbottom}></div>
    </div >
}