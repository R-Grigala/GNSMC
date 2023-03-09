import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../../screens/NewsScreen';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const NewsStack = () => {

  const navigation = useNavigation();

  const handleLogoPress = () => {
      navigation.navigate('HomeStack');
  };

  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="NewsScreen" 
          component={NewsScreen} 
          options={{
            headerTitle:'News',
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
      </Stack.Navigator>
  );
}

export default NewsStack