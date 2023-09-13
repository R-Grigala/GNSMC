import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React, {useState, useContext, useCallback} from 'react';
import EqMap from '../components/eqMap/EqMap';
import EventDataAPI from '../data/EventDataAPI';
import EqMapLegend from '../components/eqMap/EqMapLegend';
import NoConnection from '../components/settings/NoConnection';
import themeContext from '../theme/themeContext';
import { useTranslation } from 'react-i18next';
import Refreshing from '../components/settings/Refreshing';
import { useFocusEffect } from '@react-navigation/native';


const MapScreen = () => {

  const {t} = useTranslation();
  const theme = useContext(themeContext);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);

  // Function to handle the refresh action
  const handleRefresh = () => {
    console.log('Refreshing EqData...');
    setRefresh(prevState => !prevState);
  }

  useFocusEffect(
    useCallback(() => {
      // Fetch the event data when the component mounts or when the 'refresh' state changes
      fetchEventData();
      setRefreshing(true);
    }, [refresh])
  );

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

  // Check if data is empty or null
  if (!data || data.length === 0) {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.screen}>
          <StatusBar barStyle={theme.barStyle} />
          <View style={[styles.headerContent,  { backgroundColor: theme.headerBackCol}]}>
            <Text style={[styles.header, {color:theme.headerTextCol}]}>{t('map')}</Text>
          </View>
          {/* You can display a component for when data is empty */}
          <NoConnection onRefresh={handleRefresh}/>
        </View>
        {isRefreshing && (
          <Refreshing />
        )}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.lg_screen}>
        <EqMapLegend/>
      </View>
      <EqMap data={data}/>
      {/* Display "Refreshing" message at the center of the map */}
      {isRefreshing && (
        <Refreshing />
      )}
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
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopWidth:0.5,
    borderBottomWidth: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomColor:'black'
  },
  header: {
    flex: 1,
    color: 'rgba(122, 0, 2, 1)',
    marginLeft: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },
})

export default MapScreen;