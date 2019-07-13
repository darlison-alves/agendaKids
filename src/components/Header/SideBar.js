import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ContainerSidebar, SidebarText } from "./styles";

export default function SideBar () {
    return (
        <ContainerSidebar>
            <SidebarText>
                <Icon name="rocket" size={30} color="#900" />
                    Conteúdo side bar
            </SidebarText>
        </ContainerSidebar>
    )
}