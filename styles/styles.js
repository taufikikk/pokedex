import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
  <Global styles={css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  `}
  />
)

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightblue;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  padding: 1rem 0.5rem;
  width: 15rem;
  cursor: pointer;
  @media (min-width: 280px) {
    padding: 1rem 0.5rem;
    max-width: 6rem;
    font-size: 8px;
  }
  @media (min-width: 320px) {
    padding: 1rem 0.5rem;
    max-width: 7rem;
    font-size: 8px;
  }
  @media (min-width: 520px) {
    padding: 1rem 0.5rem;
    max-width: 8rem;
    font-size: 8px;
  }
  @media (min-width: 768px) {
    padding: 1rem 0.5rem;
    max-width: 9rem;
    font-size: 10px;
  }
`

export const hoverStyles = css`
  &:hover {
    background-color: white;
    border-color: aqua;
    padding: 1.5rem 1rem;
  }
`

export const activeStyles = css`
  &:active {
    background-color: #719fb0;
    padding: 1rem 0.5rem;
    color: #bbf1fa;
    box-shadow: 0 0 5px 5px lightblue;
  }
`

export const PokemonContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex: auto;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`

export const PokemonCard = styled.div`
  ${basicStyles};
  ${hoverStyles};
  ${activeStyles};
  margin: 0.5rem;
  & code {
    background-color: linen;
  }
`

export const DetailCard = styled.div`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightblue;
  box-shadow: 5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  height: 12rem;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  @media (min-width: 280px) {
    max-width: 6rem;
    padding: 1.5rem 0.5rem;
    font-size: 8px;
  }
  @media (min-width: 320px) {
    max-width: 7rem;
    padding: 1.5rem 0.5rem;
    font-size: 8px;
  }
  @media (min-width: 520px) {
    max-width: 8rem;
    padding: 1.5rem 0.5rem;
    font-size: 8px;
  }
  @media (min-width: 768px) {
    padding: 10rem;
    font-size: 10px;
  }
`

export const HeaderStyle = styled.div`
  width: 100%;
  background-color: #16697a;
  position: fixed;
  z-index: 10;
  & a {
    text-decoration: none;
    color: #f8f1f1;
    font-family: comic-sans-ms;
    font-size: 3rem;
    margin-left: 1rem;
  }
`

export const Container = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StatusContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MoveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex: auto;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`

export const DetailContainer = styled.div`
  @media (min-width: 1200px) {
    padding: 5rem 0;
    display: flex;
    text-align: center;
    flex: auto;
    width: 100%;
    justify-content: center;
    align-item: center;
  }
`

export const MoveCard = styled.div`
  background-color: white;
  color: black;
  border: 1px solid lightblue;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  padding: 1rem 0.5rem;
  width: 15rem;
  font-size: 1.2rem;
  @media (min-width: 280px) {
    padding: 1rem 0.5rem;
    max-width: 6rem;
    height: auto;
  }
  @media (min-width: 320px) {
    padding: 1rem 0.5rem;
    max-width: 7rem;
    height: auto;
  }
  @media (min-width: 520px) {
    padding: 1rem 0.5rem;
    max-width: 8rem;
    height: auto;
  }
  @media (min-width: 768px) {
    height: 4rem;
  }
`

export const FooterStyle = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TypeCard = styled.div`
  background-color: #aee1e1;
  color: #161d6f;
  width: 100%;
  margin: 0 auto;
  border-radius: 25px;
  font-size: 1rem;

`

export const ButtonCatch = styled.div`
  ${hoverStyles};
  ${activeStyles};
  width: 10%;
  background-color: #94b5c0;
  position: fixed;
  padding: 1rem 2rem;
  bottom: 2rem;
  z-index: 10;
  font-weight: bold;
  text-align: center;
  border-radius: 25px;
  border: 3px solid #c7ffd8;
  cursor: pointer;
`

export const BtnLoadMore = styled.div`
  ${hoverStyles};
  ${activeStyles};
  padding: 0.5rem 3rem;  
  background-color: #d3e0ea;
  border: 3px solid #c7ffd8;
  border-radius: 1rem;
  cursor: pointer;
  color: #276678;
  font-weight: bold;
`