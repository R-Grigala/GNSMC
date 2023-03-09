import { createStackNavigator } from '@react-navigation/stack';
import EqMap from '../../components/eqMap/EqMap';
import HomeScreen from '../../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import EqDetail from '../../components/eqDetail/EqDetail';
import { Image, TouchableOpacity, View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import EventDetailScreen from '../../screens/EventDetailScreen';


const Stack = createStackNavigator();

const HomeStack = () => {
    
    const navigation = useNavigation();

    const handleLogoPress = () => {
        navigation.navigate('HomeStack');
    };

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerTitle: 'Earthquakes',
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
            <Stack.Screen 
                name="EventDetailScreen" 
                component={EventDetailScreen} 
                options={{ 
                    headerTitle: 'EqDetail',
                    headerTitleAlign: 'center',
                    headerRight: () => null,
                    headerLeft: () => (
                        <HeaderBackButton 
                            tintColor='black'
                            onPress={() => navigation.goBack()}
                            style={{paddingLeft: 10}}
                        />
                    )
                }} />
        </Stack.Navigator>
    );
}

export default HomeStack