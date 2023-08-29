import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getColor } from '../../utils/utils'; // Importing the getColor function from utils.js
import { useTranslation } from 'react-i18next';
import themeContext from '../../theme/themeContext';

const EqItem = ({ eqId, origin_time, ml, latitude, longitude, depth, description }) => {

  const navigation = useNavigation();
  const {t} = useTranslation();
  const theme = useContext(themeContext);

  const color = getColor(ml); // Calling the getColor function and passing the ml value

  return (
    <TouchableOpacity style={[styles.card, {backgroundColor:theme.background}]} onPress={() => navigation.navigate("EventDetailScreen", { eqId, origin_time, ml, latitude, longitude, depth, description })}>
      <View style={{ flexDirection: 'column', width: '100%', height: 75 }}>
        <View style={[styles.tworow, {flexDirection: 'row'}]}>
          <View style={{ flex: 1.3, flexDirection: 'column' }}>
            {/* Origin Time */}
            <View style={styles.content}>
              <View style={styles.row}>
                <Text style={styles.headertext}>დრო(UTC):</Text>
              </View>
              <View style={styles.tworow}>
                <Text style={[styles.bodyText, {color:theme.color}]}>{origin_time}</Text>
              </View>
            </View>
            {/* Latitude and Longitude */}
            <View style={styles.content}>
              <View style={styles.row}>
                <Text style={styles.headertext}>გან/გრძ(°C):</Text>
              </View>
              <View style={styles.tworow}>
                <Text style={[styles.bodyText, {color:theme.color}]}>{latitude} / {longitude}</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            {/* Magnitude */}
            <View style={styles.row}>
              <Text style={styles.headertext}>მაგნიტუდა(ML):</Text>
            </View>
            <View style={{ flex: 1.9 }}>
              <Text style={[styles.mlContent, { color: color }]}>{ml}</Text>
            </View>
          </View>
        </View>
        <View style={[ styles.row, {flexDirection: 'row', alignContent: 'center' }]}>
          {/* Description */}
          <View style={[styles.tworow, {flexDirection: 'row'}]}>
            <View style={styles.row}>
              <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#7d7d7d' }}>რეგიონი :</Text>
            </View>
            <View style={{ flex: 4, alignItems: 'center' }}>
              <Text style={[{ fontSize: 8, fontWeight: 'bold' }, {color:theme.color}]}>{description}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1.2,
    borderColor: 'black',
    padding: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5
  },
  row: { 
    flex: 1, 
    alignItems: 'center' 
  },
  tworow: {
    flex: 2, 
    alignItems: 'center' 
  },
  headertext:{ 
    fontSize: 9, 
    fontWeight: 'bold', 
    color: '#7d7d7d' 
  },
  bodyText:{ 
    fontSize: 13, 
    fontWeight: 'bold' 
  },
  mlContent: {
    fontSize: 28,
    fontWeight: 'bold',
  }
})

export default EqItem;
