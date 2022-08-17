import styled from 'styled-components';
import avatar from 'images/sidebar/user.svg'
import logoutIcon from 'images/sidebar/logout.svg'


const UserLogoutStyles = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
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


const UserLogout = () => {
    return (
        <UserLogoutStyles>
            <div className="img-container">
                <img src={avatar} alt={`avatar`}/>
            </div>
            <div>
                <h4>name</h4>
                <small>name@gmail.com</small>
            </div>
            <div className="img-container logout">
                <img src={logoutIcon} alt={`logout-icon`}/>
            </div>

        </UserLogoutStyles>
    )
}

export default UserLogout;