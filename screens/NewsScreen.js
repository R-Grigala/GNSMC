import { SafeAreaView, StyleSheet, FlatList, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import Article from '../components/news/Article';
import NewsDataAPI from '../data/NewsDataAPI';

const NewsScreen = () => {
  const [data, setData] = useState([]); // State variable to hold the data
  const [refreshing, setRefreshing] = useState(false); // State variable to track the refreshing state

  const fetchData = () => {
    // Function to fetch data from the API
    NewsDataAPI()
      .then(responseData => {
        setData(responseData); // Update the state with the fetched data
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setRefreshing(false); // Set refreshing state to false when the fetching is completed
      });
  };

  const handleRefresh = () => {
    // Function to handle the refresh action
    console.log('refreshing NewsData ...');
    setRefreshing(true); // Set refreshing state to true
    fetchData(); // Fetch the data
  };

  useEffect(() => {
    fetchData(); // Fetch the data when the component mounts
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data} // Set the data for the FlatList
        renderItem={({ item }) => (
          <Article
            newsId={item.id}
            title={item.title}
            description={item.description}
            urlImage={item.imageURL}
            uploadTime={item.created_at}
          />
        )}
        keyExtractor={(item) => item.title} //უნდა გააკეთდეს newsId-ით რომ სათაურის დამთხვევა არ მოხდეს შემდგომი error-ის გამოსარიცხად
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} /> // Add the RefreshControl component to enable pull-to-refresh
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {}, // Add any styles for the container if needed
});

export default NewsScreen;
