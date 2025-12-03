import { StyleSheet } from 'react-native';
import { lightTheme } from './colors';

export const headerStyle = StyleSheet.create({
    head: {
        width: '100%',
        height: 150,
        backgroundColor: lightTheme.secondary, 
        shadowColor: lightTheme.textPrimary, 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoImage: {
        width: 138,
        height: 138,
        resizeMode: 'contain',
        top: 10,
      },

});