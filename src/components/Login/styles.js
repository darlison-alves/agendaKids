import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`

export const ContainerInput = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #fff;
    borderWidth: 0.5;
    borderColor: ${Colors.purple};                
    borderRadius: 5;
    marginBottom: 17px;
`
export const TitleLogin = styled.Text`
    fontSize: 25px;
    fontWeight: bold;
    paddingRight: 7px;
`

export const ButtonLogin = styled.Button `
    backgroundColor: ${Colors.purple}
`

export const HeaderLogin = styled.View `
    flexDirection: row;
    alignItems: center;
    paddingBottom: 37px;
`
export const TextErrorContainer = styled.View `
    flexDirection: row;
    alignItems: center;
    justifyContent: center;    
`

export const TextError = styled.Text `    
    color: red;
`

export const InputLable = styled.Text`
    fontSize: 14px;
    color: ${Colors.grey}
`

export const Input = styled.TextInput`
    justifyContent: center;
    alignItems: center;
    paddingHorizontal: 10px;
    paddingVertical: 10px;
    borderRadius: 5px;
    backgroundColor: #FFF;
    alignSelf: stretch;
    marginBottom: 15px;
    marginHorizontal: 20px;
    fontSize: 16px;
    width: 70%;    

`

export const touchableOpaciity = { 
    backgroundColor: Colors.purple, 
    width: '90%', 
    alignItems: 'center', 
    borderRadius: 5,
    bottom: 40,
    position: 'absolute'
}


export const spinnerStyle = {     
    width: '90%', 
    alignItems: 'center', 
    borderRadius: 5,
    bottom: 40,
    position: 'absolute'
}

export const TextButton = styled.Text`
    color: ${Colors.white}; 
    paddingTop:16;
    paddingBottom:15;
    fontSize:16;
`