import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import MyTabs from './navigation/tabs/MyTabs';
import { useEffect, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners'
import theme from './theme/theme';
import themeContext from './theme/themeContext';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) =>{
      setDarkMode(data)
      console.log(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <MyTabs />
        <StatusBar style="black" />
      </NavigationContainer>
    </themeContext.Provider>
  );
}
