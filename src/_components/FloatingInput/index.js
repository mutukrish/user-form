import React, {useState, forwardRef} from 'react'

import {LabelInput, LabelInputContainer, Label, Input} from './style'

export function TextInput(props, ref) {
  const {
    id,
    label,
    onBlur,
    onFocus,
    type,
    refs,
    className,
    ...otherProps
  } = props
  const [active, setActive] = useState(props.value && props.value.length > 0)

  const onFocusInput = (event) => {
    setActive(true)
  }

  return (
    <LabelInput>
      <LabelInputContainer className={className}>
        <Label className={className} htmlFor={id} active={active}>
          {label}
        </Label>
        <Input
          active={active}
          className={className}
          id={id}
          onBlur={onBlur}
          onFocus={onFocusInput}
          ref={refs}
          type={type}
          {...otherProps}
        />
      </LabelInputContainer>
    </LabelInput>
  )
}

export default forwardRef(TextInput)
