import React from 'react'
import styles from './topBar.module.scss'
const TopBar = () => {
  return (
    <div className={styles.top_bar}>
        <div className={styles.search_container}>
        <input type="text"  />
        <span className={styles.icon}>icon</span>
        </div>
        <div>
            Bell
        </div>
        <div>
            <span>userImage</span><span>Username</span>
        </div>
    </div>
  )
}

export default TopBar