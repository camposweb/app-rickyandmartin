import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  //height: 100px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  border-radius: 4px;
  //border: solid 1px #000;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.gray900};

  .person {
    width: 9.375rem;
    height: 9.375rem;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    background: ${({ theme }) => theme.gray900};
  }

  .title {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    padding: 0.5rem 0;
  }

  .info {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 0.5rem;
  }

  button {
    display: flex;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0.5rem 2rem;
    margin: 0 auto;
    justify-content: center;
    border-radius: 4px;
    outline: none;
    text-decoration: none;
    border: solid 1px ${({ theme }) => theme.gray900};
    cursor: pointer;
    color: ${({ theme }) => theme.gray900};
    background: ${({ theme }) => theme.white};

    &:active {
      outline: none;
      text-decoration: none;
    }

    &:hover {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.gray900};
    }
  }

  .dialog {
    position: relative;
    z-index: 10;
  }
`

export const DialogContainer = styled.div`
  //width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  background: rgba(18, 18, 20, 0.9);

  /* .dialog {
    position: relative;
  } */

  .panel {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    //margin: 0 auto;
    padding: 1rem 1rem;
    background: ${({ theme }) => theme.white};
    overflow-y: auto;

    .images {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 18.75rem;
      height: 18.75rem;
      background: ${({ theme }) => theme.gray800};
    }

    .title {
      display: flex;
      justify-content: center;
      margin: 0.5rem 0;
      //background: ${({ theme }) => theme.gray800};
    }

    .info {
      //width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
      gap: 5rem;
      padding: 1rem 0;
      //background-color: ${({ theme }) => theme.gray500};

      div {
        display: flex;
        flex-direction: column;
        //gap: 1rem;
      }
    }

    .button {
      display: flex;
      justify-content: center;
      padding: 0 1rem;

      button {
        width: 100%;
        justify-content: center;
        display: flex;
        font-weight: 700;
        font-size: 1.2rem;
        padding: 0.5rem 2rem;
        border-radius: 4px;
        outline: none;
        text-decoration: none;
        border: solid 1px ${({ theme }) => theme.gray900};
        cursor: pointer;
        color: ${({ theme }) => theme.gray900};
        background: ${({ theme }) => theme.white};

        &:active {
          outline: none;
          text-decoration: none;
        }

        &:hover {
          color: ${({ theme }) => theme.white};
          background: ${({ theme }) => theme.gray900};
        }
      }
    }
  }

  @media (max-width: 768px) {
    div {
      /* padding: auto auto; */
    }
    /* padding: 0 2rem; */
  }
`

export const InfoContainer = styled.div`
  //width: 100%;
  width: 3rem;
  //align-items: center;
  //margin: 0 auto;
  display: flex;
  //flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.gray500};
`
