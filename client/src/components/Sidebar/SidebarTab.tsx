import styled from 'styled-components';

interface SidebarStylesProps {
    isActive: boolean;
}

const SidebarTabStyles = styled.div<SidebarStylesProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100% - 20px;
  padding: 30px 0;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  border-color: ${p => p.isActive ? "var(--primary-medium)" : "var(--primary-dark)"};
  border-width: ${p => p.isActive ? "1px 10px 1px 1px" : "1px"};


  .img-container {
    display: flex;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 9999px;
    background-color: var(--background-color)
  }

  img {
    margin: auto;
  }
`

interface SidebarTabProps {
    title: string;
    description: string;
    icon: string;
    isActive: boolean;
}

const SidebarTab = ({title, description, icon, isActive}: SidebarTabProps) => {
    return (
        <SidebarTabStyles isActive={isActive}>
            <div className="img-container">
                <img src={require(`images/sidebar/${icon}`)} alt={`${title}-icon`}/>
            </div>
            <h4>{title}</h4>
            <small>{description}</small>
        </SidebarTabStyles>
    )
}

export default SidebarTab