// Possibly the most common style of navigation in mobile apps is tab-based navigation. 
// This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).

import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../screens/HomeScreen';
import MapScreen from '../../screens/MapScreen';
import NewsScreen from '../../screens/NewsScreen';
import { navOptions } from '../Options/HeaderOption';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    const navigation = useNavigation()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#fff',
                },
                tabBarActiveTintColor: 'red',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'list' : 'list-outline'
                    }
                    else if (route.name === 'Map') {
                        iconName = focused ? 'earth' : 'earth-outline'
                    }
                    else if (route.name === 'News') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline'
                    }
    
                    return <Ionicons name={iconName} size={focused ? 35: size} color={color} />
                }
            })}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
                title: 'Timeline',
                headerTitleAlign: 'center',
            }}
            />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name='News' component={NewsScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs;