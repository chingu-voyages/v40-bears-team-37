import { UserLogoutStyles } from "styles/UserLogoutStyles";
import avatar from "images/sidebar/user.svg";
import logoutIcon from "images/sidebar/logout.svg";
import { useAuth } from "context/AuthContext";

const UserLogout = () => {
  const auth = useAuth();
  return (
    <UserLogoutStyles>
      <div className="img-container">
        <img src={avatar} alt={`avatar`} />
      </div>
      <div>
        <h4>{auth.user?.name}</h4>
        <small>{auth.user?.email}</small>
      </div>
      {/*TODO: also redirect to frontpage after logout*/}
      <div onClick={() => auth.logout()} className="img-container logout">
        <img src={logoutIcon} alt={`logout-icon`} />
      </div>
    </UserLogoutStyles>
  );
};

export default UserLogout;
