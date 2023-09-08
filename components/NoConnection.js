import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState }  from 'react';
import NetInfo from '@react-native-community/netinfo';


const NoConnection = ({onRefresh}) => {
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
        <View style={{backgroundColor:'#F2F2F2', flex:20}}>
            {/* #acacac, #F2F2F2*/}
            {/* You can display a message or component here for when data is empty */}

            <View style={{flex:10, justifyContent:'center', alignItems:'center'}}>
                <Image
                    source={require('../assets/logos/backgroundError.jpg')}
                    style={{width:'70%', height:'80%'}}
                />
            </View>
            <View style={{flex:10, justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{}}>No internet connection</Text>
                <Text>Check your connection, then refresh the page</Text>
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