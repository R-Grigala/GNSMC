import { FlatList, RefreshControl } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import EqItem from './EqItem';
import { formatData } from '../../utils/formatData';

function EqList({ data, onRefresh }) {
    const [values, setValues] = useState([]);
    // Sort the data array by origin_time in descending order
    const valuesCallback = useCallback(() => {
        if (data && data.length > 0) {
            const sortedData = [...data].sort(
              (a, b) => new Date(b.origin_time) - new Date(a.origin_time)
            );
            setValues(sortedData);
        }
    }, [data, setValues]);

    useEffect(() => {
        valuesCallback();
    }, [valuesCallback]);

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

    return (
        // FlatList component to render the list of earthquake items
        <FlatList
            data={values} // Data array containing the earthquake items
            keyExtractor={item => item.id} // Function to extract unique keys for each item
            renderItem={renderItem} // Function to render each item
            refreshControl={
                <RefreshControl refreshing={false} onRefresh={onRefresh} /> // RefreshControl component to handle refreshing the list
            }
        />
    );
}

export default EqList;
