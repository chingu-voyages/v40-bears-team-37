import styled from "styled-components";
import React from "react";
import { devices, sidebar } from "styles/Sizes";

const PageWithSidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 0px 10px;

  @media ${devices.tablet} {
    padding-left: ${sidebar.width};
  }

  @media ${devices.mobile} {
    padding-left: 0;
  }
`;

type Props = {
  children: JSX.Element;
};

export const PageWithSidebar = ({ children }: Props) => {
  return <PageWithSidebarStyles>{children}</PageWithSidebarStyles>;
};
