import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeStack from '../stacks/HomeStack';
import MapStack from '../stacks/MapStack';
import NewsStack from '../stacks/NewsStack';
import SettingsStack from '../stacks/SettingsStack';

const Tab = createBottomTabNavigator();

const iconPaths = {
  list: require('../../assets/icons/list-outline.png'),
  earth: require('../../assets/icons/earth-outline.png'),
  newspaper: require('../../assets/icons/newspaper-outline.png'),
  settings: require('../../assets/icons/settings-outline.png'),
};

const screenOptions = ({ route }) => {
  const { name } = route;
  const iconName = name === 'HomeStack' ? 'list' : name === 'MapStack' ? 'earth' : name === 'NewsStack' ? 'newspaper' : 'settings';

  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: '#fff',
    },
    tabBarActiveTintColor: 'red',
    tabBarIcon: ({ focused, color, size }) => (
      <Image 
      style={{ tintColor: focused ? 'red' : color, width: focused ? 35 : size, height: focused ? 35 : size }} // Customize icon color, width, and height when focused or not
      source={iconPaths[iconName]}
      />
    ),
  };
};

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Timeline',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen name="MapStack" component={MapStack} />
      <Tab.Screen name="NewsStack" component={NewsStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
};

export default MyTabs;
