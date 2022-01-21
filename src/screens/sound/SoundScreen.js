import React, {useContext, useEffect, useState} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Image,
    Linking,
    RefreshControl,
    FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AuthContext} from "../../context/authContext";
import {useHttp} from "../../hooks/http.hook";
import {styles} from "./useStyles";
import GlobalStyle from "../../components/GlobalStyle";
import {HeaderRoot} from "../../components/headerRoot/HeaderRoot";
import { ColorsStyles } from '../../constants/ColorsStyles';
import { LoaderIn } from '../../components/loader/minLoader/LoaderIn';


function SoundScreen ({ navigation }) {
    const auth = useContext(AuthContext);
    const {loading, request, error, clearError} = useHttp();
    const [Refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const data = await request(`/api/data/live_sound`, 'GET', null, {
                Authorization: `${auth.token}`
            });
            setData(data);
        } catch (e) {}
    };

    useEffect(() => {
        getData();
    }, [auth.token]);

    const nextHandler = (url) => {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    return (
        <ImageBackground
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
            source={require('../../assets/images/background-img.jpg')}
        > 
            <ImageBackground
                style={{width: '100%', height: '100%', alignItems: 'center'}}
                imageStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.38)'}}
            > 
                <SafeAreaView            
                    style={{width: '100%', height: '100%', alignItems: 'center'}}
                >
            
                <HeaderRoot data={{label: 'ЖИВОЙ ЗВУК'}}/>
                {/* <ScrollView style={styles.scroll} 
                    keyboardShouldPersistTaps='handled' 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollView}
                > */}
                    <View style={styles.block}>
                        <Text style={[GlobalStyle.CustomFontRegular, styles.label]}>
                            Приглашаем на ЖИВЫЕ концерты!
                        </Text>
                        {loading ? (
                            <LoaderIn />
                        ) : (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            style={{width: '100%'}}
                            contentContainerStyle={{paddingBottom: 100}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={Refreshing}
                                    onRefresh={() => getData()}
                                    colors={[ColorsStyles.colorTextError]}
                                />
                            }
                            data={data}
                            renderItem={({item, index}) => (
                                <View style={styles.item_block}>
                                <Image
                                    source={{uri: item.img}}
                                    style={styles.item_img}
                                />
                                <TouchableOpacity
                                style={[styles.item_button]}
                                onPress={() => nextHandler(item.url)}
                                >
                                    <Text style={[GlobalStyle.CustomFontRegular, styles.item_button_text]}>
                                        Купить билеты
                                    </Text>
                                </TouchableOpacity>
                                </View>
                            )}
                        />
                        )}
                    </View>
                {/* </ScrollView> */}
                </SafeAreaView>
            </ImageBackground>
        </ImageBackground>
    )
}

export default SoundScreen;