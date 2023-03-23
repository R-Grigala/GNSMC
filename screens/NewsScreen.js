import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Article from '../components/news/Article'

const NewsScreen = () => {
  return (
    <ScrollView >
      <Article />
      <Article />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  
  container:{
      
  }
})

export default NewsScreen;