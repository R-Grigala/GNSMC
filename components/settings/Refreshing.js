import { View, Text, StyleSheet, Image } from 'react-native';
import themeContext from '../../theme/themeContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';


const Refreshing = () => {
    const {t} = useTranslation();
    const theme = useContext(themeContext);

    return (
        <View style={[styles.refreshingContainer,{ backgroundColor: theme.refreshBackCol}]}>
            <Image 
                source={require('../../assets/icons/reloading.gif')}
            />
            <Text style={[styles.refreshingText, {color: theme.refreshTextCol}]}>Refreshing...</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    refreshingContainer: {
        position: 'absolute',
        top:0,
        bottom:0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    refreshingText: {
        fontSize: 18
    },
})

export default Refreshing;