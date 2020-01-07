import styled from '@emotion/styled';

export const Header = styled.div`
    position: relative;
    max-width: 100%;
    width: calc(100vw - 2rem);
    height: 18rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1, p {
        position: relative;
        z-index: 1;
        margin: 0 0 1rem 1rem;
        text-shadow: 0 .1rem .5rem rgba(0,0,0,.8);
    }

    h1 {
        font-size: 1.25rem;
        color: white;
        font-weight: bolder;
    }

    p {
        font-size: 1rem;
        color: white;
        font-weight: lighter;
    }

    .gallery-link {
        position: relative;
        z-index: 1;
        text-decoration: none;
        background: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.primary};
        margin: 0 1rem 1rem auto;
        padding: 1rem 2rem;
        border-radius: 0.4rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        text-transform: uppercase;
    }


`

export const HeaderImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%; 
    width: 100%;
    object-fit: cover;
`
