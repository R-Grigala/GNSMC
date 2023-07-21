import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import EventDetailScreen from '../../screens/EventDetailScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    
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
                        <TouchableOpacity onPress={handleBackPress}>
                            <View style={{paddingLeft:13}}>
                                <Image
                                    style={{width: 33, height: 33, resizeMode: 'contain'}}
                                    source={
                                        require('../../assets/icons/chevron-back-outline.png')
                                    }
                                />
                            </View>
                        </TouchableOpacity>
                    )
                }} />
        </Stack.Navigator>
    );
}

export default HomeStack