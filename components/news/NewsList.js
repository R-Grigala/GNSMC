import { FlatList, RefreshControl } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Article from './Article';

function NewsList({ data, onRefresh }){
    const [values, setValues] = useState([]);

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

    const renderItem = ({ item }) => (
        <Article
            newsId={item.id}
            title={item.title}
            description={item.description}
            urlImage={item.imageURL}
            uploadTime={item.created_at}
        />
    )
    
    return (
        <FlatList
            data={values} // Set the data for the FlatList
            renderItem={renderItem}
            keyExtractor={(item) => item.title} //უნდა გააკეთდეს newsId-ით რომ სათაურის დამთხვევა არ მოხდეს შემდგომი error-ის გამოსარიცხად
            refreshControl={
                <RefreshControl refreshing={false} onRefresh={onRefresh} /> // Add the RefreshControl component to enable pull-to-refresh
            }
        />
    )
}

export default NewsList;