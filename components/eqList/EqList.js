import { FlatList, RefreshControl, StyleSheet,TouchableOpacity, Image, View, Text } from 'react-native';
import React from 'react';
import EqItem from './EqItem';
import { formatData } from '../../utils/formatData';
import NoConnection from '../NoConnection';

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

    // Check if data is empty or null
    if (!data || data.length === 0) {
        return (
            <View style={styles.container}>
                {/* You can display a component for when data is empty */}
                <NoConnection />
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
      flex: 1
    }
  });

export default EqList;
