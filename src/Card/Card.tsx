import styled from 'styled-components'

export const Cards = styled.ul`
  display: grid;
  width: 100%;

  padding: 0;
  border: 1px solid #333;
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;
`

export const Card = styled.li`
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: flex-start;
  padding: 1rem;
  div {
    padding-left: 0.5rem;
    font-size: 1.4rem;
    color: #222;
    font-weight: 700;
  }
  &:hover {
    background-color: #e7f4fe;
  }
`
