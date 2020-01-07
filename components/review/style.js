import styled from '@emotion/styled'

const Item = styled.div`
    padding: 1rem 0;
    color:  ${props => props.theme.fontColors.primary};
    .line {
        width: 100%;
        border: 0.5px solid ${props => props.theme.fontColors.divider};
    }
    h4 {
        margin: 1rem 0 1rem 0;
        color: ${props => props.theme.colors.secondaryDark};
    }
`

export default Item;