import { View, Text, Modal, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

const LanguageModal = ({langModalVisible, setLangModalVisible}) => {
    const [language, setLanguage] = useState([
        {name: 'English', selected: false},
        {name: 'ქართული', selected: true}
    ])
  return (
    <Modal
        animationType='slide'
        transparent={true}
        visible={langModalVisible}
        onRequestClose={() => {
            setLangModalVisible(!langModalVisible);
        }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.title}>Select</Text>
                <View style={{width: '100%'}}>
                    <FlatList data={language} renderItem={({item, index}) => {
                        return(
                            <TouchableOpacity style={styles.languageItem}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}/>
                </View>

            </View>
        </View>
    </Modal>
  )
}

export default LanguageModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        width: width - 20,
        height: height / 2,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    languageItem: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 5,
        marginTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})