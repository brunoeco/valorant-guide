import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, StatusBar as statusBar, ScrollView, SafeAreaView, ImageURISource } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { connection } from '../../database/connection';

const backArrowImage = require('../../assets/backArrow.png');
const penetratrionImage = require('../../assets/penetrationImage.png');

type RootStackParamList = {
    Home: undefined;
    Agent: {
        agent: object
    };
    Weapon: {
        weapon: object
    };
};
  
type WeaponScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Weapon'
>;

type WeaponScreenRouteProp = RouteProp<RootStackParamList, 'Weapon'>;

type Props = {
    navigation: WeaponScreenNavigationProp;
    route: WeaponScreenRouteProp
};

type WeaponDetailsProps = {
    weaponStats: {
        altFire: string,
        freatures: string,
        fireRate: number,
        magazineSize: number,
        runSpeedMultiplier: number,
        equipTimeSeconds: number,
        reloadTimeSeconds: number,
        firstBulletAccuracy: number,
        shotgunPelletCount: number,
        wallPenetration: string,
        feature: number,
        fireMode: number,
        altFireType: string,
        adsStats: {
          zoomMultiplier: number,
          fireRate: number,
          runSpeedMultiplier: number,
          burstCount: number,
          firstBulletAccuracy: number,
        },
        altShotgunStats: number,
        airBurstStats: number,
        damageRanges: [
          {
            rangeStartMeters: number,
            rangeEndMeters: number,
            headDamage: number,
            bodyDamage: number,
            legDamage: number,
          }
        ]
    }
}

type skinComponentProps = {
    uuid: string,
    changeSkin: any,
}

type WeaponSkinLeveProps = {
      uuid: string,
      displayName: string,
      levelItem: null,
      displayIcon: string,
      streamedVideo: string,
      assetPath: string,
}

type WeaponSkinsProps = {
    uuid: string,
    displayName: string,
    themeUuid: string,
    contentTierUuid: string,
    displayIcon: string,
    assetPath: string,
    chromas: [
      {
        uuid: string,
        displayName: string,
        displayIcon: string,
        fullRender: string,
        swatch: string,
        streamedVideo: null,
        assetPath: string,
      },
    ],
    levels: WeaponSkinLeveProps[]
}

type WeaponProps = {   
    id: string,
    uuid: string,
    displayName: string,
    type: string,
    price: string,
    imageUri: ImageURISource,
    weaponStats: {
        altFire: string,
        freatures: string,
        fireRate: number,
        magazineSize: number,
        runSpeedMultiplier: number,
        equipTimeSeconds: number,
        reloadTimeSeconds: number,
        firstBulletAccuracy: number,
        shotgunPelletCount: number,
        wallPenetration: string,
        feature: number,
        fireMode: number,
        altFireType: string,
        adsStats: {
          zoomMultiplier: number,
          fireRate: number,
          runSpeedMultiplier: number,
          burstCount: number,
          firstBulletAccuracy: number,
        },
        altShotgunStats: number,
        airBurstStats: number,
        damageRanges: [
          {
            rangeStartMeters: number,
            rangeEndMeters: number,
            headDamage: number,
            bodyDamage: number,
            legDamage: number,
          }
        ]
    },

}


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
        marginVertical: 30,
    },


    weaponName: {
        fontSize: 16,
        color: '#FF4655',
    },

    weapon: {
        width: '100%',
        height: 180,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

    weaponImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '70%'
    },

    weaponVideo: {
        width: '100%',
        height: '100%'
    },

    menu: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
    },

    menuButton: {
        width: '50%',
        marginRight: 7,
        marginLeft: 7,
    },

    menuText: {
        textAlign: 'center',
        paddingBottom: 5,
        fontWeight: '700',
        fontSize: 16,
        borderBottomWidth: 2,
    },

    goBackButton: {
        position: 'absolute',
        padding: 5,
        left: 20,
        top: -5,
    },
    
    backArrowImg: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },

    flexRow: {
        flexDirection: 'row',
    },

    details: {
        flex: 1,
        width: '90%',
        marginTop: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 10,
        borderBottomColor: '#FF4655',
        
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
    },

    detailsTop: {
        backgroundColor: '#FF4655',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,

        marginBottom: 10
    },

    penetrationImg: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },

    primaryTopTitle: {
        flexDirection: 'row',
        
        color: '#fff',
        marginHorizontal: 5,
    },

    primaryFireContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    primaryFire: {
        backgroundColor: '#FF4655',
        width: '32%',
        height: 80,
        paddingVertical: 7,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    primaryFireText: {
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 11,
        color: '#fff',
    },

    damageTopTitle: {
        flexDirection: 'row',
        
        color: '#fff',
    },

    damageTopTitleContainer: {
        flexDirection: 'row',
        width: '57%',
        marginRight: 5,
        justifyContent: 'space-between',

    },

    damageContainer: {
        alignItems: 'center',
        marginBottom: 10
    },

    damage: {
        backgroundColor: '#FF4655',
        width: '95%',
        height: 30,
        padding: 5,
        marginBottom: 3,
        alignItems: 'center',
        justifyContent: 'space-between',

        flexDirection: 'row',
    },

    damageTitle: {
        fontSize: 11,
        color: '#fff',
    },

    damageValues: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '53%',
        marginRight: 10
    },

    damageText: {
        fontSize: 11,
        color: '#fff',
    },

    altFireTopTitle: {
        flexDirection: 'row',
        
        color: '#fff',
    },

    altFire: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    altFireText: {
        fontSize: 11,
        color: '#000',
    },

    freatures: {
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    freaturesTopTitle: {
        flexDirection: 'row',
        
        color: '#fff',
    },

    freaturesText: {
        fontSize: 11,
        color: '#000',
    },

    skins: {
        width: '90%'
    }, 

    skin: {
        backgroundColor: '#fff',
        width: '45%',
        height: 90,
        margin: '2.5%',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,

        alignItems: 'center',
    },

    skinImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '70%',
    },

    skinText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 11
    },

    reloadButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },

    reloadText: {
        fontSize: 11
    },

    reloadImage: {
        width: 40,
        height: 40,
        marginBottom: 20
    }

});
