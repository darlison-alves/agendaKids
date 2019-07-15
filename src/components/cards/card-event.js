import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import { View, Image } from 'react-native'
import { Container, CardBody, CardTitle, LIGHTGREY, CardDescriptionBody, CardSubDescriptionBody, CardDescription, CardSubDescription, CardFooterText, ContainerImage } from "./styles";

export default function CardEvent({ 
    title="Eventos",
    description="",
    hora = '14:00',
    footerText="",
    image=""
 }) {
    return (
        <Container>
            { image ? ( <ContainerImage>
                            <Image
                                style={{width: 70, height: 90}}
                                source={{uri: image}}
                            />
                        </ContainerImage> ) : null}
           

            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardDescriptionBody>
                    <CardDescription>{description}</CardDescription>
                    <CardSubDescriptionBody>
                        <Icon name="clock" size={20} color={LIGHTGREY} /><CardSubDescription> {hora}</CardSubDescription>
                    </CardSubDescriptionBody>                    
                </CardDescriptionBody>
                
                <CardFooterText>{footerText}</CardFooterText>
            </CardBody>
        </Container>
    )
}