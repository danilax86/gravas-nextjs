import styled from '@emotion/styled'

const Card = styled.div`
    box-shadow: 0px .2rem .8rem rgba(0, 0, 0, 0.10);
    border-radius: .25rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 230px;
        object-fit: cover;
        border-radius: .25rem .25rem 0 0;
    }

    .title {
        color: ${props => props.theme.colors.primary};
        padding: 1rem;
    }

    .detail-items {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem 1rem 1rem;
        color: ${props => props.theme.fontColors.secondary};
    }
`

export default Card;