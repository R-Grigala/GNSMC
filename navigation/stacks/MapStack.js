import { createStackNavigator } from '@react-navigation/stack';
import EqMap from '../../components/eqMap/EqMap';
import MapScreen from '../../screens/MapScreen';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

const MapStack = () => {

  const navigation = useNavigation();

  const handleLogoPress = () => {
      navigation.navigate('HomeStack');
  };

  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="MapScreen" 
          component={MapScreen}
          options={{
            headerTitle:'Map',
            headerTitleAlign: 'center',
            headerRight: () => null,
            headerLeft:  () => (
                <TouchableOpacity onPress={handleLogoPress}>
                    <View style={{paddingLeft:20}}>
                        <Image 
                            style={{width: 45, resizeMode: 'contain'}}
                            source={require("../../assets/images/logo.png")}
                        />
                    </View>
                </TouchableOpacity>
            )
          }} 
        />
        <Stack.Screen name="EqMap" component={EqMap} options={{ headerTitleAlign: 'center' }} />
      </Stack.Navigator>
  );
}

export default MapStack