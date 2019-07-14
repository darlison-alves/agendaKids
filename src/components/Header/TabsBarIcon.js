import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors';

export default function TabBarIcon(props) {
    return (
        <Ionicons       
            name="md-menu"
            size={40}
            style={{ marginBottom: -3, marginLeft: 10 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    )
}