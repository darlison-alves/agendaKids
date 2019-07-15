import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, Spinner } from "native-base";
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Container, Input, ContainerInput, InputLable, TitleLogin, HeaderLogin, ButtonLogin, touchableOpaciity, TextButton, TextError, TextErrorContainer, SpinnerSubmit, spinnerStyle } from './styles';
import Colors from '../../constants/Colors';

export default function Form (props) {
    const [dataInput, onChangeInput] = React.useState({email: "", password:""})
    const [error, setError] = React.useState(props.error)
    

    function login() {
        if(!dataInput.email) {
            setError( "email não pode ser vazio!" )
            return;
        }

        if(!dataInput.password) {
            setError( "senha não pode ser vazio!" )
            return;
        }

        setError('')

        props.login(dataInput, props.navigation.navigate)
    }



    return (
        <Container>
            <KeyboardAvoidingView behavior="padding" enabled >
            <HeaderLogin>
                <TitleLogin>Faça seu login</TitleLogin> 
                <Icon name="key"  style={{ marginRight: 10 }} size={36} color={Colors.greyMedium} />
            </HeaderLogin>
            
            <TextErrorContainer>            
                {  props.error || error ? (
                <> 
                    <Icon name="exclamation-circle" style={{ marginRight: 10 }} size={36} color="red" /> 
                    <TextError>
                        { props.error || error }
                    </TextError>
                </>): null }
            </TextErrorContainer>
            

            <InputLable>E-mail ou usuário</InputLable> 
            <ContainerInput>
                <Input name="email" onChangeText={(text) => onChangeInput({...dataInput, email: text})} />
                <Icon name="envelope" style={{ marginRight: 10 }} size={36} color={Colors.greyMedium} />
            </ContainerInput>

            <InputLable>Senha</InputLable>
            <ContainerInput>                
                <Input name="password" secureTextEntry={true}  onChangeText={(text) => onChangeInput({...dataInput, password: text})} />
                <Icon name="eye-slash" style={{ marginRight: 10 }} size={36} color={Colors.greyMedium} />
            </ContainerInput>   
            </KeyboardAvoidingView>
            
            {
                props.loading ?  <Spinner color={Colors.purple} size={50} style={spinnerStyle} />:

                                <TouchableOpacity style={touchableOpaciity} onPress={() => login() } >                                   
                                    <TextButton>Entrar</TextButton>
                                </TouchableOpacity>
            }
            
        </Container>
    )
}

