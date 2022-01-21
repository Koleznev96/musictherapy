import { StyleSheet, Platform } from 'react-native';
import { ColorsStyles } from "../../../constants/ColorsStyles";

export const styles = StyleSheet.create({
    scroll: {
        marginTop: 10,
        width: '100%',
    },
    scrollView: {
        marginTop: 10,
        alignItems: 'center',
    },
    block: {
        alignItems: 'center',
        width: '75%',
    },
    logo: {
        width: 95,
        height: 109,
    },
    text_glav: {
        marginTop: 25,
        fontSize: 32,
    },
    text_foot: {
        marginTop: '20%',
        fontSize: 18,
        textAlign: 'center',
        width: 300,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    hr: {
        width: 1,
        height: 15,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
    },
    button_footer_text: {
        fontSize: 12,
        letterSpacing: 1,
        textAlign: 'center',
        letterSpacing: 1,
    },
    buttonLog: {
        marginTop: 20, 
        width: '100%',
        height: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonLog_text: {
        width: '100%',
        textAlign: 'center',
        fontSize: 14,
    },
});