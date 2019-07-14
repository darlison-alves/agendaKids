import React from 'react'
import { SafeAreaView } from 'react-navigation';
import { ImageBackground, StatusBar, Text, Button, View } from 'react-native'
import { Container, HeaderDetail, HeaderDetailText, HeaderDetailCard, HeaderDetailCardText, HeaderDetailCardTextSub } from './styles';

export default class Details extends React.Component {
    static navigationOptions = {
        title: 'Detalhes do evento',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground
            style={{flex: 1, width: '100%', height: '100%'}}
                source={{uri: 'https://s3-us-west-2.amazonaws.com/agendaedu-dev/schools/c5c1a933-cdef-4c9b-8a87-490f25c2538d/events/5380/attachments/1550866911-$1-original-poster-agendakids.jpeg'}}
            >
                <Container>
                    <HeaderDetail>

                        <HeaderDetailCard>
                            <HeaderDetailCardText>25</HeaderDetailCardText>
                            <HeaderDetailCardTextSub>JAN</HeaderDetailCardTextSub>
                        </HeaderDetailCard>                    
                        <HeaderDetailText>Exposição de telas no museu de fotografia</HeaderDetailText>    

                    </HeaderDetail>
                    <Text>Lorem ipsum dolor sit amet, consectur adipiscing elit. Ut aliquam magna a arcu egestas porttitor. Donec molestie porta velit, non mattis dui porttitor id. In ultrices a nunc.</Text>
                </Container>
            </ImageBackground>
        );
    }
}

