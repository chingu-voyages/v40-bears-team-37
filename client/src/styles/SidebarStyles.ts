import styled from "styled-components";
import { devices, sidebar } from "styles/Sizes";

interface SideBarStylesProps {
  show: boolean;
}

export const SidebarStyles = styled.div<SideBarStylesProps>`
  .hamburger-icon {
    height: 30px;
    background: ${(p) =>
      p.show ? "var(--primary-light)" : "var(--background-color)"};
    border-radius: 2px;
    display: none;
    cursor: pointer;
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--primary-dark);
    color: var(--background-color);
    min-width: ${sidebar.width};
    min-height: 100vh;
  }

  h1 {
    text-align: center;
    padding: 20px 0 70px 0;
  }

  @media ${devices.smallDesktop} {
    position: absolute;
    .hamburger-icon {
      display: flex;
      position: absolute;
      left: 10px;
      top: 25px;
    }

    .sidebar-content {
      display: ${(p) => (p.show ? "flex" : "none")};
      justify-content: space-between;
    }
  }

  @media ${devices.tablet} {
    position: fixed;
    .hamburger-icon {
      display: none;
    }

    .sidebar-content {
      display: flex;
    }
  }

  @media ${devices.mobile} {
    .hamburger-icon {
      display: flex;
      position: absolute;
    }

    .sidebar-content {
      display: ${(p) => (p.show ? "flex" : "none")};
      justify-content: space-between;
    }
  }
`;
