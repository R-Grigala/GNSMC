import { FlatList, RefreshControl } from 'react-native';
import React, {useState} from 'react';
import { EQ_DATA } from '../../data/EqData';
import EqItem from './EqItem';

function EqList (){

    const [refreshing, setRefreshing] = useState(false);

    const renderItem = ({item}) => {
        return <EqItem eqId={item.id} origin_time={item.origin_time} ml={item.ml} depth={item.depth} description={item.description}/>
    }

    const onRefresh = () => {
        setRefreshing(true);
        // Perform your refresh logic here...
        setTimeout(() => {
          setRefreshing(false);
        }, 1000);
    };

    return (
        <FlatList 
            data={EQ_DATA}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            refreshControl = {
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    title={refreshing ? 'Refreshing...' : 'Pull to Refresh'}
                />
            }
        />
    )
}

export default EqList;