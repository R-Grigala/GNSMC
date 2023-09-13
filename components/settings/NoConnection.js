import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState }  from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useTranslation } from 'react-i18next';
import themeContext from '../../theme/themeContext';


const NoConnection = ({onRefresh}) => {
    const {t} = useTranslation();
    const theme = useContext(themeContext);
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setIsConnected(state.isConnected);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    // Function to handle automatic refresh when the connection is restored
    const handleConnectionRestored = () => {
      if (isConnected) {
        onRefresh(); // Trigger the refresh action
      }
    };

    return (
        <View style={[{flex:20 }, {backgroundColor:theme.connectionBackCol}]}>
            {/* #acacac, #F2F2F2*/}
            {/* You can display a message or component here for when data is empty */}
            <View style={{flex:10, justifyContent:'center', alignItems:'center'}}>
                <Image
                    source={require('../../assets/logos/errorBackgroundDark.jpg')}
                    style={{width:'70%', height:'80%',}}
                />
            </View>
            <View style={{flex:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={{paddingBottom:30,color:'black', fontWeight:'bold', textDecorationLine:'underline', textDecorationColor:'red'}}>{t('noInternet')}</Text>
                <View style={styles.container_}>
                    <TouchableOpacity onPress={handleConnectionRestored} style={styles.button}>
                        <View style={{flexDirection:'row'}}>
                            <Image
                                source={require('../../assets/icons/refresh-circle-outline.png')}
                                style={{width: 35, height: 35, resizeMode: 'contain', tintColor:'white'}}
                            />
                            <View style={{alignItems:'center', justifyContent:'center', marginLeft:15, marginRight:5}}>
                                <Text style={styles.buttonText}>{t('tryAgain')}</Text>
                            </View>
                        
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default NoConnection;