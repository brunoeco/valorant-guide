import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { Props, skinComponentProps, WeaponDetailsProps, WeaponProps, WeaponSkinLeveProps, WeaponSkinsProps } from './types'

import { connection } from '../../database/connection';

import { styles } from './styles';

const backArrowImage = require('../../assets/backArrow.png');
const penetratrionImage = require('../../assets/penetrationImage.png');


function Details( {weaponStats}: WeaponDetailsProps) {
    function PrimaryFire() {
        return (
            <>
                <View style={styles.detailsTop}>
                    <Text style={styles.primaryTopTitle}>DISPARO</Text>
    
                    <View style={[styles.flexRow]}>
                        <Image style={styles.penetrationImg} source={penetratrionImage} />
                        <Text style={styles.primaryTopTitle}>{weaponStats.wallPenetration}</Text>
                    </View>
                </View>
    
                <View style={[styles.flexRow, styles.primaryFireContainer]}>
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>CADÊNCIA DE TIRO</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.fireRate}</Text>
                        <Text style={styles.primaryFireText}>BALAS/SEG</Text>
                    </View>
    
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>VELOCIDADE DE CORRIDA</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.runSpeedMultiplier}</Text>
                        <Text style={styles.primaryFireText}>M/SEG</Text>
                    </View>
    
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>VELOCIDADE AO EQUIPAR</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.equipTimeSeconds}</Text>
                        <Text style={styles.primaryFireText}>SEG</Text>
                    </View>
                </View>
                
                <View style={[styles.flexRow, styles.primaryFireContainer]}>
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>DISPERÇÃO DO TIRO INICIAL</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.firstBulletAccuracy}{weaponStats.adsStats != null ? '/' + weaponStats.adsStats.firstBulletAccuracy : ''}</Text>
                        <Text style={styles.primaryFireText}>GRAU(SEM/COM MIRA)</Text>
                    </View>
    
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>VELOCIDADE AO RECARREGAR</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.reloadTimeSeconds}</Text>
                        <Text style={styles.primaryFireText}>SEG</Text>
                    </View>
    
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>CARREGADOR</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.magazineSize}</Text>
                        <Text style={styles.primaryFireText}>BALAS</Text>
                    </View>
                </View>
            </>
        )
    }
    
    function Damage() {
        return (
            <>
                <View style={styles.detailsTop}>
                    <Text style={styles.damageTopTitle}>DANO</Text>
    
                    <View style={styles.damageTopTitleContainer}>
                        {weaponStats.damageRanges.map((item, index) => (

                            <Text style={styles.damageText} key={index + 'damage'}>{item.rangeStartMeters}-{item.rangeEndMeters}m</Text>

                        ))}
                    </View>
                </View>
    
                <View style={styles.damageContainer}>
                    <View style={styles.damage}>
                        <Text style={styles.damageTitle}>CABEÇA</Text>
                        <View style={styles.damageValues}>
                            {weaponStats.damageRanges.map((item, index) => (

                                <Text style={styles.damageText} key={index + 'head'}>{Math.trunc(item.headDamage)}</Text>

                            ))}
                        </View>
                    </View>
    
                    <View style={styles.damage}>
                        <Text style={styles.damageTitle}>CORPO</Text>
                        <View style={styles.damageValues}>
                            {weaponStats.damageRanges.map((item, index) => (

                                <Text style={styles.damageText}  key={index + 'body'}>{Math.trunc(item.bodyDamage)}</Text>

                            ))}
                        </View>
                    </View>
    
                    <View style={styles.damage}>
                        <Text style={styles.damageTitle}>PERNAS</Text>
                        <View style={styles.damageValues}>
                            {weaponStats.damageRanges.map((item, index) => (

                                <Text style={styles.damageText} key={index + 'legs'}>{Math.trunc(item.legDamage)}</Text>

                            ))}
                        </View>
                    </View>
                </View>
            </>
        )
    }
    
    function AltFire() {
        const altFireArray = weaponStats.altFire == "" ? [] : weaponStats.altFire.split(';');


        return (
            <>
                {altFireArray.length > 0 ? (
                    <>
                        <View style={styles.detailsTop}>
                        <Text style={styles.altFireTopTitle}>MODO SECUNDÁRIO</Text>
                    </View>
        
                    <View style={styles.altFire}>
                        {altFireArray.map((item, index) => (
                            <Text key={index} style={styles.altFireText}>{item}</Text>
                        ))}
                    </View>
                    </>
                ) : (<></>)}
            </>
        )
    }
    
    function Freatures() {
        const freaturesArray = weaponStats.freatures == "" ? [] : weaponStats.freatures.split(';');

        return (
            <>
                {freaturesArray.length > 0 ? (
                    <>
                        <View style={styles.detailsTop}>
                            <Text style={styles.freaturesTopTitle}>RECURSO</Text>
                        </View>
            
                        <View style={styles.freatures}>
                            {freaturesArray.map((item, index) => (
                                <Text key={index} style={styles.freaturesText}>{item}</Text>
                            ))}
                        </View>
                    </>
                ) : (<></>)}
            </>
        )
    }
    
    return (
        <View style={styles.details}>
                <ScrollView>
                        <PrimaryFire />
                        <Damage />
                        <AltFire />
                        <Freatures />
                </ScrollView>
        </View>
    )
}

function Skins({ uuid, changeSkin }:skinComponentProps) {
    const [ skins, setSkins ] = useState<WeaponSkinsProps[]>([]);

    useEffect(() => {
        reloadSkins();
    }, []);

    function reloadSkins() {
        try {
            connection.get(`/weapons/${uuid}?language=pt-BR`).then(response => {
                setSkins(response.data.data.skins);
            })
        } catch(err) {
            setSkins([]);
        }
    }
      
    return (
        <>
            {skins.length > 0 ? (
                <FlatList 
                    style={styles.skins}
                    data={skins}
                    keyExtractor={item => item.uuid}
                    numColumns={2}
                    renderItem={({item}) => (
                        <>
                            <TouchableOpacity style={styles.skin} activeOpacity={0.8} onPress={() => changeSkin(item.levels)}>
                                <Image style={styles.skinImg} source={{uri: item.levels[0].displayIcon}} />
                                <Text style={styles.skinText}>{item.displayName}</Text>
                            </TouchableOpacity>
                        </>
                    )}    
                />
            ) : (
                <TouchableOpacity style={styles.reloadButton} onPress={reloadSkins}>
                    <Image style={styles.reloadImage} source={require('../../assets/reload.png')}/>
                    <Text style={styles.reloadText}>Verifique sua conexão.</Text>
                </TouchableOpacity>
            )}
        </>
    )
}


export default function Weapon({ navigation, route }: Props) {
    const [ option, setOption ] = useState(true);

    const weapon = route.params.weapon as WeaponProps;

    const [ weaponImage, setWeaponImage ] = useState(weapon.imageUri);
    
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
                    <Image style={styles.weaponImg} source={selectedSkin.length == 0 ? weaponImage : {uri: selectedSkin[0].displayIcon}} />
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
                <Details weaponStats={weapon.weaponStats} />
            ) : (
                <Skins uuid={weapon.uuid} changeSkin={(skinLevel: WeaponSkinLeveProps[]) => handleChangeSkin(skinLevel)} />
            )}
            
        </View>
    );
}