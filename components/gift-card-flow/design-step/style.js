import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 3px 12px ${p =>
    p.selected ? "rgba(55, 167, 162, .3)" : "rgba(0, 0, 0, 0.1)"};
  overflow: hidden;
  cursor: pointer;
  
  

  > img {
    flex-grow: 1;
    width: 100%;
    object-fit: cover;
    object-position: 0 0;
  }

  > div {
    margin-top: auto;
    padding: 1rem 1rem 1.5rem 1rem;
    text-align: left;
    border-radius: 0 0 1rem 1rem;
    font-size: 1rem;
    display: block;
    transition: background .2s ease-in, color .2s ease-in;
    background: ${p =>
      p.selected ? p.theme.colors.primaryCool : "transparent"};
    color: ${p => (p.selected ? "white" : "black")}}

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
