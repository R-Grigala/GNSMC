import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import NewsList from '../components/news/NewsList';
import NewsDataAPI from '../data/NewsDataAPI';
// import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import themeContext from '../theme/themeContext';




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

  const handleButtonPress = () => {
    // Your button press logic here
    console.log('Button pressed!');
  };

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
    <View style={{backgroundColor:'#fff', flex:1}}>
        {/* You can display a message or component here for when data is empty */}

        <View style={{flex:3}}>
            <Image
                source={require('../assets/logos/errorBackground.jpg')}
                style={{width:'100%', height:'80%'}}
            />
        </View>
        <View style={{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
            <Text style={{}}>No internet connection</Text>
            <Text>Check your connection, then refresh the page</Text>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                    <Text style={styles.buttonText}>Click Me</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* SearchBar component */}
        {/* <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={fetchNewsData}/> */}

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
  container_: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default NewsScreen;
