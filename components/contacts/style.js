import styled from "@emotion/styled";

const breakpoints = {
  md: "(max-width: 1240px)"
};

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media ${breakpoints.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    iframe {
      width: 100%;
      order: 2;
    }
  }
`;

export const ContactItems = styled.div`
  width: calc(100% - 36rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakpoints.md} {
    width: 100%;
  }
`;
