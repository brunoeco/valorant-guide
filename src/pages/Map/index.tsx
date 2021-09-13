import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, StatusBar as statusBar, ScrollView, ImageURISource } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

const backArrowImage = require('../../assets/backArrow.png');

type RootStackParamList = {
    Home: undefined;
    map: {
        map: object
    };
    Weapon: {
        weapon: object
    };
    Map: {
        map: object
    };
};
  
type MapScreenRouteProp = RouteProp<RootStackParamList, 'Map'>;

type MapScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Map'
>;
  
type Props = {
    navigation: MapScreenNavigationProp;
    route: MapScreenRouteProp
};

type MapProps = {
    id: string;
    displayName: string;
    imageUri: ImageURISource;
    imageMapUri: ImageURISource;
    description: string;
    gallery: Array<string>
}

function Gallery({ imageGallery }: { imageGallery: Array<string> }) {
    return (
        <FlatList 
            style={styles.mapGallery}
            data={imageGallery}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {

                return(
                <>
                    <View style={styles.mapGalleryView}>
                        <Image style={styles.mapGalleryImg} source={{uri: item}} />
                    </View>
                </>
            )}}    
        />
    )
}

function About({imageMapUri, description} : { imageMapUri: ImageURISource, description: string}) {
    
    return (
        <ScrollView>
            <View style={styles.mapDescription}>
                
                <Image style={styles.mapImg} source={imageMapUri} />

                <Text style={styles.mapDescriptionText}>
                    {description}
                </Text>

            </View>
        </ScrollView>
    )
}


export default function Map({ navigation, route }: Props) {
    const [ option, setOption ] = useState(true);

    const map = route.params.map as MapProps;

    return (
        <View style={styles.container}>
            <View style={styles.menuTop}>
                <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Image style={styles.backArrowImg} source={backArrowImage} />
                </TouchableOpacity>
                
                <Text style={styles.mapName}>{map.displayName.toUpperCase()}</Text>

                <Image style={styles.mapTopImg} source={map.imageUri} />
                
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuButton} onPress={() => {setOption(true)}}>
                        <Text
                            style={[styles.menuText, {marginRight: 7}, option ? {color: '#FF4655', borderColor: '#FF4655'} : {color: '#fff', borderColor: '#fff'}]}
                            
                        >
                            Sobre
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuButton} onPress={() => setOption(false)}>
                        <Text
                            style={[styles.menuText, {marginLeft: 7}, !option ? {color: '#FF4655', borderColor: '#FF4655'} : {color: '#fff', borderColor: '#fff'}]}
                        >
                            Galeria
                        </Text>
                    </TouchableOpacity>
                </View>
               
            </View>

            

            {option ? (
                <About imageMapUri={map.imageMapUri} description={map.description} />
            ) : (
                <Gallery imageGallery={map.gallery} />
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: statusBar.currentHeight,
        paddingBottom: 10,
        
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
    },

    menuTop: {
        width: '100%',
        alignItems: 'center',
        
        height: 150,
    },

    mapName: {
        fontSize: 16,
        color: '#FF4655',
        marginBottom: 5,
        top: 15,
        zIndex: 5,
        fontWeight: '700'
    },

    goBackButton: {
        position: 'absolute',
        padding: 5,
        left: 20,
        top: 10,
        zIndex: 5

    },
    
    backArrowImg: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },

    mapTopImg: {
        position: 'absolute',
        resizeMode: 'stretch',
        width: '100%',
        height: 150,
        
    },

    menu: {
        position: 'absolute',
        bottom: 15,
        flexDirection: 'row',
        marginLeft: 40,
        marginRight: 40,
    },

    menuButton: {
        width: '50%',
    },

    menuText: {
        textAlign: 'center',
        paddingBottom: 5,
        fontWeight: '700',
        fontSize: 16,
        borderBottomWidth: 2,
    },

    map: {
        flexDirection: 'row',
        width: '100%',
        minHeight: '40%',
        paddingHorizontal: 20,
    },

    mapImg: {
        width: '100%',
        height: 300,
        resizeMode: 'contain'
    },

    mapDescription: {
        marginTop: 15,
        marginHorizontal: '7%',
    },

    mapDescriptionText: {
        marginTop: 20,
        fontSize: 11,
        lineHeight: 15
    },

    mapGallery: {
        width: '100%'
    },

    mapGalleryView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 180,

        alignItems: 'center',
        marginTop: 5
    },

    mapGalleryImg: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
});
