import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {LightColors} from '../../styles/main-theme';
import {StatusBar} from 'react-native';
// Pages
import Investments from '../../pages/Investments/Investments';
import Settings from '../../pages/Settings/Settings';
import Achievements from '../../pages/Achievements/Achievements';
import Map from '../../pages/Map/Map';
import Content from '../../pages/Content/Content';

const Tab = createBottomTabNavigator();

const MainRoute: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={LightColors.main} />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Map"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) => {
              let iconName: string = '';

              if (route.name === 'Investments') {
                iconName = focused ? 'dollar-sign' : 'dollar-sign';
              } else if (route.name === 'Map') {
                iconName = focused ? 'map-marker-alt' : 'map-marker-alt';
              } else if (route.name === 'Content') {
                iconName = focused ? 'newspaper' : 'newspaper';
              } else if (route.name === 'Achievements') {
                iconName = focused ? 'award' : 'award';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog';
              }

              return <Icons name={iconName} size={25} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: LightColors.secondary,
            inactiveTintColor: LightColors.white,
            style: {
              backgroundColor: LightColors.main,
            },
            showLabel: false,
          }}>
          <Tab.Screen name="Investments" component={Investments} />
          <Tab.Screen name="Content" component={Content} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Achievements" component={Achievements} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainRoute;
