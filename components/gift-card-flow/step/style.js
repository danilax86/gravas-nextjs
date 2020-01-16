import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Step = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .StripeElement {
    border: 1px solid ${props => props.theme.fontColors.divider};
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }
  .pay-btn {
    margin: 0 0 0 auto;
  }
  .error {
    margin: 1rem 0;
  }
`;

export const StepTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  ${({ theme }) => css`
    color: ${theme.colors.darkGrey};
    font-weight: ${theme.fontWeight.light};
  `}
`;
