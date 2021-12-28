import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { AboutProps, MapProps, Props } from './types';

import { styles } from './styles';

const backArrowImage = require('../../assets/backArrow.png');

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

function About({imageMapUri, description} : AboutProps) {
    
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