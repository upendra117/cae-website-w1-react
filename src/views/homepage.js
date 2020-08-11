import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Component1 from '../components/component1'
import styles from './homepage.module.css'

const Homepage = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta property="og:title" content="Home Page" />
        <meta property="og:description" content="Home Page" />
      </Helmet>
      <div className={styles.header}>
        <div className={styles.container01}>
          <div className={styles.container02}></div>
          <div className={styles.container03}>
            <Link to="/" className={styles.navlink}>
              <img src="/playground_assets/Logo%20Grouped2-1200w.png" className={styles.image} />
            </Link>
          </div>
          <div className={styles.container04}>
            <span className={styles.text}>+44 (0) 1252 594 121</span>
            <svg viewBox="0 0 1024 1024" className={styles.icon}>
              <path d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
          </div>
        </div>
        <div className={styles.container05}>
          <img
            src="/playground_assets/Text%20in%20the%20logo4-1000w.png"
            className={styles.image1}
          />
          <Component1 button="FIND OUT MORE"></Component1>
        </div>
      </div>
      <div className={styles['nav-bar']}>
        <div className={styles.container06}>
          <Link to="/" className={styles.navlink1}>
            <svg viewBox="0 0 1024 1024" className={styles.icon1}>
              <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
            </svg>
          </Link>
          <nav className={styles.container07}>
            <Link to="/aboutus" className={styles.span}>
              ABOUT US
            </Link>
            <Link to="/services" className={styles.span1}>
              SERVICES
            </Link>
            <Link to="/quality" className={styles.span2}>
              QUALITY
            </Link>
            <Link to="/sectors" className={styles.span3}>
              SECTORS
            </Link>
            <Link to="/customer" className={styles.span4}>
              CUSTOMER
            </Link>
            <Link to="/contactus" className={styles.span5}>
              CONTACT US
            </Link>
            <Link to="/legal" className={styles.span6}>
              LEGAL
            </Link>
          </nav>
          <div className={styles.container08}>
            <Link to="/" className={styles.navlink2}>
              <img src="/playground_assets/Logo%20Grouped1.svg" className={styles.image2} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.dependable}>
        <div className={styles.grid}>
          <div className={styles.container09}>
            <h2 className={styles.text01}>DEPENDABLE ENGINEERING, CERTIFIED SOLUTIONSÂ </h2>
            <p className={styles.text02}>
              Cascade Engineering is committed to delivering the right solution for your critical
              structural engineering project. We help customers reduce the time and cost as well as
              improve the quality of the engineered solution by combining our 200+ years of shared
              experience with our 100% track record of delivering solutions. We work hard to fully
              understand your problems and take projects from concept, through detailed analysis,
              design and optimisation on into fi nal certifi cation, using our in-house team, for
              both modifi cations and new designs. We support sectors from aerospace and defence to
              energy and marine with all their structural engineering challenges. If you need expert
              support that works in partnership with your business to deliver a cost effective and
              guaranteed engineering solution, then Cascade Engineering is the partner of choice.
            </p>
          </div>
          <div className={styles.container10}></div>
          <div className={styles.container11}></div>
          <div className={styles.container12}>
            <h2 className={styles.text03}>AS9100 ACCREDITED DESIGN AND MODIFICATION SPECIALIST</h2>
            <p className={styles.text04}>
              We are an AS9100 certifi ed structural design and modifi cation specialist that can
              take projects from concept, through initial optimisation studies, on to a fully
              certifi ed design that can improve performance, whilst reducing weight and
              manufacturing costs for critical structures across a wide range of sectors. With a
              proven pedigree in providing solutions you can depend on; Cascade Engineering is the
              structural design engineering partner of choice.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['services-and-sectors']}>
        <div className={styles.title}>
          <span className={styles.text05}>SERVICES AND SECTORS</span>
        </div>
        <div className={styles.grid1}>
          <div className={styles.container13}>
            <span className={styles.text06}>CONCEPT</span>
          </div>
          <div className={styles.container14}>
            <span className={styles.text07}>ENGINEERING</span>
          </div>
          <div className={styles.container15}>
            <span className={styles.text08}>DELIVERY</span>
          </div>
          <div className={styles.container16}>
            <span className={styles.text09}>CONSULTANCY</span>
          </div>
          <div className={styles.container17}></div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.container18}></div>
          <div className={styles.container19}></div>
          <div className={styles.container20}></div>
          <div className={styles.container21}></div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.container22}>
          <div className={styles.container23}>
            <div className={styles.container24}>
              <Link to="/" className={styles.navlink3}>
                <img
                  src="/playground_assets/Logo%20Grouped%20White%20Background.svg"
                  className={styles.image3}
                />
              </Link>
            </div>
            <div className={styles.container25}>
              <div className={styles.container26}>
                <label className={styles.text10}>
                  Cascade EngineeringÂ  Â  Â  Â  Â  Â  The Meads Business Centre Kingsmead Farnborough
                  Hampshire GU14 7SR
                </label>
              </div>
              <div className={styles.container27}>
                <span className={styles.text11}>
                  Telephone: +44 1252 594121Â  Â  Â  Â  Email: info@cascade-engineering.co.uk Company
                  Registration No: 05838778
                </span>
              </div>
            </div>
          </div>
          <div className={styles.container28}>
            <svg viewBox="0 0 877.7142857142857 1024" className={styles.icon2}>
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 950.8571428571428 1024" className={styles.icon3}>
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className={styles.icon4}>
              <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
