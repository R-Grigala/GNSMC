import { View, FlatList, RefreshControl } from 'react-native';
import React from 'react';
import EqItem from './EqItem';

function EqList({data, onRefresh}){

    const renderItem = ({item}) => {

        // Create a new Date object from the date string
        const dateObj = new Date(item.origin_time);

        // Extract the date components from the date object
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1; // Add 1 to account for zero-based indexing
        const date = dateObj.getDate();
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const seconds = dateObj.getSeconds();

        // Construct a new date string in the desired format
        const newDateString = `${date}/${month}/${year}  ${hours}:${minutes}:${seconds}`;

        return <EqItem eqId={item.id} origin_time={newDateString} ml={item.ml} depth={item.depth} latitude={item.latitude} longitude={item.longitude} description={item.description}/>
    }

    return (
        <View >
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                refreshControl = {
                    <RefreshControl
                        refreshing={false}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    )
}

export default EqList;