// import "./ResumeCard.css";
import styled from "styled-components";
import FadeInSection from "../FadeInSection";
import {
  ResumeCardContainer,
  ResumeCardRow,
  LeftColumn,
  RightColumn,
} from "./styles";

import { Heading } from "../../ui/texts";

const ResumeCardTitle = styled(Heading)`
  // color: ${({ theme }) => theme.hover_color};
  font-size: 1.5rem;
  position: sticky;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const StickyContainer = styled.div`
  top: 0;
  position: sticky;
`;

function SplitContainer({ section_name, resume_content }) {
  return (
    <ResumeCardContainer>
      <FadeInSection>
        <ResumeCardRow>
          <LeftColumn>
            <StickyContainer>
              <ResumeCardTitle>{section_name}</ResumeCardTitle>
            </StickyContainer>
          </LeftColumn>
          <RightColumn>{resume_content}</RightColumn>
        </ResumeCardRow>
      </FadeInSection>
    </ResumeCardContainer>
  );
}

export default SplitContainer;
