import React from 'react';
import styled from 'styled-components/native';

// import { Container } from './styles';

const SoonContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
`;

const ExplorerImage = styled.Image`
  width: 300px;
  height: 300px;
`;

const MiddleContainer = styled.View`
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const SoonText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.main};
`;

const Message = styled.Text`
  color: gray;
  text-align: center;
  font-size: 14px;
`;

const Soon: React.FC = () => {
  return (
    <SoonContainer>
      <MiddleContainer>
        <ExplorerImage
          source={require('../../../assets/img/second-explorer.png')}
        />
        <SoonText>Não há nada por aqui!</SoonText>
        <Message>
          Nosso time está trabalhando pra construir essa área, aguarde.
        </Message>
      </MiddleContainer>
    </SoonContainer>
  );
};

export default Soon;
