import styled from "@emotion/styled";

export const Footer = styled.footer`
  width: 100%;
  height: 4.5rem;
  background: ${props => props.theme.colors.primary};
  display: grid;
  grid-template-columns: 1fr 24rem;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  bottom: 0;
  z-index: 2;
`;

export const ControlItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  > button {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ShoppingAmount = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.primaryDark};
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  padding-left: 1rem;
  font-size: ${props => props.theme.fonts.headline4};
`;
