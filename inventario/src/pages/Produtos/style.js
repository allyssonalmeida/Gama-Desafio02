import styled from "styled-components";

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  width: 300px;
  box-sizing: border-box;
  background: #f2f2f2;
  & .titulo, .descricao{
    grid-column: 1 / -1;
  }
  & .remove{
    grid-column: 2;
    & button{
      width: 100%;
      height: 100%;
      background: #ef3b2d;
      color: #fff;
      font-size: 1.1rem;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
  }
  & span{
    display: block;
    padding: 5px;
    font-weight: 500;
    font-size: .9rem;
  }
`