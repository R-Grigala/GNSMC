import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import SettingsScreen from '../../screens/SettingsScreen';


const Stack = createStackNavigator();

const SettingsStack = () => {
    
    const navigation = useNavigation();

    const handleLogoPress = () => {
        navigation.navigate('HomeStack');
    };

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen" 
                component={SettingsScreen} 
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

export default SettingsStack