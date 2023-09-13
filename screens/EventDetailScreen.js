import { View, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import EqEventMap from '../components/eqDetail/EqEventMap';
import EqDetail from '../components/eqDetail/EqDetail';
import EventDataAPI from '../data/EventDataAPI';


const EventDetailScreen = () => {

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
          <EqDetail/>
        </View>
        <EqEventMap data={data}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      borderBottomWidth: 2,
      borderTopWidth:2,
      borderColor: 'rgba(0,0,0,1)',
    },
    eq_screen :{
      flex:3,
    }
  })

export default EventDetailScreen;