import styled from "@emotion/styled";

export const BottomItems = styled.div`
  width: 100%;
  height: 4.5rem;
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  button {
    margin-right: 2rem;
  }
`;

export const ModalItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 1rem;
  max-width: 31rem;

  p {
    padding-top: 1rem;
  }
  .contacts {
    padding-top: 2rem;
    display: flex;
    align-items: center;
    svg {
      padding-right: 1rem;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: ${props => props.theme.colors.darkGrey};
    }
  }
`;
