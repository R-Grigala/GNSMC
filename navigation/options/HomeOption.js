import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const HomeOptions = (nav) => {
    const navigation = useNavigation();

    const handleLogoPress = () => {
        navigation.navigate('Home');
    };

    return {
        headerTintColor: 'black',
        headerStyle: {
            backgroundColor: "#fff"
        },
        // headerRight: () => (
        //     <Ionicons
        //         name="menu"
        //         size={32}
        //         color="white"
        //         onPress={()=> nav.toggleDrawer()}
        //         style={{margin:15}}
        //     />
        // ),
        headerLeft: () => (
            <TouchableOpacity onPress={handleLogoPress}>
                <View style={{paddingLeft:20}}>
                    <Image 
                        style={{width: 45, resizeMode: 'contain'}}
                        source={require("../../assets/images/logo.png")}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}