import styles from './Sidenote.module.css';

function Sidenote({ type, title, children }) {
  const className = `${styles.wrapper} ${styles[type]}`

  return (
    <aside className={className}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  )
}

export default Sidenote