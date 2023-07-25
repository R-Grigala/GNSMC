import { StyleSheet, SafeAreaView, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import EqMap from '../components/eqMap/EqMap';
import EventDataAPI from '../data/EventDataAPI';
import EqMapLegend from '../components/eqMap/EqMapLegend';

const MapScreen = () => {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Function to handle the refresh action
  const handleRefresh = () => {
    // setRefreshing(true);
    console.log('Refreshing EqData...');
    
    setRefresh(prevState => !prevState);
    
  }

  useEffect(() => {
    // Fetch the event data when the component mounts or when the 'refresh' state changes
    fetchEventData();
  }, [refresh]);

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

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.lg_screen}>
        <EqMapLegend onRefresh={handleRefresh}/>
      </View>
      <EqMap data={data} isRefreshing={refreshing}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  lg_screen: {
    flex: 0.08,
  },
})

export default MapScreen;