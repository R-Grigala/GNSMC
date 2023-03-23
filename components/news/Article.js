import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native';

const Article = (props) => {

  return (

    <SafeAreaView style={styles.container}>

        {/* image */}
        <Image source={require("../../assets/images/admin-ajax.jpeg")} style={styles.image} />

        <View style={{padding: 20}}>

        {/* title */}
        <Text style={styles.title}>ვაშლიჯვრის მიმდებარე ტერიტორია</Text>

        {/* description */}
        <Text style={styles.description}>2023 წლის 27 თებერვალს, ილიას სახელმწიფო უნივერსიტეტის დედამიწის შემსწავლელ მეცნიერებათა ინსტიტუტსა და სეისმური მონიტორინგის ეროვნულ ცენტრს ტიციან ტაბიძის შესახვევის # 24-24ა მაცხოვრებლებმა აცნობეს, რომ მათ სახლებთან მეწყერი ჩამოწვა</Text>

        <View style={styles.data}>
            <View style={styles.date}>
            <Text style={styles.text}>2023-03-17 13:11</Text>
            </View>
        </View>

        {/* source */}
        <View style={{marginTop: 10}}>
            <Text>source: <Text style={styles.source}>Programmingknowledge</Text></Text>
        </View>

        </View>

    </SafeAreaView>

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
      borderTopRightRadius: 40
    },
    title:{
      fontSize: 18,
      fontWeight: '600',
      marginTop: 10
    },
    description:{
      fontSize: 16,
      fontWeight: '400',
      marginTop: 10
    },
    data:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      alignItems: 'center'
    },
    date:{
      flex:1,
      alignContent: 'flex-end'
    },
    text:{
      textAlign: 'right',
      color: '#e63946',
      fontWeight: 'bold',
      fontSize: 15
    },
    source:{
      color: '#FF0000',
      fontWeight: 'bold',
      fontSize: 18
    }
})

export default Article;