import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../../screens/MapScreen';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapDetailScreen from '../../screens/MapDetailScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const MapStack = () => {

  const navigation = useNavigation();

  const handleLogoPress = () => {
      navigation.navigate('HomeStack');
  };

  const handleBackPress = () => {
    navigation.navigate('MapScreen');
  };

  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="MapScreen" 
          component={MapScreen}
          options={{
            headerTitle:'რუკა',
            headerStyle: {
              backgroundColor: 'rgb(235, 235, 235)',
              shadowColor: '#000',
              shadowOpacity: 0.9,
              shadowRadius: 3,
              elevation: 10 
            },
            headerTitleAlign: 'center',
            headerRight: () => null,
            headerLeft:  () => (
                <TouchableOpacity onPress={handleLogoPress}>
                    <View style={{paddingLeft:20}}>
                        <Image 
                            style={{width: 45, height: 45, resizeMode: 'contain'}}
                            source={
                              require('../../assets/logos/GNSMC_logo.png')
                            }
                        />
                    </View>
                </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen 
          name="MapDetailScreen" 
          component={MapDetailScreen} 
          options={{ 
              headerTitle: 'სეისმური აქტივობა',
              headerTitleAlign: 'center',
              headerRight: () => null,
              headerLeft: () => (
                <Ionicons 
                  name='chevron-back-outline'
                  size={33}
                  onPress={handleBackPress} 
                  style={{paddingLeft: 10}}
              />
              )
          }} />
      </Stack.Navigator>
  );
}

export default MapStack