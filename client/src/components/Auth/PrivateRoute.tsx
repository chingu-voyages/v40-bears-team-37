import { useLocation, Navigate } from "react-router-dom"
import styled from "styled-components";
import SideBar from "../../components/Sidebar"

interface IProps {
    isAuthed: boolean,
    children: JSX.Element
}

const ContainerStyles = styled.div`
    display: flex;
`

function PrivateRoute({ isAuthed, children }: IProps) {
    let location = useLocation();

    if (!isAuthed) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <ContainerStyles>
      <SideBar></SideBar>
      { children }
    </ContainerStyles>
  );
}

export default PrivateRoute