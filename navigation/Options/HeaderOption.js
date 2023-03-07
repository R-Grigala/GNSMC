import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native'

export const navOptions = (nav) => {
    return {
        headerTintColor: '#cbd5e1',
        headerStyle: {
            backgroundColor: "#0f172a"
        },
        headerRight: () => (
            <Ionicons
                name="menu"
                size={32}
                color="white"
                onPress={()=> nav.toggleDrawer()}
                style={{margin:15}}
            />
        ),
        headerLeft: () => (
            <Text style={{color: 'white', fontSize: 20, paddingLeft:5, paddingRight: 100}}>Logo</Text>
        )
    }
}