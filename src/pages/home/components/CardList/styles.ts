import styled from 'styled-components'

export const CardListContainer = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  //align-items: center;
  //justify-content: center;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  grid-gap: 2rem 2rem;
  margin-top: 3.375rem;
  //background: ${({ theme }) => theme.gray500};
`
