import React from 'react'
import PropTypes from 'prop-types'

import styles from './component1.module.css'

const Component1 = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{props.button}</button>
    </div>
  )
}

Component1.defaultProps = {
  button: 'Button',
}

Component1.propTypes = {
  button: PropTypes.string,
}

export default Component1
