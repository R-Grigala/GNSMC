import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState }  from 'react';
import EqList from '../components/eqList/EqList';
import EventData from '../data/EqData';

const HomeScreen = () => {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    console.log('refreshing Data ...')
    setRefresh(prevState => !prevState)
  }

  useEffect(()=> {
    EventData()
    .then(responseData => {
      setData(responseData)
    })
    .catch(error => {
      console.error(error);
    });
  },[refresh])



  return (
    <View style={{flex:1}}>
      <View style={styles.content}>
        <Text style={styles.header}>მიმდინარე სეისმურობა</Text>
      </View>
      <View style={{flex:20}}>
        <EqList data={data} onRefresh={handleRefresh}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  content: {
    flex:1, 
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
    fontWeight: 'bold'
  },
});

export default HomeScreen;