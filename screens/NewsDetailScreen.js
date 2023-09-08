import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import NewsDetail from '../components/news/NewsDetail';
import { useTranslation } from 'react-i18next';
import themeContext from '../theme/themeContext';

const NewsDetailScreen = () => {
  const {t} = useTranslation();
  const theme = useContext(themeContext);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.content, {backgroundColor:theme.headerBackCol}]}>
        <Text style={[styles.header, {color:theme.headerTextCol}]}>{t('news')}</Text>
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
    },
    header: {
      flex: 1,
      marginLeft: 20,
      marginTop: 8,
      fontWeight: 'bold',
    },
    newsContainer: {
      flex: 20,
    },
  })

export default NewsDetailScreen