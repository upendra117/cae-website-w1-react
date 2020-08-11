import React from 'react'
import PropTypes from 'prop-types'

import styles from './component2.module.css'

const Component2 = (props) => {
  return <img src={props.src} className={styles.image} />
}

Component2.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

Component2.propTypes = {
  src: PropTypes.string,
}

export default Component2
