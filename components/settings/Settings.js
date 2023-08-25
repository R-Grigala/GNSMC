import { StyleSheet, View, Text, TouchableOpacity, Switch, FlatList } from 'react-native';
import { Modal, Portal, PaperProvider } from 'react-native-paper';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import languagesList from './languagesList.json'
import i18next, { languageResources } from './i18next';
import { EventRegister } from 'react-native-event-listeners'



const SECTIONS = [
  {  
    header: 'About',
    items: [
      { id: 'about', icon: 'help-circle-outline', label: 'About Us', type: 'link' },
      { id: 'contact', icon: 'mail-outline', label: 'Contact Us', type: 'link' },
    ],
  },
];

const Settings = () => {
  const [visible, setVisible] = useState(false);
  const [darkmode, setDarkMode] = useState(false);
  const [notifi, setNotifi] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

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

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View style={styles.languagesList}>
            <FlatList
              data={Object.keys(languageResources)}
              renderItem={({item}) => (
                <TouchableOpacity 
                  style={styles.languageButton}
                  onPress={() => changeLng(item)}>
                  <Text style={styles.lngName}>
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
            <Text style={styles.sectionHeaderText}>Preferences</Text>
        </View>
      </View>

      {/* Language */}
      <View style={styles.rowContainer}>
        <View style={styles.lanRow}>
          <Ionicons
            name='globe'
            color='#000'
            size={28}
            style={{ marginRight: 12}}
          />
          <Text style={styles.rowLabel}>{t('language')}</Text>
        </View>
        <View style={styles.rowSpacer}/>
        <TouchableOpacity onPress={showModal}>
          <View style={{ justifyContent:'center'}}>
            <Text style={{ fontSize: 15, fontWeight:'400', color: '#000'}}>{t('change_language')}</Text>
          </View>
      </TouchableOpacity>
      </View>

      {/* Dark Mode */}
      <View style={styles.rowContainer}>
        <View style={styles.lanRow}>
          <Ionicons
            name='moon'
            color='#000'
            size={28}
            style={{ marginRight: 12}}
          />
          <Text style={styles.rowLabel}>{t('dark_mode')}</Text>
        </View>
        <View style={styles.rowSpacer}/>
        <Switch
          value={darkmode}
          onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit('ChangeTheme', value)
          }}
        />
      </View>

      {/* Notifications */}
      <View style={styles.rowContainer}>
        <View style={styles.lanRow}>
          <Ionicons
            name='notifications-outline'
            color='#000'
            size={28}
            style={{ marginRight: 12}}
          />
          <Text style={styles.rowLabel}>{t('notifications')}</Text>
          
        </View>
        <View style={styles.rowSpacer}/>
        <Switch
          value={notifi}
          onValueChange={(value) => setNotifi(value)}
        />
      </View>

      {/* About Header */}
      <View style={{paddingTop: 12, flexDirection: 'column'}}>
        <View style={{paddingHorizontal: 24, paddingVertical: 8}}>
            <Text style={styles.sectionHeaderText}>About</Text>
        </View>
      </View>

      {/* About Us*/}
      <View style={styles.rowContainer}>
        <View style={styles.lanRow}>
          <Ionicons
            name='help-circle-outline'
            color='#000'
            size={28}
            style={{ marginRight: 12}}
          />
          <Text style={styles.rowLabel}>{t('about_us')}</Text>
          
          
        </View>
        <View style={styles.rowSpacer}/>
        <View style={{marginLeft:'16%'}}>
          <Ionicons
            name='chevron-forward-outline'
            color='#555'
            size={25}
          />
        </View>
      </View>

      {/* Contact Us*/}
      <View style={styles.rowContainer}>
        <View style={styles.lanRow}>
          <Ionicons
            name='mail-outline'
            color='#000'
            size={28}
            style={{ marginRight: 12}}
          />
          <Text style={styles.rowLabel}>{t('contact_us')}</Text>
          
          
        </View>
        <View style={styles.rowSpacer}/>
        <View style={{marginLeft:'16%'}}>
          <Ionicons
            name='chevron-forward-outline'
            color='#555'
            size={25}
          />
        </View>
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  section: {
    paddingTop: 12,
  },
  languagesList: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  languageButton: {
    padding: 10,
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
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#fff',
  },
  row: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
  },
  rowContainer: {
    height: '8%',
    flexDirection: 'row',
    paddingLeft: '6%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: '5%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  lanRow: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '10%',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000'
  },
  rowSpacer: {
    flex: 1, 
  },
  rowValue: {
    fontSize: 18,
    color: '#616161',
    marginRight: 4,
  },
  lngName: {
    fontSize: 16,
    color: 'black',
  },
});

export default Settings;