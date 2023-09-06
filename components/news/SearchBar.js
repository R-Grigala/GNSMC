import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
        <TextInput
            placeholder='Search'
            style={styles.input}
            value={props.searchText}
            onChangeText={(text)=>props.setSearchText(text)}
            onSubmitEditing={props.onSubmit}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin: 0
    },
    input:{
        backgroundColor:"#fff",
        padding: 10,
        borderRadius: 20,
        color: "#000",
        borderWidth: 1
    }
})

export default SearchBar;