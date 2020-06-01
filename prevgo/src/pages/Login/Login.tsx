import React, {useState} from 'react';
import {Link} from '@react-navigation/native';
import {useAuthContext} from '../../contexts/auth-context';
import styled from 'styled-components/native';

const LoginButtonTouchable = styled.TouchableOpacity`
  width: 90%;
  margin-top: 20px;
`;

const LoginButtonContainer = styled.View`
  background: ${(props) => props.theme.colors.main};
  height: 50px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const LoginContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
`;

const LoginBoxContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  background: ${(props) => props.theme.colors.white};
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

const InputBoxContainer = styled.View`
  width: 90%;
  height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.main};
  background: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled.TextInput`
  font-size: 16px;
  width: 90%;
  font-family: Myriad Pro;
`;

interface LoginButtonProps {
  title: string;
  onPress: Function;
}

const LoginButton: React.FC<LoginButtonProps> = (props) => {
  return (
    <LoginButtonTouchable activeOpacity={0.9} onPress={() => props.onPress()}>
      <LoginButtonContainer>
        <LoginButtonText>{props.title}</LoginButtonText>
      </LoginButtonContainer>
    </LoginButtonTouchable>
  );
};

const LinkToRegisterContainer = styled(Link)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.main};
`;

const CustomText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
`;

const Login: React.FC = () => {
  const {login} = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginContainer>
      <Logo source={require('../../../assets/img/logo.png')} />
      <LoginBoxContainer>
        <CustomText>
          Ainda não tem uma conta?{' '}
          <LinkToRegisterContainer to="/Register">
            Cadastre-se
          </LinkToRegisterContainer>
        </CustomText>
        <InputBoxContainer>
          <LoginInput
            placeholder="E-mail"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
        </InputBoxContainer>
        <InputBoxContainer>
          <LoginInput
            placeholder="Senha"
            value={password}
            secureTextEntry={true}
            onChangeText={(text: string) => setPassword(text)}
          />
        </InputBoxContainer>
        <LoginButton onPress={() => login(email, password)} title="Avançar" />
      </LoginBoxContainer>
    </LoginContainer>
  );
};

export default Login;
