import React from 'react'
import PropTypes from 'prop-types'
import {GroupWrapper} from './style'

const FormGroup = ({children}) => {
  return <GroupWrapper>{children}</GroupWrapper>
}

FormGroup.propTypes = {
  children: PropTypes.array,
}

FormGroup.defaultProps = {
  children: null,
}

export default FormGroup
