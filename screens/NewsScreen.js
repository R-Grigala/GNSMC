import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import NewsList from '../components/news/NewsList';
import NewsDataAPI from '../data/NewsDataAPI';
import { Searchbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import themeContext from '../theme/themeContext';
import NoConnection from '../components/settings/NoConnection';
import Refreshing from '../components/settings/Refreshing';


const NewsScreen = () => {
  const {t} = useTranslation();
  const theme = useContext(themeContext);
  const [refresh, setRefresh] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false); // State variable to track the refreshing state

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

    // Function to fetch event data from the API
    const fetchNewsData = async () => {
      try {
        const responseData = await NewsDataAPI();
        setFilteredDataSource(responseData);
        setMasterDataSource(responseData);

      } catch (error) {
        console.error(error);
      } finally {
        setRefreshing(false);
      }
    };

  const handleRefresh = () => {
    // Function to handle the refresh action
    console.log('refreshing NewsData ...');
    setRefresh(prevState => !prevState); // Set refreshing state to true
  };

  useEffect(() => {
    setRefreshing(true);
    fetchNewsData(); // Fetch the data when the component mounts
  }, [refresh]);

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
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar barStyle={theme.barStyle} />
          <View style={[styles.headerContent,  { backgroundColor: theme.headerBackCol}]}>
            <Text style={[styles.header, {color:theme.headerTextCol}]}>{t('lastestNews')}</Text>
          </View>
          {/* You can display a component for when data is empty */}
          <NoConnection onRefresh={handleRefresh} pageName={'NewsScreen'}/> 
        </View>
        {isRefreshing && (
          <Refreshing />
        )}
      </SafeAreaView>
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
      {isRefreshing && (
        <Refreshing />
      )}
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
    borderTopWidth:0.5,
    borderBottomWidth: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomColor:'black'
  },
  header: {
    flex: 1,
    color: 'rgba(122, 0, 2, 1)',
    marginLeft: 20,
    marginTop: 8,
    fontWeight: 'bold',
  }
});

export default NewsScreen;
