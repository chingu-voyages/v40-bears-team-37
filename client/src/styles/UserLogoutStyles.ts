import styled from 'styled-components';

export const UserLogoutStyles = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 30px 10px;

  img {
    margin: auto;
  }

  .img-container {
    display: flex;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 9999px;
    background-color: var(--background-color)
  }

  .logout {
    background-color: var(--white);
    width: 20px;
    height: 20px;
  }
`