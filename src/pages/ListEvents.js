import React from 'react'
import HeaderListEventConnected from '../components/Index/HeaderListEventConnected';
import Icon from 'react-native-vector-icons/FontAwesome'
import TabBarIcon from '../components/Header/TabsBarIcon';

export default function ListEvents(props) {    
    return(
        <HeaderListEventConnected {...props} />
    )
}

ListEvents.navigationOptions = {
    title: 'Eventos',
    headerLeft:(<TabBarIcon name="align-justify" size={30} color="#000" />)
    
}