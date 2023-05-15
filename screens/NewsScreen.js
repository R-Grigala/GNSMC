import { SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react';
import Article from '../components/news/Article'
import NewsDataAPI from '../data/NewsDataAPI'

const NewsScreen = () => {

  const [data, setData] = useState([]);

  useEffect(()=> {
    NewsDataAPI()
    .then(responseData => {
      setData(responseData);
    })
    .catch(error => {
      console.error(error);
    });
  },[])

  return (
    <SafeAreaView >
      <FlatList 
        data={data}
        renderItem = {({item}) => 
          <Article
            newsId={item.id}
            title={item.title}
            description={item.description}
            urlImage={item.imageURL}
            uploadTime={item.created_at}
          />}
          keyExtractor = {(item) => item.title} //უნდა გააკეთდეს newsId-ით რომ სათაურის დამთხვევა არ მოხდეს შემდგომი error-ის გამოსარიცხად 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  container:{
      
  }
})

export default NewsScreen;