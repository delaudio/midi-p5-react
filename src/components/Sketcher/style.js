import styled, {css} from 'styled-components'

export const Main = styled.div`
	position:absolute;
	top: 36px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  word-break: break-word;
  margin: auto;
  background-color: black;
`

export const Div = styled.div`
  &.body {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    height: 100%;
    width: 100%;
    background-color: black;
  }
`
