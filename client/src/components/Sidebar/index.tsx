import {sidebarTabs} from "utils/sidebar-tabs";
import SidebarTab from "components/Sidebar/SidebarTab";
import UserLogout from "components/Sidebar/UserLogout";
import {useLocation} from "react-router-dom";
import {SidebarStyles} from 'styles/SidebarStyles';
import {useState} from 'react';
import menuIcon from 'images/sidebar/menu.svg'

const SideBar = () => {
    const location = useLocation();
    const activePage = location.pathname;
    const [show, setShow] = useState(true)

    return (
        <SidebarStyles show={show}>
            <img src={menuIcon} className="hamburger-icon" onClick={() => setShow(prev => !prev)}/>
            <div className="sidebar-content">
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
                <UserLogout/>
            </div>
        </SidebarStyles>
    );
};

export default SideBar;
