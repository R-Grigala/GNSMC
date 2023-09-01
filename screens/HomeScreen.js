import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import React, { useContext, useEffect, useState }  from 'react';
import EqList from '../components/eqList/EqList';
import EventDataAPI from '../data/EventDataAPI';
import { useTranslation } from 'react-i18next';
import themeContext from '../theme/themeContext';


const HomeScreen = () => {
  const {t} = useTranslation();
  const theme = useContext(themeContext);

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);

  // Function to fetch event data from the API
  const fetchEventData = async () => {
    try {
      const responseData = await EventDataAPI();
      setData(responseData);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };
  
  // Function to handle the refresh action
  const handleRefresh = () => {
    console.log('Refreshing EqData...');
    setRefresh(prevState => !prevState);
  }

  useEffect(() => {
    // Fetch the event data when the component mounts or when the 'refresh' state changes
    setRefreshing(true);
    fetchEventData();
  }, [refresh]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={theme.barStyle} />
      <View style={[styles.content,  { backgroundColor: theme.headerBackCol}]}>
        <Text style={[styles.header, {color:theme.headerTextCol}]}>{t('lastest_earthquakes')}</Text>
      </View>
      <View style={styles.listContainer}>
        {/* Pass the event data and refresh function to the EqList component */}
        <EqList data={data} onRefresh={handleRefresh} />
      </View>
      {isRefreshing && (
        <View style={styles.refreshingContainer}>
          <Text style={styles.refreshingText}>Refreshing...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
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
  listContainer: {
    flex: 20,
  },
  refreshingContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
    padding: 10,
  },
  refreshingText: {
    fontSize: 18,
    color: 'white',
  },
});

export default HomeScreen;
