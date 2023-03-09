import { createStackNavigator } from '@react-navigation/stack';
import EqMap from '../../components/EqMap';
import HomeScreen from '../../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import { HomeOptions } from '../options/HomeOption';


const Stack = createStackNavigator();

const HomeStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator
            screenOptions={() => HomeOptions(navigation)}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="EqMap" component={EqMap} options={{ headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    );
}

export default HomeStack