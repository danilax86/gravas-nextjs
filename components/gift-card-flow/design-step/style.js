import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Tile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 3px 12px
    ${p => (p.selected ? "rgba(55, 167, 162, .3)" : "rgba(0, 0, 0, 0.1)")};
  overflow: hidden;
  cursor: pointer;
  position: relative;

  > img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 1rem;
    height: 100%;
  }

  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: auto;
    padding: 1rem 1rem 1.5rem 1rem;
    text-align: left;
    font-size: 1rem;
    display: block;
    transition: background 0.2s ease-in, color 0.2s ease-in;
    background: ${p => (p.selected ? p.theme.colors.primaryCool : "white")};
    color: ${p => (p.selected ? "white" : "black")}};

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
