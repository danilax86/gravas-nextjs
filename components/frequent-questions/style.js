import styled from "@emotion/styled";

export const TabItem = styled.div`
  display: ${p => (p.active ? `flex` : "none")};
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const TabContent = styled.div`
  display: flex;
  background: rgba(51, 51, 51, 0.03);
  padding: 2rem;
`;

export const FaqItem = styled.div`
  padding-bottom: 1rem;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  h3 {
    color: ${props => props.theme.colors.primary};
    padding-bottom: 0.5rem;
  }
  .answer {
    color: ${props => props.theme.fontColors.primary};
    display: ${p => (p.active ? `block` : "none")};
    line-height: 1.8;
  }
`;
