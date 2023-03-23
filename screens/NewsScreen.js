import { SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Article from '../components/news/Article'
import { newsData } from '../data/newsData'

const NewsScreen = () => {
  return (
    <SafeAreaView >
      <FlatList 
        data={newsData}
        renderItem = {({item}) => 
          <Article
            title={item.title}
            description={item.description}
            urlImage={item.urlImage}
            uploadTime={item.uploadTime}
          />}
          keyExtractor = {(item) => item.title}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  container:{
      
  }
})

export default NewsScreen;