import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'
import NewsDetail from '../components/news/NewsDetail'

const NewsDetailScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <NewsDetail />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
  })

export default NewsDetailScreen