import { StyleSheet, SafeAreaView, Dimensions, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import EqMap from '../components/eqMap/EqMap';
import EventDataAPI from '../data/EventDataAPI';
import EqMapLegend from '../components/eqMap/EqMapLegend';

const MapScreen = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await EventDataAPI()
      .then(responseData => {
        setData(responseData);
        // console.log("Call EventDataAPI");
      })
      .catch(error => {
        console.error(error);
      });
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <EqMap data={data}/>
      <View style={styles.lg_screen}>
        <EqMapLegend />
      </View>
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

export default MapScreen