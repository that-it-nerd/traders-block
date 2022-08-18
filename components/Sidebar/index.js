import React from 'react'
 import styles from './sidebar.module.scss'
 import Tabs from '../../JSON/Tabs.json';
const Sidebar = () => {
    return (
        <div className={`basis-2/7 ${styles.sidebar}`}>
            <div className={styles.title_block}>
                <h1><span>Logo</span>Traders Block</h1>
            </div>
            
                <ul className={styles.tabs_list}>
                    {Tabs&& Tabs.map((tab)=>(
                        <li key={tab.id}>{tab.name}</li>
                    ))}
                </ul>

            <div className={styles.log_out}>
                Log Out
            </div>
        </div>
    )
}

export default Sidebar