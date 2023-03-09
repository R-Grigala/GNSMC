import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../../screens/NewsScreen';


const Stack = createStackNavigator();

const NewsStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="NewsScreen" component={NewsScreen} options={{ headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    );
}

export default NewsStack