// Possibly the most common style of navigation in mobile apps is tab-based navigation. 
// This can be tabs on the bottom of the screen or on the top below the header (or even instead of a header).

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from '../stacks/HomeStack';
import MapStack from '../stacks/MapStack';
import NewsStack from '../stacks/NewsStack';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                },
                tabBarActiveTintColor: 'red',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'HomeStack') {
                        iconName = focused ? 'list' : 'list-outline'
                    }
                    else if (route.name === 'MapStack') {
                        iconName = focused ? 'earth' : 'earth-outline'
                    }
                    else if (route.name === 'NewsStack') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline'
                    }
    
                    return <Ionicons name={iconName} size={focused ? 35: size} color={color} />
                }
            })}
        >
          <Tab.Screen 
            name="HomeStack" 
            component={HomeStack} 
            options={{ 
                title: 'Timeline',
                headerTitleAlign: 'center',
            }}
            />
          <Tab.Screen name="MapStack" component={MapStack} />
          <Tab.Screen name='NewsStack' component={NewsStack} />
        </Tab.Navigator>
    );
}

export default MyTabs;