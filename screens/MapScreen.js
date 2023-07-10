import { StyleSheet, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react';
import EqMap from '../components/eqMap/EqMap';
import EventDataAPI from '../data/EventDataAPI';

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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  }
})

export default MapScreen