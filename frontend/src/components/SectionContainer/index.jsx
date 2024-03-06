import * as Styled from "./styles";

function SectionContainer({ children, sectionNameId }) {
  return (
    <Styled.SectionContainer className="section-container" id={sectionNameId}>
      {children}
    </Styled.SectionContainer>
  );
}

export default SectionContainer;
