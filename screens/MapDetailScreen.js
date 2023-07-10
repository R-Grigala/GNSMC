import { View, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import EqMapDetail from '../components/eqMap/EqMapDetail';
import EqDetail from '../components/eqDetail/EqDetail';
import EventDataAPI from '../data/EventDataAPI';

const MapDetailScreen = () => {

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
        <View style={styles.eq_screen}>
          <EqDetail />
        </View>
        <EqMapDetail data={data}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    eq_screen :{
      flex:1,
    }
  })

export default MapDetailScreen