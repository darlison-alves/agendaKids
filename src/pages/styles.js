import styled from 'styled-components'
import Colors from '../constants/Colors';


export const Container = styled.View`
    backgroundColor: ${Colors.white};
    width: 100%;
    height: 65%;
    bottom: 0;
    position: absolute;
    justifyContent: center;
    alignItems: center;

`

export const HeaderDetail = styled.View`
    flexDirection: row;
    margin: 27px 32px 0px 32px;
    justifyContent: center;
    alignItems: center;
    position:absolute;
    top:0
    
`

export const HeaderDetailText = styled.Text`
    fontSize: 22px;
    width: 70%    
`

export const HeaderDetailCard = styled.View`
    flex:1;
    flexDirection:column;
    alignItems: center;
    background: #733DBE;
    opacity: 0.09
    zIndex: 0;
    position: relative
`


export const HeaderDetailCardText = styled.Text`    
    color: #733DBE;
    fontSize: 22px
    opacity: 1 !important
    fontWeight: 400
    zIndex: 2
    position: relative
`

export const HeaderDetailCardTextSub = styled.Text`    
    color: #733DBE;
    fontSize: 14px    
`