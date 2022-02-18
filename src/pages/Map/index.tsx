import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MapProps, Props } from './types';

import { styles } from './styles';

const backArrowImage = require('../../assets/backArrow.png');

export default function Map({ navigation, route }: Props) {
    const [ option, setOption ] = useState(true);

    const map = route.params.map as MapProps;

    return (
        <View style={styles.container}>
            <View style={styles.menuTop}>
                <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Image style={styles.backArrowImg} source={backArrowImage} />
                </TouchableOpacity>

                <Image style={styles.mapTopImg} source={{ uri: map.listViewIcon }} />
                
                {/* <View style={styles.menu}>
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
                </View> */}
               
            </View>

            <View style={styles.mapDescription}>
                <Text style={styles.mapName}>{map.displayName.toUpperCase()}</Text>                
                <Text style={styles.mapCoordinates}>{map.coordinates.toUpperCase()}</Text>                
                <Image style={styles.mapImg} source={{ uri: map.displayIcon }} />

                {/* <Text style={styles.mapDescriptionText}>
                </Text> */}
            </View>
            
        </View>
    );
}