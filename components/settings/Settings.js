import { StyleSheet, View, Text, TouchableOpacity, Switch, FlatList } from 'react-native';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import languagesList from './languagesList.json'
import { languageResources } from './i18next';

const SECTIONS = [
  {
    header: 'Preferences',
    items: [
      { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
      { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
      { id: 'notifications', icon: 'notifications-outline', label: 'Notifications', type: 'toggle' },
    ],
  },
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

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'red',};

  const {t} = useTranslation();
  const [form, setForm] = useState({
    darkMode: false,
    notifications: true,
  })
  return (
    <View>
      {SECTIONS.map(({ header, items }) => (
        <View style={styles.section} key={header}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{header}</Text>
          </View>

          <View style={styles.sectionBody}>
            {items.map(({ label, id, type, icon }, index) => (
              <View 
                style={[
                  styles.rowWrapper,
                  index === 0 && { borderTopWindth: 0},
                ]}
                key={id}>
                <TouchableOpacity
                  onPress={() => {
                    setVisible(true)
                  }}>
                  <View style={styles.row}>
                    <Ionicons
                      name={icon}
                      color='#000'
                      size={28}
                      style={{ marginRight: 12}}
                    />
                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={styles.rowSpacer}/>

                    {type === 'select' && (
                      <PaperProvider>
                        <Portal>
                          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                            <View style={styles.languagesList}>
                              <Text>Example Modal.  Click outside this area to dismiss.</Text>
                            </View>
                          </Modal>
                        </Portal>
                        <Button style={{marginTop: 30, color:'red'}} onPress={showModal}>
                          Show
                        </Button>
                      </PaperProvider>
                      // <Modal visible={visible} onRequestClose={() => setVisible(false)}>
                      //   <View style={styles.languagesList}>
                      //     <FlatList 
                      //       data={Object.keys(languageResources)}
                      //       renderItem={({item}) => (
                      //         <TouchableOpacity style={styles.languageButton}>
                      //           <Text style={styles.lngName}>
                      //             {languagesList[item].nativeName}
                      //           </Text>
                      //         </TouchableOpacity>
                      //       )}
                      //     />
                      //   </View>
                      // </Modal>
                    )}

                    {type === 'toggle' && (
                      <Switch
                        value={form[id]}
                        onValueChange={value =>
                          setForm({...form, [id]: value})
                        }
                      />
                    )}

                    {['select', 'link'].includes(type) && (
                      <Ionicons
                        name='chevron-forward-outline'
                        color='#555'
                        size={25}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
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
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
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
  }
});

export default Settings;