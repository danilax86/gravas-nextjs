import styled from '@emotion/styled'

const CardItems = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr ));
   grid-auto-rows: 75px;
   grid-gap: 2rem;
   margin: 24px auto;
`
export default CardItems;