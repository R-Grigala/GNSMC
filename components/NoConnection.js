import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const NoConnection = ({onRefresh}) => {
    return (
        <View style={{backgroundColor:'#F2F2F2', flex:20}}>
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
                    <TouchableOpacity onPress={onRefresh} style={styles.button}>
                        <Text style={styles.buttonText}>Click Me</Text>
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