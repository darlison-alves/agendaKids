import React from 'react'
import { ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

import { Container, HeaderDetail, HeaderDetailText, 
    HeaderDetailCard, HeaderDetailCardText, HeaderDetailCardTextSub, 
    Description, ContainerTextHour, TextHour } from './styles';

import Colors from '../constants/Colors';

export default class Details extends React.Component {
    static navigationOptions = {
        title: 'Detalhes do evento',
    };
    render() {
        const { navigation } = this.props;
        const dataEvent = navigation.getParam('item')
        const dia = navigation.getParam('dia')
        const hora = navigation.getParam('hora')
        const mes = navigation.getParam('mes')
        
        return (
            <ImageBackground
            style={{flex: 1, width: '100%', height: '100%'}}
                source={{uri: dataEvent.image }}
            >
                <Container>
                    <HeaderDetail>

                        <HeaderDetailCard>
                            <HeaderDetailCardText>{dia}</HeaderDetailCardText>
                            <HeaderDetailCardTextSub>{mes.substring(0, 3)}</HeaderDetailCardTextSub>
                        </HeaderDetailCard>                    

                        <HeaderDetailText>{dataEvent.title}</HeaderDetailText>    
                        
                    </HeaderDetail>

                    <ContainerTextHour>
                        <Icon name="clock" size={20} color={Colors.lightgrey} />
                        <TextHour>
                            {hora}
                        </TextHour>
                    </ContainerTextHour>
                    <Description>
                        {dataEvent.description}
                    </Description>
                </Container>
            </ImageBackground>
        );
    }
}

