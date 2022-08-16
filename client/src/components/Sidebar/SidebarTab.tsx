

interface SidebarTabProps {
    title: string;
    description: string;
    icon: string;
}

const SidebarTab = ({title, description,icon}:SidebarTabProps) => {
    return(
        <div>
            <img src={require(`images/sidebar/${icon}`)} alt={`${title}-icon`}/>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
 }

 export default SidebarTab