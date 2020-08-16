import React from 'react'
import PropTypes from 'prop-types'
import {Message} from './style'

const ErrorMessage = ({text}) => {
  return (
    <Message>
      <p>{text}</p>
    </Message>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string,
}

ErrorMessage.defaultProps = {
  text: null,
}

export default ErrorMessage
