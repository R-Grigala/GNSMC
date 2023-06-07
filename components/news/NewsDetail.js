import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const NewsDetail = () => {
  const route = useRoute()
  return (
    <View>
      <Text>NewsDetail</Text>
    </View>
  )
}

export default NewsDetail