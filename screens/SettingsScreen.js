import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Settings from '../components/settings/Settings';
import { useTranslation } from 'react-i18next';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';

const SettingsScreen = () => {
  const theme = useContext(themeContext);

  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) =>{
      setDarkMode(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={theme.barStyle}/>
        <View style={[styles.content,  { backgroundColor: theme.headerBackCol}]}>
          <Text style={[styles.header, {color:theme.headerTextCol}]}>{t('settings_update')}</Text>
        </View>
        <View style={styles.setContainer}>
          <Settings />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  header: {
    flex: 1,
    marginLeft: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },
  setContainer: {
    flex: 20,
  },
});

export default SettingsScreen;