import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../../screens/NewsScreen';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NewsDetailScreen from '../../screens/NewsDetailScreen';
import { useContext } from 'react';
import themeContext from '../../theme/themeContext';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

const NewsStack = () => {
  const theme = useContext(themeContext);
  const {t} = useTranslation();
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
            headerTitle:t('news'),
            headerStyle: {
              backgroundColor: theme.stackColor,
              borderBottomWidth:0.5,
              borderColor:'black',
              shadowOpacity: 0.9,
              shadowRadius: 3,
              elevation: 1
            },
            headerTitleAlign: 'center',
            headerRight: () => null,
            headerLeft:  () => (
                <TouchableOpacity onPress={handleLogoPress}>
                    <View style={{paddingLeft:20}}>
                        <Image 
                            style={[{width: 45, height: 45, resizeMode: 'contain'}, {tintColor: theme.logoColor}]}
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
          name="NewsDetailScreen" 
          component={NewsDetailScreen} 
          options={{ 
              headerTitle: t('news'),
              headerTitleAlign: 'center',
              headerRight: () => null,
              headerLeft: () => (
                <TouchableOpacity onPress={handleBackPress}>
                  <View style={{paddingLeft:13}}>
                      <Image
                          style={[{width: 33, height: 33, resizeMode: 'contain'}, {tintColor:theme.color}]}
                          source={
                              require('../../assets/icons/chevron-back-outline.png')
                          }
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