import styles from '../utils/utils.module.css'

const Text = ({text})=> {
  return (
    <p className={styles.subtext}>{text}</p>
  )
}

export default Text