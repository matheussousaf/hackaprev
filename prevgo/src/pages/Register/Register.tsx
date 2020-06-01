import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useAuthContext} from '../../contexts/auth-context';
import {Link} from '@react-navigation/native';
import {UserRegister} from '../../models/User';

const RegisterButtonTouchable = styled.TouchableOpacity`
  width: 90%;
  margin-top: 20px;
`;

const RegisterButtonContainer = styled.View`
  background: ${(props) => props.theme.colors.main};
  height: 50px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const RegisterButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const RegisterContainer = styled.View`
  height: 90%;
  flex: 1;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomText = styled.Text`
  color: ${(props) => props.theme.colors.main};
  font-size: 18px;
  margin-top: 20px;
`;

interface RegisterButtonProps {
  title: string;
  onPress: Function;
}

const RegisterButton: React.FC<RegisterButtonProps> = (props) => {
  return (
    <RegisterButtonTouchable
      activeOpacity={0.9}
      onPress={() => props.onPress()}>
      <RegisterButtonContainer>
        <RegisterButtonText>{props.title}</RegisterButtonText>
      </RegisterButtonContainer>
    </RegisterButtonTouchable>
  );
};

const InputBoxContainer = styled.View`
  width: 90%;
  height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterInput = styled.TextInput`
  font-size: 16px;
  width: 90%;
  font-family: Myriad Pro;
`;

const Explorer = styled.Image`
  flex: 1;
  width: 500px;
`;

const LinkToLoginContainer = styled(Link)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.main};
  margin-bottom: 30px;
  margin-top: 20px;
`;

const Register: React.FC = () => {
  const {register} = useAuthContext();
  const [info, setInfo] = useState({} as UserRegister);

  return (
    <RegisterContainer>
      <Explorer source={require('../../../assets/img/explorer.png')} />
      <CustomText>Vamos começar nossa jornada!</CustomText>
      <InputBoxContainer>
        <RegisterInput
          placeholder="E-mail"
          value={info.email}
          onChangeText={(text: string) => setInfo({...info, email: text})}
        />
      </InputBoxContainer>
      <InputBoxContainer>
        <RegisterInput
          placeholder="Seu Nome"
          value={info.firstName}
          onChangeText={(text: string) => setInfo({...info, firstName: text})}
        />
      </InputBoxContainer>
      <InputBoxContainer>
        <RegisterInput
          placeholder="Sua Senha"
          value={info.password}
          secureTextEntry={true}
          onChangeText={(text: string) => setInfo({...info, password: text})}
        />
      </InputBoxContainer>

      <RegisterButton title="Registrar" onPress={() => register(info)} />
      <LinkToLoginContainer to="/Login">
        Volte para o Login
      </LinkToLoginContainer>
    </RegisterContainer>
  );
};

export default Register;
