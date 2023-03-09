import { FlatList, RefreshControl } from 'react-native';
import React from 'react';
import { EQ_DATA } from '../../data/EqData';
import EventItem from './EqItem';

const EqList = () => {

    const renderItem = ({item}) => {
        return <EventItem id={item.id} origin_time={item.origin_time} ml={item.ml} depth={item.depth} description={item.description}/>
    }
    return (
        <FlatList 
            data={EQ_DATA}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            refreshControl = {
                <RefreshControl
                    refreshing={false}
                    onRefresh={() => console.log('refreshing...')}
                />
            }
        />
    )
}

export default EqList;