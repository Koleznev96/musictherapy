import React, {useContext, useEffect, useState} from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AuthContext} from "../../context/authContext";
import {useHttp} from "../../hooks/http.hook";
import {styles} from "./useStyles";
import GlobalStyle from "../../components/GlobalStyle";
import { GlobalSvgSelector } from '../../assets/GlobalSvgSelector';
import {HeaderRoot} from "../../components/headerRoot/HeaderRoot";
import Video from 'react-native-video';
import { ColorsStyles } from '../../constants/ColorsStyles';
import { LoaderIn } from '../../components/loader/minLoader/LoaderIn';


function ClassicScreen ({ navigation }) {
    const auth = useContext(AuthContext);
    const {loading, request, error, clearError} = useHttp();
    const [data, setData] = useState([]);
    const [Refreshing, setRefreshing] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const itemHandler = (index) => {
        if (index === activeIndex) setActiveIndex(-1);
        else setActiveIndex(index);
    }

    const getData = async () => {
        try {
            const data = await request(`/api/data/classic`, 'GET', null, {
                Authorization: `${auth.token}`
            });
            setData(data);
        } catch (e) {}
    };

    useEffect(() => {
        getData();
    }, [auth.token]);

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <ImageBackground
            source={require('../../assets/images/background-img.jpg')}
            style={{width: '100%', height: '100%', alignItems: 'center'}}
            > 
                <ImageBackground
                style={{width: '100%', height: '100%', alignItems: 'center'}}
                imageStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.38)'}}
                > 
                <HeaderRoot data={{label: 'МЕДИТАЦИИ'}}/>
                <View style={styles.block}>
                    {loading ? (
                        <LoaderIn />
                    ) : (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={Refreshing}
                                onRefresh={() => getData()}
                                colors={[ColorsStyles.colorTextError]}
                            />
                        }
                        data={data}
                        renderItem={({item, index}) => (
                            <View style={styles.item_block_root}>
                                <View style={activeIndex === index ? styles.item_block_active : styles.item_block}>
                                    <TouchableOpacity
                                    style={[styles.item_button]}
                                    onPress={() => itemHandler(index)}
                                    >
                                        <Text style={[activeIndex === index ? GlobalStyle.CustomFontBold : GlobalStyle.CustomFontMedium, styles.item_name]}>
                                            {item.label}
                                        </Text>
                                        <GlobalSvgSelector id={activeIndex === index ? 'arrow_bottom' : 'arrow_top'} />
                                    </TouchableOpacity>
                                    {activeIndex === index ? (
                                        <Text style={[GlobalStyle.CustomFontRegular, styles.item_text]}>
                                            {item.text}
                                        </Text> 
                                    ): null}
                                </View> 
                                <Video source={{uri: item.video}}
                                    style={styles.item_video}
                                />
                            </View>
                        )}
                    />
                    )}
                    </View>
                    <View style={{height: 50, width: '100%'}} />
                </ImageBackground>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ClassicScreen;