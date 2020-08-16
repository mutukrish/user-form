import React from 'react'
import PropTypes from 'prop-types'
import {faAngleRight, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ButtonStyle} from './style'

export function Button(props) {
  const disabled = props.disabled
  const text = props.text
  const isSubmitting = props.isSubmitting
  const onClick = props.onClick

  return (
    <ButtonStyle disabled={disabled} onClick={onClick} {...props}>
      {text}
      {isSubmitting ? (
        <FontAwesomeIcon icon={faSpinner} className="icon" />
      ) : (
        <FontAwesomeIcon icon={faAngleRight} className="icon" />
      )}
    </ButtonStyle>
  )
}

Button.defaultProps = {
  text: 'Sample',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
