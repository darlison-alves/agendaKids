import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Header, Container, Left, Right } from 'native-base'
import { ContainerHeader, HeaderText, HeaderBody } from './styles';


export default function Headerbar() {
    return(
        <ContainerHeader>            
            <Header transparent >
                <HeaderBody>
                    <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#000" />
                    <HeaderText>Eventos</HeaderText>
                </HeaderBody>                
            </Header>
        </ContainerHeader>
    )
}