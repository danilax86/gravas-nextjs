import styled from "@emotion/styled";

export default styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  .step {
    height: 1rem;
    width: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
    background: ${props => props.theme.colors.secondary};
    cursor: pointer;
    position: relative;
    box-sizing: border-box;

    &.active {
      border-radius: 1rem;
      height: 2rem;
      width: 2rem;
      border: 0.5rem solid ${props => props.theme.colors.primary};
    }

    &:after {
      content: attr(data-label);
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: ${props => props.theme.colors.darkGrey};
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      color: white;
      transform: translateY(calc(0.5rem - 50%)) translateX(2rem);
      opacity: 0;
      transition: opacity 0.2s ease-in;
      visibility: hidden;
    }

    &:hover {
      &:after {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
