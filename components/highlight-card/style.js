import styled from '@emotion/styled';

const Card = styled.div`
    .label {
        padding: 0.5rem 0;
    }
    p {
        color: ${props => props.theme.fontColors.disabled};
    }

    span {
        font-size: 1.5rem;
        color: ${props => props.theme.fontColors.primary};
    }
`

export default Card;