import { View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import EqEventMap from '../components/eqMap/EqEventMap';
import EqDetail from '../components/eqDetail/EqDetail';
import EventData from '../data/EqData'


const EventDetailScreen = () => {

  const [data, setData] = useState([]);

  useEffect(()=> {
    EventData()
    .then(responseData => {
      setData(responseData)
      console.log("EventDetailScreen")
    })
    .catch(error => {
      console.error(error);
    });
  },[])


  return (
    <View style={styles.screen}>
        <View style={styles.eq_screen}>
            <EqDetail/>
        </View>
        <EqEventMap data={data} />
    </View>
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

export default EventDetailScreen