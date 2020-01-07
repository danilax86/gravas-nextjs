import styled from "@emotion/styled";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 12rem 12rem;
  grid-auto-rows: 12rem;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Tile = styled.button`
  display: flex;
  background: ${props => props.theme.colors.lightGrey};
`;
