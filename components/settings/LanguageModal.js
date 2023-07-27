import { View, Text, Modal, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

const LanguageModal = ({langModalVisible, setLangModalVisible}) => {
    const [language, setLanguage] = useState([
        {name: 'English', selected: false},
        {name: 'ქართული', selected: true}
    ]);
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
                                {item.selected == true?(
                                    <Image 
                                        style={styles.icon}
                                        source={require('../../assets/icons/radio-button-on-outline.png')}
                                    />
                                ):(
                                    <Image 
                                        style={styles.icon}
                                        source={require('../../assets/icons/radio-button-off-outline.png')}
                                    />
                                )}

                                <Text style={{marginLeft: 20, fontSize: 18}}>{item.name}</Text>
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
        margin:0,
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
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
    },
    languageItem: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    }
})