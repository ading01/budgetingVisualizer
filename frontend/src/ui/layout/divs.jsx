import styled from "styled-components";

// reusable row and column components

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "flex-start"};
`;
