import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Component1 from '../components/component1'
import styles from './customer.module.css'

const Customer = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Customer</title>
        <meta name="description" content="Customer" />
        <meta property="og:title" content="Customer" />
        <meta property="og:description" content="Customer" />
      </Helmet>
      <div className={styles.container01}>
        <div className={styles.container02}>
          <div className={styles.container03}></div>
          <div className={styles.container04}>
            <Link to="/" className={styles.navlink}>
              <img src="/playground_assets/Logo%20Grouped2-1200w.png" className={styles.image} />
            </Link>
          </div>
          <div className={styles.container05}>
            <span className={styles.text}>+44 (0) 1252 594 121</span>
            <svg viewBox="0 0 1024 1024" className={styles.icon}>
              <path d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.container06}>
          <img
            src="/playground_assets/Text%20in%20the%20logo4-1000w.png"
            className={styles.image1}
          />
          <Component1 button="FIND OUT MORE"></Component1>
        </div>
      </div>
      <div className={styles.container07}>
        <div className={styles.container08}>
          <Link to="/" className={styles.navlink1}>
            <svg viewBox="0 0 1024 1024" className={styles.icon1}>
              <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
            </svg>
          </Link>
          <nav className={styles.container09}>
            <span className={styles.span}>ABOUT US</span>
            <Link to="/" className={styles.span1}>
              SERVICES
            </Link>
            <Link to="/" className={styles.span2}>
              QUALITY
            </Link>
            <Link to="/" className={styles.span3}>
              SECTORS
            </Link>
            <Link to="/" className={styles.span4}>
              CUSTOMER
            </Link>
            <Link to="/" className={styles.span5}>
              CONTACT US
            </Link>
            <Link to="/" className={styles.span6}>
              LEGAL
            </Link>
          </nav>
          <div className={styles.container10}>
            <img src="/playground_assets/Logo%20Grouped1.svg" className={styles.image2} />
          </div>
        </div>
      </div>
      <div className={styles.container11}>
        <div className={styles.container12}></div>
      </div>
    </div>
  )
}

export default Customer
