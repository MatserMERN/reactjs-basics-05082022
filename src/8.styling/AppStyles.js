import React from 'react'
import "./appStyles.css"
import styles from "./appStyles.module.css"

function AppStyles() {
  return (
    <div>
        <h1 className="success">This will be a successfull notification</h1>
        <h1 className="error">This will be a error notification</h1>

        <br />
        <h1 className={styles.success}>This will be a successfull notification</h1>
        <h1 className={styles.error}>This will be a error notification</h1>
    </div>
  )
}

export default AppStyles