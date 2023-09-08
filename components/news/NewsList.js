import { FlatList, RefreshControl } from 'react-native';
import React from 'react';
import Article from './Article';

function NewsList({ data, onRefresh }){

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
            data={data} // Set the data for the FlatList
            renderItem={renderItem}
            keyExtractor={(item) => item.id} //უნდა გააკეთდეს newsId-ით რომ სათაურის დამთხვევა არ მოხდეს შემდგომი error-ის გამოსარიცხად
            refreshControl={
                <RefreshControl refreshing={false} onRefresh={onRefresh} /> // Add the RefreshControl component to enable pull-to-refresh
            }
        />
    )
}

export default NewsList;