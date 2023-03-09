import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from './navigation/tabs/MyTabs';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar style="black" />
    </NavigationContainer>
  );
}
