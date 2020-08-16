import styled from 'styled-components'
import * as palette from '../../_theme'

export const ButtonStyle = styled.button`
  color: ${palette.WHITEBG};
  background: ${palette.BUTTONCOLOR};
  font-size: 16px;
  line-height: 43px;
  padding: 0 16px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 0;
  float: right;
  &:disabled {
    opacity: 0.6;
    &:hover {
      background: ${palette.BUTTONCOLOR};
      opacity: 0.6;
    }
  }
  &:hover {
    background: ${palette.BUTTONHOVERCOLOR};
    cursor: pointer;
  }
  .icon {
    margin-left: 5px;
  }
`
