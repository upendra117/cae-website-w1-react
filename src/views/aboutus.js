import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Component1 from '../components/component1'
import styles from './aboutus.module.css'

const Aboutus = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About Us" />
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="About Us" />
      </Helmet>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.container3}></div>
          <div className={styles.container4}>
            <Link to="/" className={styles.navlink}>
              <img src="/playground_assets/Logo%20Grouped2-1200w.png" className={styles.image} />
            </Link>
          </div>
          <div className={styles.container5}>
            <span className={styles.text}>+44 (0) 1252 594 121</span>
            <svg viewBox="0 0 1024 1024" className={styles.icon}>
              <path d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.container6}>
          <img
            src="/playground_assets/Text%20in%20the%20logo4-1000w.png"
            className={styles.image1}
          />
          <Component1 button="FIND OUT MORE"></Component1>
        </div>
      </div>
      <div className={styles.container7}>
        <div className={styles.container8}>
          <span>About us page</span>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
