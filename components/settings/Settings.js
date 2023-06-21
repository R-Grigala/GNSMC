import { View, Text } from 'react-native';
import React from 'react';

const SECTIONS = [
  {
    header: 'Preferences',
    items: [
      { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
      { id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle' },
      { id: 'wife', icon: 'wife', label: 'use Wi-Fi', type: 'toggle' },
    ],
  },
  {  
    header: 'Help',
    items: [
      { id: 'bug', icon: 'flag', label: 'Report Bug', type: 'link' },
      { id: 'contact', icon: 'mail', label: 'Contact Us', type: 'link' },
    ],
  },
]

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings