import { FlatList, RefreshControl, View, Text } from 'react-native';
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
    // Check if data is empty or null
    if (!data || data.length === 0) {
        return (
        <View>
            {/* You can display a message or component here for when data is empty */}
            <Text>No earthquake data available.</Text>
        </View>
        );
    }
    
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