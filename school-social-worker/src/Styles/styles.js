import styled from "styled-components";

export const StylBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 4rem;
  border-radius: 4px;
  font-family: inherit;
  &:hover {
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
