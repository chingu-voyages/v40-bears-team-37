import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "context/AuthContext";

interface IProps {
  children: JSX.Element;
}

// Delete display: flex; to prevent the error in Swiper
const ContainerStyles = styled.div``;

function PublicRoute({ children }: IProps) {
  const navigate = useNavigate();
  const auth = useAuth();

  const prevLocation = window.history.state.usr
    ? window.history.state.usr?.from.pathname
    : "/my-notum";
  if (auth.isAuthed) {
    navigate(prevLocation);
  }

  return <ContainerStyles>{children}</ContainerStyles>;
}

export default PublicRoute;
