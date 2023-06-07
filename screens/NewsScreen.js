import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import NewsList from '../components/news/NewsList';
import NewsDataAPI from '../data/NewsDataAPI';
import SearchBar from '../components/news/SearchBar';

const NewsScreen = () => {
  const [data, setData] = useState([]); // State variable to hold the data
  const [refreshing, setRefreshing] = useState(false); // State variable to track the refreshing state
  const [searchText, setSearchText] = useState("");

  const fetchNewsData = () => {
    // Function to fetch data from the API
    NewsDataAPI()
      .then(responseData => {
        // Filter the data based on the searchText
        const filteredData = responseData.filter(item =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setData(filteredData); // Update the state with the filtered data
      })
      .catch(error => {
        console.error(error);
      })
  };

  const handleRefresh = () => {
    // Function to handle the refresh action
    console.log('refreshing NewsData ...');
    setRefreshing(prevState => !prevState); // Set refreshing state to true
    fetchNewsData(); // Fetch the data
  };

  useEffect(() => {
    fetchNewsData(); // Fetch the data when the component mounts
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={fetchNewsData}/>
      </View>
      <View style={styles.listContainer}>
        <NewsList data={data} onRefresh={handleRefresh} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 2,
  },
  header: {
    flex: 1,
    color: 'rgba(122, 0, 2, 1)',
    marginLeft: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 20,
  },
});

export default NewsScreen;
