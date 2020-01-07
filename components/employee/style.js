import styled from '@emotion/styled';

const EmployeeDetails = styled.div`
    display: grid;
    grid-template-columns:  25% 75%; 
    margin: 1rem 0;
    .title {
        padding-bottom: 2rem;
        font-size: ${props => props.theme.fonts.headline5};
        font-weight: ${props => props.theme.fontWeight.bold};
        color: ${props => props.theme.fontColors.primary};
    }
    .education {
        display: grid;
        grid-template-columns: 20% 20% 20%;
        grid-gap: 1rem;

        .image {
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    .about {
        display: grid;
        grid-gap: 1rem;
        padding: 2rem 0;
        
    }

    @media (max-width: 720px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            

            .education {
                grid-template-columns: none;
                text-align: center;

                .image {
                    margin: 0 auto;
                }
            }
    }
`

export default EmployeeDetails;