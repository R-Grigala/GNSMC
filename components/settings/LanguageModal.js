import { View, Text, Modal, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

const LanguageModal = ({langModalVisible, setLangModalVisible, onSelectLang}) => {
    const [selectedLang, setSelectedLang] = useState(0);
    const [language, setLanguage] = useState([
        {name: 'English', selected: false},
        {name: 'ქართული', selected: true}
    ]);
    const onSelect = (index) => {
        const temp=language;
        temp.map((item,ind) => {
            if(index==ind){
                if(item.selected == true){
                    item.selected = false
                }
                else{
                    item.selected = true;
                    setSelectedLang(index);
                }
            }else{
                item.selected = false;
            }
        });
        let temp2 =[]
        temp.map(item => {
            temp2.push(item);
        })
        setLanguage(temp2);
    }
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
                            <TouchableOpacity 
                                style={styles.languageItem}
                                onPress={() => {
                                    onSelect(index);
                                }}>
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
                <View style={styles.btns}>
                    <TouchableOpacity 
                        style={styles.btn1}
                        onPress={()=>{
                            setLangModalVisible(false)
                        }}>
                        <Text>Calcel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn2}
                        onPress={()=>{
                            setLangModalVisible(true);
                            onSelectLang(selectedLang);
                        }}>
                        <Text style={{color: '#fff'}}>Apply</Text>
                    </TouchableOpacity>
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
        height: height / 3,
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
    },
    btns: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    btn1: {
        width: '40%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn2: {
        width:'40%', 
        height: 50,
        borderWidth:0.5,
        borderRadius:10,
        backgroundColor: '#4B68E9',
        justifyContent: 'center',
        alignItems: 'center',
    }
})