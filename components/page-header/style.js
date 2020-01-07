import styled from '@emotion/styled' 

const HeaderText = styled.div`
    width: 100%;
    margin: 2rem auto;
    display: grid; 
    grid-gap: 1rem;
    .title {
        color: ${props => props.theme.fontColors.primary};
    }
    .description {
        color: ${props => props.theme.fontColors.secondary};
    }
`

export default HeaderText
