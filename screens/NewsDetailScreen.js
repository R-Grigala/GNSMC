import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NewsDetail from '../components/news/NewsDetail'

const NewsDetailScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.header}>მიმდინარე სეისმურობა</Text>
      </View>
      <View style={styles.newsContainer} >
        <NewsDetail />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    content: {
      flex: 1,
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
      fontWeight: 'bold',
    },
    newsContainer: {
      flex: 20,
    },
  })

export default NewsDetailScreen