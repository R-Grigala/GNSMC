import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import EventDetailScreen from '../../screens/EventDetailScreen';
import { getUrl } from '../../utils/utils';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const HomeStack = () => {
    const LogoImage = `${getUrl()}/images/GNSMC_logo.png`;
    
    const navigation = useNavigation();

    const handleLogoPress = () => {
        navigation.navigate('HomeStack');
    };

    const handleBackPress = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerTitle: 'სეისმური აქტივობა',
                    headerStyle: {
                        backgroundColor: 'rgb(212, 212, 212)',
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
                name="EventDetailScreen" 
                component={EventDetailScreen} 
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

export default HomeStack