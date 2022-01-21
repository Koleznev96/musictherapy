import React, {useContext, useRef, useEffect, useState} from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
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
// import
//   MediaControls, {PLAYER_STATES}
// from 'react-native-media-controls';
// import Video from 'react-native-af-video-player'
// import Video, { ScrollView, Container } from 'react-native-af-video-player'


function MeditationScreen ({ navigation }) {
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
            const data = await request(`/api/data/meditation`, 'GET', null, {
                Authorization: `${auth.token}`
            });
            setData(data);
        } catch (e) {}
    };

    useEffect(() => {
        getData();
    }, [auth.token]);

    const nextHandler = (router) => {
        
    }

//     const [isPlaying, setIsPlaying] = useState(false);  
//     const [isMuted, setIsMuted] = useState(false);  

//     const togglePlaying = () => {};  


//     const videoPlayer = useRef(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [paused, setPaused] = useState(false);
//   const [
//     playerState, setPlayerState
//   ] = useState(PLAYER_STATES.PLAYING);
//   const [screenType, setScreenType] = useState('content');

//   const onSeek = (seek) => {
//     //Handler for change in seekbar
//     videoPlayer.current.seek(seek);
//   };

//   const onPaused = (playerState) => {
//     //Handler for Video Pause
//     setPaused(!paused);
//     setPlayerState(playerState);
//   };

//   const onReplay = () => {
//     //Handler for Replay
//     setPlayerState(PLAYER_STATES.PLAYING);
//     videoPlayer.current.seek(0);
//   };

//   const onProgress = (data) => {
//     // Video Player will progress continue even if it ends
//     if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
//       setCurrentTime(data.currentTime);
//     }
//   };

//   const onLoad = (data) => {
//     setDuration(data.duration);
//     setIsLoading(false);
//   };

//   const onLoadStart = (data) => setIsLoading(true);

//   const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

//   const onError = () => alert('Oh! ', error);

//   const exitFullScreen = () => {
//     alert('Exit full screen');
//   };

//   const enterFullScreen = () => {};

//   const onFullScreen = () => {
//     setIsFullScreen(isFullScreen);
//     if (screenType == 'content') setScreenType('cover');
//     else setScreenType('content');
//   };

//   const renderToolbar = () => (
//     <View>
//       <Text style={ {
//     marginTop: 30,
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   }}> toolbar </Text>
//     </View>
//   );

//   const onSeeking = (currentTime) => setCurrentTime(currentTime);
///////

    // const onFullScreen = (status) => {
    //     // Set the params to pass in fullscreen status to navigationOptions
    //     navigation.setParams({
    //         fullscreen: !status
    //     })
    // }

    // const onMorePress = () => {
    //     // Alert.alert(
    //     // 'Boom',
    //     // 'This is an action call!',
    //     // [{ text: 'Aw yeah!' }]
    //     // )
    // }

    // const url = 'https://your-url.com/video.mp4'
    // const logo = 'https://your-url.com/logo.png'
    // const placeholder = 'https://your-url.com/placeholder.png'
    // const title = 'My video title'

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
                    {/* <Container style={styles.videoContainer}>
                    <Video
                        autoPlay
                        src={{ uri: url}}
                        title={title}
                        logo={logo}
                        placeholder={placeholder}
                        onMorePress={() => onMorePress()}
                        onFullScreen={status => onFullScreen(status)}
                        fullScreenOnly
                    />
                    </Container> */}
                    <View>
                    {/* <Video url={url} /> */}
                    {/* <Video
                        onEnd={onEnd}
                        onLoad={onLoad}
                        onLoadStart={onLoadStart}
                        onProgress={onProgress}
                        auto
                        paused={paused}
                        ref={videoPlayer}
                        resizeMode={screenType}
                        onFullScreen={isFullScreen}
                        source={{
                        uri:
                            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        }}
                        style={{
                            width: Dimensions.get('window').width - 40,
                            height: 200,
                            borderRadius: 16,
                            // backgroundColor: 'black',
                            // justifyContent: 'center',
                          }}
                        volume={1000}
                    />
                    <MediaControls
                        duration={duration}
                        isLoading={isLoading}
                        mainColor="#333"
                        onFullScreen={onFullScreen}
                        onPaused={onPaused}
                        onReplay={onReplay}
                        onSeek={onSeek}
                        onSeeking={onSeeking}
                        playerState={playerState}
                        progress={currentTime}
                        toolbar={renderToolbar()}
                    /> */}
                    </View>
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
                                    // <ScrollView
                                    // style={styles.item_scroll}
                                    // >
                                        <Text style={[GlobalStyle.CustomFontRegular, styles.item_text]}>
                                            {item.text}
                                        </Text> 
                                    ): null}
                                </View> 
                                <Video source={{uri: item.video}}   // Can be a URL or a local file.
                                // ref={(ref) => {
                                //     this.player = ref
                                // }}                                      // Store reference
                                // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                // onError={this.videoError}               // Callback when video cannot be loaded
                                    style={{
                                        width: Dimensions.get('window').width - 40,
                                        height: 200,
                                        borderRadius: 16,
                                        marginTop: 10,
                                        backgroundColor: 'rgba(198, 198, 198, 0.54)'
                                    }}
                                />
                            </View>
                        )}
                    />
                    )}
                        {/* {data.map((item, index) => (
                            
                        ))} */}
                    </View>
                    <View style={{height: 50, width: '100%'}} />
                </SafeAreaView>
            </ImageBackground>
        </ImageBackground>
    )
}

export default MeditationScreen;