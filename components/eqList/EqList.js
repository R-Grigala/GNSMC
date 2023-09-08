import { FlatList, RefreshControl, StyleSheet,TouchableOpacity, Image, View, Text } from 'react-native';
import React from 'react';
import EqItem from './EqItem';
import { formatData } from '../../utils/formatData';

function EqList({ data, onRefresh }) {

    // Define the renderItem function to render each item in the FlatList
    const renderItem = ({ item }) => (
        <EqItem
            eqId={item.id}
            origin_time={formatData(item.origin_time)}
            ml={item.ml}
            depth={item.depth}
            latitude={item.latitude}
            longitude={item.longitude}
            description={item.description}
        />
    );

    const handleButtonPress = () => {
        // Your button press logic here
        console.log('Button pressed!');
      };


    // Check if data is empty or null
    if (!data || data.length === 0) {
        return (
            <View style={{backgroundColor:'#F2F2F2', flex:1}}>
                {/* You can display a message or component here for when data is empty */}
    
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image
                        source={require('../../assets/logos/backgroundError.jpg')}
                        style={{width:'70%', height:'80%'}}
                    />
                </View>
                <View style={{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
                    <Text style={{}}>No internet connection</Text>
                    <Text>Check your connection, then refresh the page</Text>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                            <Text style={styles.buttonText}>Click Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            );
    }


    return (
        // FlatList component to render the list of earthquake items
        <FlatList
            data={data} // Data array containing the earthquake items
            keyExtractor={item => item.id} // Function to extract unique keys for each item
            renderItem={renderItem} // Function to render each item
            refreshControl={
                <RefreshControl refreshing={false} onRefresh={onRefresh} /> // RefreshControl component to handle refreshing the list
            }
        />
    );
}

const styles = StyleSheet.create({
    container: {
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

export default EqList;
