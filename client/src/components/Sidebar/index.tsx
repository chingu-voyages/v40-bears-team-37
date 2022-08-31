import styled from "styled-components";
import { sidebarTabs } from "utils/sidebar-tabs";
import SidebarTab from "components/Sidebar/SidebarTab";
import UserLogout from "components/Sidebar/UserLogout";
import { useAuth } from "context/AuthContext";
import { useLocation } from "react-router-dom";

const SidebarStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary-dark);
  color: var(--background-color);
  min-width: 220px;
  min-height: 100vh;

  h1 {
    text-align: center;
    padding: 20px 0 70px 0;
  }
`;

const SideBar = () => {
  const location = useLocation();
  const activePage = location.pathname;
  return (
    <SidebarStyles>
      <div>
        <h1>Notum</h1>
        {sidebarTabs.map((tab) => (
          <SidebarTab
            key={tab.title}
            title={tab.title}
            path={tab.path}
            description={tab.description}
            icon={tab.icon}
            isActive={tab.path === activePage}
          />
        ))}
      </div>
      <UserLogout />
    </SidebarStyles>
  );
};

export default SideBar;
