import styled from 'styled-components'

export const DisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columnGridCount}, 100px);
  grid-template-rows: repeat(48, 1fr);
  grid-gap: 0;
  grid-column-gap: 10px;
  border: 2px solid black;
  padding: 5px;
  margin-right: 20px;
  position: relative;
`

export const GangItem = styled.div`
  padding-left: 10px;
  color: white;
  border: 1px solid black;
  &.item${props => props.index} {
    grid-row: ${props => props.rows};
    background-color: ${props => props.backgroundColor};
  }
`

export const TimeLine = styled.div`
  position: absolute;
  width: 100%;
  border-top: 2px solid red;
  top: ${props => props.timeLineTransformation}%;
`