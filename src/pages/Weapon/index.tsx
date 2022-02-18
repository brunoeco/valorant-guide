import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Video } from 'expo-av';
import { Props, WeaponProps } from './types';

import { styles } from './styles';

import Details from './components/Details';
import Skins from './components/Skins';
import { WeaponSkinLeveProps } from './components/Skins/types';

const backArrowImage = require('../../assets/backArrow.png');

export default function Weapon({ navigation, route }: Props) {
    const [ option, setOption ] = useState(true);

    const weapon = route.params.weapon as WeaponProps;

    const [ weaponImage, setWeaponImage ] = useState(weapon.displayIcon);
    
    const [ selectedSkin, setSelectedSkin ] = useState<WeaponSkinLeveProps[]>([]);

    function handleChangeSkin(skinLevel: WeaponSkinLeveProps[]) {
        setSelectedSkin(skinLevel);
    }

    return (
        <View style={styles.container}>
            <View style={styles.menuTop}>
                <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Image style={styles.backArrowImg} source={backArrowImage} />
                </TouchableOpacity>
                
                <Text style={styles.weaponName}>{weapon.displayName.toUpperCase()}</Text>
            </View>

            { selectedSkin.length <= 1 ? (
                <View style={styles.weapon}>
                    <Image style={styles.weaponImg} source={selectedSkin.length == 0 ? {uri: weaponImage} : {uri: selectedSkin[0].displayIcon}} />
                </View>
            ) : (
                <View style={styles.weapon}>
                    <Video 
                        style={styles.weaponVideo} 
                        source={{uri: selectedSkin[selectedSkin.length - 1].streamedVideo}}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                    />
                </View>
            )}

            <View style={styles.menu}>
            <TouchableOpacity style={styles.menuButton} onPress={() => {setSelectedSkin([]); setOption(true)}}>
                    <Text
                        style={[styles.menuText, option ? {color: '#FF4655', borderColor: '#FF4655'} : {color: '#000', borderColor: '#000'}]}
                        
                    >
                        Detalhes
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => setOption(false)}>
                    <Text
                        style={[styles.menuText, !option ? {color: '#FF4655', borderColor: '#FF4655'} : {color: '#000', borderColor: '#000'}]}
                    >
                        Skins
                    </Text>
                </TouchableOpacity>
            </View>

            {option && weapon.weaponStats != null ? (
                <Details {...weapon} />
            ) : (
                <Skins skins={weapon.skins} changeSkin={(skinLevel: WeaponSkinLeveProps[]) => handleChangeSkin(skinLevel)} />
            )}

        </View>
    );
}