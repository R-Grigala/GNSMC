import { View, FlatList, RefreshControl } from 'react-native';
import React from 'react';
// import { EQ_DATA } from '../../data/EqData';
import EqItem from './EqItem';

function EqList({data, onRefresh}){

    const renderItem = ({item}) => {
        return <EqItem eqId={item.id} origin_time={item.origin_time} ml={item.ml} depth={item.depth} latitude={item.latitude} longitude={item.longitude} description={item.description}/>
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