import styled from 'styled-components'
import * as palette from '../../_theme'

export const LabelInput = styled.div`
  width: 100%;
`

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 2.3em;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  font-size: inherit;
  padding: 5px 0px 0 0px;
  background: ${palette.WHITEBG};
`

export const Label = styled.label`
  padding: 0;
  margin: 0;
  border: 0;
  position: absolute;
  color: #9b9b9b;
  bottom: 10px;
  left: 10px;
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  font-size: 1em;
  cursor: text;
  pointer-events: none;
  width: 66.6%;
  transform: ${(props) =>
    props.active ? 'translate3d(0, -60%, 0) scale(0.80)' : 'none'};
`

export const Input = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0px 10px;
  font-family: 'Josefin Sans', cursive;
  &::placeholder {
    color: #9b9b9b;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
  border-bottom: ${(props) => (props.active ? '2px solid' : '0px')};
  border-color: ${palette.INPUTHOVER};
`
