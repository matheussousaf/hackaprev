import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const InvestmentContainer = styled.View`
  flex: 1;
  background: whitesmoke;
  padding: 10px;
`;

const CardContainer = styled.View`
  border-radius: 15px;
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const HistoryContainer = styled(CardContainer)`
  margin-top: 20px;
  flex: 1;
`;

const MonthsCard = styled.View`
  flex: 1;
  margin: 10px;
  border-radius: 10px;
  width: 100%;
  background: white;
  align-items: center;
`;

const MonthText = styled.Text`
  color: ${(props) => props.theme.colors.main};
  font-size: 16px;
  align-items: flex-start;
  font-weight: bold;
`;

const InvestmentLittleCard = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  padding: 5px 0;
  flex-direction: row;
`;

const MoneyInvestmentCard = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
`;

interface MoneyInvestmentProps {
  color: string;
}

const MoneyInvestment = styled.Text<MoneyInvestmentProps>`
  color: ${(props) => props.color};
`;

const PrevidenciaTitle = styled.Text`
  color: ${(props) => props.theme.colors.main};
  font-size: 20px;
  font-weight: bold;
`;

const MoneyCard = styled.View`
  background: white;
  border: 2px solid lightgray;
  border-radius: 15px;
  margin-top: 30px;
  width: 300px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoneyText = styled(PrevidenciaTitle)`
  font-size: 18px;
`;

const LittleText = styled.Text`
  color: grey;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

const EyeIcon = styled(Icon)`
  margin-right: 5px;
  margin-top: 2px;
  color: grey;
`;

const InvestedValue = styled.View`
  display: flex;
  flex-direction: row;
`;

const TotalCard = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  height: 90px;
  flex-direction: row;
`;

const InfoCard = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 10px;
  align-items: center;
`;

const InfoBadge = styled.View`
  background: ${(props) => props.theme.colors.main};
  width: 100px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const InfoText = styled.Text`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.main};
`;

const InfoBadgeText = styled.Text`
  color: ${(props) => props.theme.colors.white};
`;

const Card: React.FC = () => {
  return (
    <>
      <CardContainer>
        <PrevidenciaTitle>Minha Previdência</PrevidenciaTitle>
        <MoneyCard>
          <InvestedValue>
            <EyeIcon name="eye" size={15} />
            <LittleText>Valor investido</LittleText>
          </InvestedValue>
          <MoneyText>R$ 16.402,90</MoneyText>
        </MoneyCard>
        <TotalCard>
          <InfoCard>
            <InfoText>Rendimentos</InfoText>
            <InfoBadge>
              <InfoBadgeText>R$ 470,00</InfoBadgeText>
            </InfoBadge>
          </InfoCard>
          <InfoCard>
            <InfoText>Tempo Restante</InfoText>
            <InfoBadge>
              <InfoBadgeText>157 dias</InfoBadgeText>
            </InfoBadge>
          </InfoCard>
        </TotalCard>
      </CardContainer>
      <HistoryContainer>
        <PrevidenciaTitle>Histórico</PrevidenciaTitle>
        <MonthsCard>
          <MonthText>Novembro</MonthText>
          <InvestmentLittleCard>
            <MoneyInvestmentCard>
              <MoneyInvestment color="green">+ R$100,00</MoneyInvestment>
            </MoneyInvestmentCard>
            <MoneyInvestmentCard>
              <MoneyInvestment color="red">- R$100,00</MoneyInvestment>
            </MoneyInvestmentCard>
          </InvestmentLittleCard>
        </MonthsCard>
        <MonthsCard>
          <MonthText>Outubro</MonthText>
          <InvestmentLittleCard>
            <MoneyInvestmentCard>
              <MoneyInvestment color="green">+ R$100,00</MoneyInvestment>
            </MoneyInvestmentCard>
            <MoneyInvestmentCard>
              <MoneyInvestment color="red">- R$100,00</MoneyInvestment>
            </MoneyInvestmentCard>
          </InvestmentLittleCard>
        </MonthsCard>
        <MonthsCard>
          <MonthText>Setembro</MonthText>
          <InvestmentLittleCard>
            <MoneyInvestmentCard>
              <MoneyInvestment color="green">+ R$120,00</MoneyInvestment>
            </MoneyInvestmentCard>
            <MoneyInvestmentCard>
              <MoneyInvestment color="red">- R$40,00</MoneyInvestment>
            </MoneyInvestmentCard>
          </InvestmentLittleCard>
        </MonthsCard>
        <MonthsCard>
          <MonthText>Agosto</MonthText>
          <InvestmentLittleCard>
            <MoneyInvestmentCard>
              <MoneyInvestment color="green">+ R$203,00</MoneyInvestment>
            </MoneyInvestmentCard>
            <MoneyInvestmentCard>
              <MoneyInvestment color="red">- R$320,00</MoneyInvestment>
            </MoneyInvestmentCard>
          </InvestmentLittleCard>
        </MonthsCard>
      </HistoryContainer>
    </>
  );
};

const Investments: React.FC = () => {
  return (
    <InvestmentContainer>
      <Card />
    </InvestmentContainer>
  );
};

export default Investments;
