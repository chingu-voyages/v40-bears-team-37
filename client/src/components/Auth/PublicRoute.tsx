import { Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  isAuthed: boolean;
  children: JSX.Element;
}

const ContainerStyles = styled.div`
  display: flex;
`;

function PublicRoute({ isAuthed, children }: IProps) {
  const location = useLocation();
  if (isAuthed) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <ContainerStyles>{children}</ContainerStyles>;
}

export default PublicRoute;
