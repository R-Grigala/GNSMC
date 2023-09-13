import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { formatNewsData } from '../../utils/formatData';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import themeContext from '../../theme/themeContext';


const Article = (props) => {
  const {t} = useTranslation();
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor:theme.background}]} onPress={() => navigation.navigate("NewsDetailScreen", {urlImage: props.urlImage, title: props.title, description: props.description, uploadTime: props.uploadTime })}>
        {/* Image */}
        {/* <Image source={{
            uri: props.urlImage
          }} 
          style={styles.image}
        /> */}
        <View style={{padding: 15}}>
          {/* Title */}
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={[styles.title, {color:theme.color}]} numberOfLines={2}>{props.title}</Text>
          </View>
          {/* Description */}
          <Text style={[styles.description, {color:theme.color}]} numberOfLines={7}>{props.description}</Text>
          <View style={styles.data}>
              <View style={styles.date}>
              {/* Formatted Upload Time */}
              <Text style={[styles.text, {color:theme.headerTextCol}]}>{formatNewsData(props.uploadTime)}</Text>
              </View>
          </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
      width: '95%',
      alignSelf: "center",
      borderRadius: 20,
      shadowOpacity: 0.5,
      shadowColor: '#000',
      elevation:10,
      marginTop:10,
      marginBottom:10,
      shadowOffset: {
        height: 5,
        width: 5
      },
    },
    image:{
      height: 200,
      width: '100%',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    title:{
      fontSize: 18,
      fontWeight: '600',
      marginTop: 0,
      
    },
    description:{
      fontSize: 16,
      fontWeight: '400',
      margin: 10,
    },
    data:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      alignItems: 'center',
    },
    date:{
      flex:1,
      alignItems: 'flex-end',
    },
    text:{
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: 15,
    },
})

export default Article;