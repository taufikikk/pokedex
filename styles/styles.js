import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightblue;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
  justify-content: center;
`

export const hoverStyles = css`
  &:hover {
    background-color: white;
    border-color: aqua;
    padding: 1.5rem 1.5rem;
  }
`

export const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`