import { Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "context/AuthContext";

interface IProps {
  children: JSX.Element;
}

const ContainerStyles = styled.div`
  display: flex;
`;

function PublicRoute({ children }: IProps) {
  const location = useLocation();
  const auth = useAuth();
  if (auth.isAuthed) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <ContainerStyles>{children}</ContainerStyles>;
}

export default PublicRoute;
