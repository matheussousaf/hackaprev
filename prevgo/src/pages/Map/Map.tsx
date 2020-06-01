import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import {LightColors} from '../../styles/main-theme';

export const CustomHeader = styled.View`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MapContainer = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
`;

const ProgressContainer = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  display: flex;
  padding: 30px;
`;

export const CustomText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.main};
`;

export const DaysBadge = styled.View`
  margin-left: 20px;
`;

export const CalendarIcon = styled(Icon)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 35px;
`;

export const BellIcon = styled(Icon)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 35px;
  top: -8px;
`;

export const NotificationsBadge = styled.View`
  margin-right: 20px;
`;

const ProgressText = styled(CustomText)`
  top: -48px;
  right: -10px;
  font-size: 16px;
`;

export const CalendarText = styled.Text`
  color: ${(props) => props.theme.colors.secondary};
  top: -25px;
  font-size: 16px;
  font-weight: bold;
  right: -6px;
`;

const MapImage = styled.Image`
  width: 500px;
  margin: 0 auto;
  height: 250px;
`;

const MapImageContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RedBadge = styled.View`
  background: tomato;
  width: 14px;
  height: 14px;
  top: -40px;
  border-radius: 10px;
`;

export const SmallText = styled.Text`
  font-size: 11px;
  top: -2px;
  right: -4px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

const Map: React.FC = () => {
  return (
    <MapContainer>
      <CustomHeader>
        <DaysBadge>
          <CalendarIcon name="calendar" />
          <CalendarText>36</CalendarText>
        </DaysBadge>
        <ProgressContainer>
          <CustomText>Países desbravados</CustomText>
          <Progress.Circle
            size={70}
            color={LightColors.main}
            style={{marginTop: 15}}
            borderWidth={0}
            progress={0.8}
            thickness={5}>
            <ProgressText>90/193</ProgressText>
          </Progress.Circle>
        </ProgressContainer>
        <NotificationsBadge>
          <BellIcon name="bell" />
          <RedBadge>
            <SmallText>5</SmallText>
          </RedBadge>
        </NotificationsBadge>
      </CustomHeader>
      <MapImageContainer>
        <MapImage source={require('../../../assets/img/map.png')} />
      </MapImageContainer>
    </MapContainer>
  );
};

export default Map;
