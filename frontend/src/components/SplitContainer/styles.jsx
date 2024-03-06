import styled from "styled-components";

export const ResumeCardContainer = styled.div`
  padding-top: 50px;
  width: 850px;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin-right: 100px;
  transition: background-color 0.5s ease;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const ResumeCardRow = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  padding: 10px;
  flex: 25%;
`;

export const RightColumn = styled.div`
  align-items: center;
  flex: 75%;
  padding: 10px;
`;
