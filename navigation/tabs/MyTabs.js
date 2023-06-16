import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from '../stacks/HomeStack';
import MapStack from '../stacks/MapStack';
import NewsStack from '../stacks/NewsStack';
import SettingsStack from '../stacks/SettingsStack';

const Tab = createBottomTabNavigator();

// Define the screen options for the tab navigator
const screenOptions = ({ route, focused}) => {
  const { name } = route;
  const iconName = name === 'HomeStack' ? 'list' : name === 'MapStack' ? 'earth' : name === 'NewsStack' ? 'newspaper' : 'settings';
  const focusedIconName = `${iconName}${focused ? '' : '-outline'}`;

  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: '#fff',
    },
    tabBarActiveTintColor: 'red',
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons name={focusedIconName} size={focused ? 35 : size} color={color} />
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
