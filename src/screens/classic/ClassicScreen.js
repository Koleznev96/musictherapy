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
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
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

    const fullScreenHandler = (data) => {
        navigation.navigate({
            name: 'FullVideo',
            params: data,
        });
    }

    return (
        <ImageBackground
            source={require('../../assets/images/background-img.jpg')}
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <ImageBackground
                style={{width: '100%', height: '100%', alignItems: 'center'}}
                imageStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.38)'}}
            >  
                <View style={{width: '100%', height: 50, backgroundColor: ColorsStyles.backgroundFooter, position: 'absolute', top: 0}} />
                <SafeAreaView
                    style={{width: '100%', height: '100%', alignItems: 'center'}}
                >
                <HeaderRoot data={{label: 'МЕДИТАЦИИ'}}/>
                <View style={styles.block}>
                    {loading ? (
                        <LoaderIn />
                    ) : (
                    <FlatList
                        style={{width: '100%'}}
                        contentContainerStyle={{paddingBottom: 100}}
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
                                <View style={{
                                    width: '100%',
                                    height: 200,
                                    borderRadius: 16,
                                    marginTop: 10,
                                    backgroundColor: 'rgba(198, 198, 198, 0.54)',
                                }}>
                                    <VideoPlayer 
                                        isFullscreen={true}
                                        poster={item.poster}
                                        paused={true}
                                        pictureInPicture={true}
                                        toggleResizeModeOnFullscreen={false}
                                        disableBack={true}
                                        showOnStart={true}
                                        onEnterFullscreen={() => fullScreenHandler(item)}
                                        style={{
                                            borderRadius: 16,
                                            height: 200,
                                            width: '100%',
                                        }}
                                        videoStyle={{
                                            width: '100%',
                                            height: 200,
                                        }}
                                        source={{uri: item.video}} 
                                    />
                                </View>
                            </View>
                        )}
                    />
                    )}
                    </View>
                    <View style={{height: 50, width: '100%'}} />
                </SafeAreaView>
            </ImageBackground>
        </ImageBackground>
    )
}

export default ClassicScreen;