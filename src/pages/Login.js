import React from 'react'
import FormConnected from '../components/Login/FormConnected';

export  default function Login(props) {
    return (
       <FormConnected {...props} />
    )
}

Login.navigationOptions = {
    header: null
}