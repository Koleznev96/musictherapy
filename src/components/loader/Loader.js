import React from 'react';
import {
    StyleSheet, 
    View, 
    Text, 
    Image,
    ImageBackground
} from 'react-native';
import {styles} from "./useStyles";
import GlobalStyle from "../GlobalStyle";
import {LoaderIn} from "./minLoader/LoaderIn";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Loader = () => (
    <SafeAreaView
        style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
        <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={{width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center'}}
        > 
            <ImageBackground
            source={require('../../assets/images/background-logo.png')}
            style={{width: '100%', height: '90%', marginTop: '15%', alignItems: 'center'}}
            > 
                <View style={styles.block}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
                </View>
                <Text style={[GlobalStyle.BellotaFontRegular, styles.text_glav]}>
                    МУЗЫКОТЕРАПИЯ
                </Text>
                <Text style={[GlobalStyle.BellotaFontRegular, styles.text_foot]}>
                    Гармония и совершенство
                </Text>
            </ImageBackground>
        </ImageBackground>
    </SafeAreaView>

    // <View style={styles.container}>
    //   <View style={styles.logocontainer}>
    //     {/* <Image style={styles.img} source={require('../../assets/images/icon.png')} /> */}
    //     <View style={styles.loader}>
    //     <LoaderIn />
    //     </View>
    //   </View>

    //   <View style={styles.footer}>
    //         <Text style={[GlobalStyle.CustomFontMedium, styles.title]}>
    //             Шахматная школа
    //         </Text>
    //         <Text style={[GlobalStyle.CustomFontMedium, styles.title_org]}>
    //             Elsadchess
    //         </Text> 
    //     </View>
    // </View>
);


