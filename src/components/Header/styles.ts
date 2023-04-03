import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10rem;
  //background-color: black;

  /* img {
    margin-top: 2rem;
  } */

  /* img {
    padding: 2rem 0;
  }
 */
  nav {
    width: 100%;
    //min-width: 70rem;
    //min-width: 100%;
    //height: 5rem;
    display: flex;
    align-items: center;
    //gap: 0.5rem;
    border-radius: 0.25rem;
    /* box-shadow: 0 0.3 0 0 #000; */
    box-shadow: 1px 1px 1px 1px black;
    //background: ${({ theme }) => theme.gray100};

    a {
      padding: 1rem 1rem;
      height: 3rem;
      text-decoration: none;
      font-weight: 700;

      &:hover {
        transition: 0.3s;
        color: ${({ theme }) => theme.gray100};
        background: ${({ theme }) => theme.gray900};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;

    img {
      padding: 2rem 2rem;
    }
  }
`
