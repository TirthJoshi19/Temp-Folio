import styles from './about.module.css'


const AwesomeStuff = ()=> {
  return (
    <div className={styles.stuff}>
    <div className={styles.secthead}>
<h2 style={{color: 'wheat'}}>gu</h2>
    </div>
    </div>
  )
}

const Info = () => {
  return (
    <div>
      <AwesomeStuff />
    </div>
  )
}

export default Info
