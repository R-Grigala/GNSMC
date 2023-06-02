import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect, useState }  from 'react';
import EqList from '../components/eqList/EqList';
import EventDataAPI from '../data/EventDataAPI';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Function to handle the refresh action
  const handleRefresh = () => {
    console.log('Refreshing EqData...');
    setRefresh(prevState => !prevState);
  }

  useEffect(() => {
    // Fetch the event data when the component mounts or when the 'refresh' state changes
    fetchEventData();
  }, [refresh]);

  // Function to fetch event data from the API
  const fetchEventData = () => {
    EventDataAPI()
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>მიმდინარე სეისმურობა</Text>
      </View>
      <View style={styles.listContainer}>
        {/* Pass the event data and refresh function to the EqList component */}
        <EqList data={data} onRefresh={handleRefresh} />
      </View>
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
});

export default HomeScreen;
