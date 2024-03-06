import styled from "styled-components";

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.texts.primary};
  margin: 0;
  transition: color 0.5s ease;
  padding: 0;

  @media (max-width: 768px) {
    display: block; // Or you can remove this line as h1 is block by default
  }
`;
