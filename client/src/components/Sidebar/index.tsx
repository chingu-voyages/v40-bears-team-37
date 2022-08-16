import styled from 'styled-components';
import sidebarTab from 'components/Sidebar/SidebarTab';
import {sidebarTabs} from 'utils/sidebar-tabs';
import SidebarTab from 'components/Sidebar/SidebarTab';



const SidebarStyles = styled.div`
  background-color: var(--primary-dark);
  color: var(--white);
  padding: 20px;
  height: 100vh
`

const SideBar = () => {
    return(
        <SidebarStyles>
            <h1>App Name</h1>
            {sidebarTabs.map(tab => <SidebarTab
                key={tab.title}
                title={tab.title}
                description={tab.description}
                icon={tab.icon}/>)}

        </SidebarStyles>
    )
 }

 export default SideBar