import styled from 'styled-components'
import * as palette from '../_theme'

export const FormContainer = styled.div`
  width: 320px;
  background: ${palette.WHITEBG};
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border-bottom: 3px solid ${palette.BORDERCLR};
  display: grid;
`

export const FormHeader = styled.h1`
  text-align: center;
  font-size: 24px;
  color: ${palette.DARKFONT};
`

export const SuccessMessage = styled.div`
  text-align: center;
  .successIcon {
    color: ${palette.BUTTONHOVERCOLOR};
    font-size: 110px;
  }
`
