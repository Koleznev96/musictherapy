import React from 'react';
import {
    View,
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

function FullVideoScreen ({ navigation, route }) {
    const {label, video, poster} = route.params;

    const exitFullHandaler = () => {
        navigation.goBack();
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'rgba(198, 198, 198, 0.54)',
        }}>
            <VideoPlayer 
                navigation={navigation}
                poster={poster}
                paused={true}
                pictureInPicture={true}
                onBack={() => exitFullHandaler()}
                showOnStart={true}
                disableFullscreen={true}
                source={{uri: video}} 
            />
            </View>
    )
}

export default FullVideoScreen;