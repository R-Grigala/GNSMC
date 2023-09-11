import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState }  from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useTranslation } from 'react-i18next';
import themeContext from '../theme/themeContext';


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
        <View style={{backgroundColor:'#ACACAC', flex:20}}>
            {/* #acacac, #F2F2F2*/}
            {/* You can display a message or component here for when data is empty */}

            <View style={{flex:10, justifyContent:'center', alignItems:'center'}}>
                <Image
                    source={require('../assets/logos/backgroundErrorDark.jpg')}
                    style={{width:'70%', height:'80%'}}
                />
            </View>
            <View style={{flex:10, justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{}}>{t('noInternet')}</Text>
                <Text>{t('checkConnection')}</Text>
                <View style={styles.container_}>
                    <TouchableOpacity onPress={handleConnectionRestored} style={styles.button}>
                        <Text style={styles.buttonText}>Try Again</Text>
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