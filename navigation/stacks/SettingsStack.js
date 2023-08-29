import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import SettingsScreen from '../../screens/SettingsScreen';
import { getUrl } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import themeContext from '../../theme/themeContext';

const Stack = createStackNavigator();

const SettingsStack = () => {
    const theme = useContext(themeContext);
    const {t} = useTranslation();
    const LogoImage = `${getUrl()}/images/GNSMC_logo.png`;
    
    const navigation = useNavigation();

    const handleLogoPress = () => {
        navigation.navigate('HomeStack');
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SettingsScreen" 
                component={SettingsScreen} 
                options={{
                    headerTitle: t('settings'),
                    headerStyle: {
                        backgroundColor: {backgroundColor: theme.stackColor},
                        shadowColor: '#000',
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
        </Stack.Navigator>
    );
}

export default SettingsStack