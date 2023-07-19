import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../../screens/NewsScreen';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NewsDetailScreen from '../../screens/NewsDetailScreen';
import { getUrl } from '../../utils/utils';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const NewsStack = () => {

  const LogoImage = `${getUrl()}/images/GNSMC_logo.png`;

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
                            source={{
                              uri: LogoImage
                            }}
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
                <Ionicons 
                  name='chevron-back-outline'
                  size={33}
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