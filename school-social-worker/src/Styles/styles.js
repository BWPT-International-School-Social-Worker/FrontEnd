import styled from "styled-components";

export const StylBtn = styled.button`
  border: 0
  cursor: pointer;
  display: flex;
  width: 9rem;
  justify-content: center;
  margin: 0 auto;
  height: 4rem;
  border-radius: 4px;
  font-family: inherit;
  &:hover {
    color: black;
    transition: transform 1s;
    transform: scale(1);
    background: rgb(166, 198, 54);
    background: linear-gradient(
      98deg,
      rgba(166, 198, 54, 1) 7%,
      rgba(251, 181, 19, 1) 52%,
      rgba(202, 32, 40, 1) 100%
      );
`;

export const HeadDiv = styled.div`
  border-radius: 6px;
`;
