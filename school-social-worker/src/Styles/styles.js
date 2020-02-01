import styled from "styled-components";

export const StylBtn = styled.button`
  cursor: pointer;
  border-radius: 9px;
  width: 9rem;
  justify-content: center;
  margin: 0 auto;
  height: 4rem;
  font-size: 1.75rem;
  &:hover {
    transition: transform .25s;
    transform: scale(1.25);
    background: rgb(166, 198, 54);
    background: linear-gradient(
      98deg,
      rgba(166, 198, 54, 1) 7%,
      rgba(251, 181, 19, 1) 52%,
      rgba(202, 32, 40, 1) 100%
    );
`

export const headDiv = styled.div`
border-radius: 6px;
height: 7rem;

`
