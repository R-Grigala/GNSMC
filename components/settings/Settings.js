import { StyleSheet, View, Text, TouchableOpacity, Switch, FlatList, Image, Linking } from 'react-native';
import { Modal, Portal, PaperProvider } from 'react-native-paper';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import languagesList from '../../languages/languagesList.json'
import i18next, { languageResources } from '../../languages/i18next';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../../theme/themeContext';

const Settings = () => {

  // Define the paths to the icon images
  const iconPaths = {
    globe: require('../../assets/icons/globe.png'),
    moon: require('../../assets/icons/moon.png'),
    notifications: require('../../assets/icons/notifications.png'),
    about: require('../../assets/icons/help-circle-outline.png'),
    mail: require('../../assets/icons/mail-outline.png'),
    chevron: require('../../assets/icons/chevron-forward-outline.png'),
  };

  const theme = useContext(themeContext);

  const [visible, setVisible] = useState(false);
  const [darkmode, setDarkMode] = useState(false);
  const [notifi, setNotifi] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const {t} = useTranslation();
  const notifiSwitch = () => {
    setNotifi(!notifi)
  }
  const toggleSwitch = () => {
    setDarkMode(!darkmode);
  }
  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  }

  const aboutUs = ()=> {
    Linking.openURL('https://ies.iliauni.edu.ge/?page_id=536')
  }

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={[styles.constainerStyle,{ backgroundColor: theme.background}]}>
          <View style={[styles.languagesList, { backgroundColor: theme.background}]}>
            <FlatList
              data={Object.keys(languageResources)}
              renderItem={({item}) => (
                <TouchableOpacity 
                  style={styles.languageButton}
                  onPress={() => changeLng(item)}>
                  <Text style={[styles.lngName, {color:theme.color}]}>
                    {languagesList[item].nativeName}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      </Portal>
      {/* Header */}
      <View style={{paddingTop: 12, flexDirection: 'column'}}>
        <View style={{paddingHorizontal: 24, paddingVertical: 8}}>
            <Text style={styles.sectionHeaderText}>{t('preference')}</Text>
        </View>
      </View>

      {/* Language */}
      <TouchableOpacity style={[styles.rowContainer,{backgroundColor: theme.background}]} onPress={showModal}>
        <View style={styles.row}>
          <Image
            style={{ width: 28, height: 28, marginRight: 12, tintColor: theme.imageCol}}
            source={iconPaths['globe']}
          />
          <Text style={[styles.rowLabel, {color:theme.color}]}>{t('language')}</Text>
        </View>
        <View style={styles.rowSpacer}/>
          <View style={{ justifyContent:'center'}}>
            <Text style={{ fontSize: 15, fontWeight:'400', color:theme.color}}>{t('change_language')}</Text>
          </View>
      </TouchableOpacity>

      {/* Dark Mode */}
      <View style={[styles.rowContainer, {backgroundColor: theme.background}]}>
        <View style={styles.row}>
          <Image
            style={{ width: 28, height: 28, marginRight: 12, tintColor: theme.imageCol}}
            source={iconPaths['moon']}
          />
          <Text style={[styles.rowLabel, {color:theme.color}]}>{t('dark_mode')}</Text>
        </View>
        <View style={styles.rowSpacer}/>
        <Switch
          trackColor={{false: '#a8a8a8', true: 'green'}}
          ios_backgroundColor="#a8a8a8"
          value={darkmode}
          onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit('ChangeTheme', value)
          }}
        />
      </View>

      {/* Notifications */}
      <View style={[styles.rowContainer,  {backgroundColor: theme.background}]}>
        <View style={styles.row}>
          <Image
            style={{ width: 28, height: 28, marginRight: 12, tintColor: theme.imageCol}}
            source={iconPaths['notifications']}
          />
          <Text style={[styles.rowLabel, {color:theme.color}]}>{t('notifications')}</Text>
          
        </View>
        <View style={styles.rowSpacer}/>
        <Switch
          trackColor={{false: '#a8a8a8', true: 'green'}}
          ios_backgroundColor="#a8a8a8"
          value={notifi}
          onValueChange={(value) => setNotifi(value)}
        />
      </View>

      {/* About Header */}
      <View style={{paddingTop: 12, flexDirection: 'column'}}>
        <View style={{paddingHorizontal: 24, paddingVertical: 8}}>
            <Text style={styles.sectionHeaderText}>{t('app')}</Text>
        </View>
      </View>

      {/* About Us*/}
      <TouchableOpacity style={[styles.rowContainer, {backgroundColor: theme.background}]} onPress={aboutUs}>
        <View style={styles.row}>
          <Image
            style={{ width: 30, height: 30, marginRight: 12, tintColor: theme.imageCol}}
            source={iconPaths['about']}
          />
          <Text style={[styles.rowLabel, {color:theme.color}]}>{t('about_us')}</Text>
          
          
        </View>
        <View style={styles.rowSpacer}/>
        <Image
            style={{ width: 25, height: 25, tintColor: theme.imageCol}}
            source={iconPaths['chevron']}
          />
      </TouchableOpacity>

      {/* Contact Us*/}
      <TouchableOpacity style={[styles.rowContainer, {backgroundColor: theme.background}]}>
        <View style={styles.row}>
          <Image
            style={{ width: 30, height: 30, marginRight: 12, tintColor: theme.imageCol}}
            source={iconPaths['mail']}
          />
          <Text style={[styles.rowLabel, {color:theme.color}]}>{t('contact_us')}</Text>
          
          
        </View>
        <View style={styles.rowSpacer}/>
        <Image
            style={{ width: 25, height: 25, tintColor: theme.imageCol}}
            source={iconPaths['chevron']}
          />
      </TouchableOpacity>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 12,
  },
  languagesList: {
    justifyContent: 'center',
    padding: 10,
  },
  languageButton: {
    padding: 20,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  row: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: '10%',
  },
  rowContainer: {
    height: '8%',
    flexDirection: 'row',
    paddingLeft: '6%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: '5%',
    borderTopWidth: 1,
    borderBottomWidth:1,
    borderColor: '#e3e3e3',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000'
  },
  rowSpacer: {
    flex: 1, 
  },
  lngName: {
    fontSize: 16,
  },
  constainerStyle : {
    padding: 20,
    height:'40%',
    width:'100%'
  }
});

export default Settings;