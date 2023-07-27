import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import LanguageModal from './LanguageModal';

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

  const [langModalVisible, setLangModalVisible] = useState(false);

  const [form, setForm] = useState({
    language: 'ქართული',
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
                    // handle onPress
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
                      <View>
                        <TouchableOpacity 
                          style={styles.selectLanguageBtn}
                          onPress={() => {
                            setLangModalVisible(!langModalVisible)
                        }}>
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        </TouchableOpacity>
                        <LanguageModal 
                          langModalVisible={langModalVisible}
                          setLangModalVisible={setLangModalVisible}
                        />
                      </View>
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