import SideBar from "components/Sidebar";
import styled from "styled-components";

interface IProps {
    Component: JSX.Element
}

const ContainerStyles = styled.div`
    display: flex;
`

export default function RenderComponentWithSideBar({ Component }: IProps) {
    return(
        <ContainerStyles>
            <SideBar></SideBar>
            { Component }
        </ContainerStyles>
    )
}