import { UserLogoutStyles } from "styles/UserLogoutStyles";
import avatar from "images/sidebar/user.svg";
import logoutIcon from "images/sidebar/logout.svg";

const UserLogout = () => {
  return (
    <UserLogoutStyles>
      <div className="img-container">
        <img src={avatar} alt={`avatar`} />
      </div>
      <div>
        <h4>name</h4>
        <small>name@gmail.com</small>
      </div>
      <div className="img-container logout">
        <img src={logoutIcon} alt={`logout-icon`} />
      </div>
    </UserLogoutStyles>
  );
};

export default UserLogout;
