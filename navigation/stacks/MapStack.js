import { createStackNavigator } from '@react-navigation/stack';
import EqMap from '../../components/eqMap/EqMap';
import MapScreen from '../../screens/MapScreen';


const Stack = createStackNavigator();

const MapStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Maps" component={MapScreen} options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="EqMap" component={EqMap} options={{ headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    );
}

export default MapStack