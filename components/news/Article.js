import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { formatData } from '../../utils/formatData';
import { useNavigation } from '@react-navigation/native';


const Article = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("NewsDetailScreen", {urlImage: props.urlImage, title: props.title, description: props.description, uploadTime: props.uploadTime })}>
        {/* Image */}
        <Image source={{
            uri: props.urlImage
          }} 
          style={styles.image}
        />
        <View style={{padding: 15}}>
          {/* Title */}
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
          {/* Description */}
          <Text style={styles.description} numberOfLines={3}>{props.description}</Text>
          <View style={styles.data}>
              <View style={styles.date}>
              {/* Formatted Upload Time */}
              <Text style={styles.text}>{formatData(props.uploadTime)}</Text>
              </View>
          </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
      width: '90%',
      alignSelf: "center",
      borderRadius: 40,
      shadowOpacity: 0.5,
      shadowColor: '#000',
      elevation:10,
      marginTop:10,
      marginBottom:10,
      shadowOffset: {
        height: 5,
        width: 5
      },
      backgroundColor: '#fff'
  
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
      marginTop: 10,
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
      color: '#e63946',
      fontWeight: 'bold',
      fontSize: 15,
    },
})

export default Article;