import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import NewsList from '../components/news/NewsList';
import NewsDataAPI from '../data/NewsDataAPI';
// import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import themeContext from '../theme/themeContext';
import NoConnection from '../components/NoConnection';




const NewsScreen = () => {
  const {t} = useTranslation();
  const theme = useContext(themeContext);
  const [refreshing, setRefreshing] = useState(false); // State variable to track the refreshing state

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const fetchNewsData = () => {
    // Function to fetch data from the API
    NewsDataAPI()
      .then(responseData => {
        setFilteredDataSource(responseData);
        setMasterDataSource(responseData);
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

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  // Check if data is empty or null
  if (!filteredDataSource || filteredDataSource.length === 0) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={theme.barStyle} />
        <View style={[styles.headerContent,  { backgroundColor: theme.headerBackCol}]}>
          <Text style={[styles.header, {color:theme.headerTextCol}]}>{t('news')}</Text>
        </View>
        {/* You can display a component for when data is empty */}
        <NoConnection onRefresh={handleRefresh}/> 
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Searchbar
          icon={require('../assets/icons/search.png')}
          iconColor={theme.imageCol}
          onChangeText={(text) => searchFilterFunction(text)}
          onClearIconPress={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
          style={{backgroundColor:theme.background}}
          inputStyle={{color:theme.color}}
          placeholderTextColor={theme.color}
        />
      </View>
      <View style={styles.listContainer}>
        {/* NewsList component */}
        <NewsList data={filteredDataSource} onRefresh={handleRefresh} />
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
    paddingTop:5,
  },
  listContainer: {
    flex: 18,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  header: {
    flex: 1,
    color: 'rgba(122, 0, 2, 1)',
    marginLeft: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default NewsScreen;
