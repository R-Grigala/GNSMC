import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../../screens/NewsScreen';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import NewsDetailScreen from '../../screens/NewsDetailScreen';

const Stack = createStackNavigator();

const NewsStack = () => {

  const navigation = useNavigation();

  const handleLogoPress = () => {
      navigation.navigate('HomeStack');
  };

  const handleBackPress = () => {
    navigation.navigate('NewsScreen');
  };

  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="NewsScreen" 
          component={NewsScreen} 
          options={{
            headerTitle:'სიახლეები',
            headerStyle: {
              backgroundColor: 'rgb(212, 212, 212)',
              shadowColor: '#000',
              shadowOpacity: 0.9,
              shadowRadius: 3,
              elevation: 5 
            },
            headerTitleAlign: 'center',
            headerRight: () => null,
            headerLeft:  () => (
                <TouchableOpacity onPress={handleLogoPress}>
                    <View style={{paddingLeft:20}}>
                        <Image 
                            style={{width: 45, height: 45, resizeMode: 'contain'}}
                            source={require("../../assets/images/logo.png")}
                        />
                    </View>
                </TouchableOpacity>
            )
          }}  
        />
        <Stack.Screen 
          name="NewsDetailScreen" 
          component={NewsDetailScreen} 
          options={{ 
              headerTitle: 'სიახლეები',
              headerTitleAlign: 'center',
              headerRight: () => null,
              headerLeft: () => (
                  <HeaderBackButton 
                      tintColor='black'
                      onPress={handleBackPress}
                      style={{paddingLeft: 10}}
                  />
              )
          }}
        />
      </Stack.Navigator>
  );
}

export default NewsStack