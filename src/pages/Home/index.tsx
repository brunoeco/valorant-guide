import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, StatusBar as statusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { db } from '../../database/db';

const logoImage = require('../../assets/logo.png');

type RootStackParamList = {
    Home: undefined;
    Agent: {
        agent: object
    };
    Weapon: {
        weapon: object
    };
};
  
type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;
  
type Props = {
    navigation: HomeScreenNavigationProp;
};

type WeaponSkinLeveProps = {
    uuid: string,
    displayName: string,
    levelItem: null,
    displayIcon: string,
    streamedVideo: string,
    assetPath: string,
}

function Agents( { navigation }: Props) {
    const data = db.agents;
      
    return (
        <FlatList 
                style={styles.agents}
                data={data}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity style={styles.agent} onPress={() => navigation.navigate('Agent', {agent: item})} >
                            <Image style={styles.agentImage} source={item.imageUri} />
                            <Text style={styles.agentName}>{item.displayName.toUpperCase()}</Text>
                            <Text style={styles.agentFunction}>{item.function.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </>
                )}    
            />
    )
}

function Weapons( { navigation }: Props) {
    const data = db.weapons;
      
    return (
        <FlatList 
                style={styles.weapons}
                data={data}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({item}) => (
                    <>
                        <TouchableOpacity style={styles.weapon} onPress={() => navigation.navigate('Weapon', {weapon: item})} >
                            <Image style={styles.weaponImage} source={item.imageUri} />
                            <Text style={styles.weaponName}>{item.displayName.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </>
                )}    
            />
    )
}

export default function Home({ navigation }: Props) {
    const [ option, setOption ] = useState(true);

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={logoImage}/>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuButton} onPress={() => setOption(true)}>
                    <Text
                        style={[styles.menuText, option ? {color: '#FF4655', borderColor: '#FF4655'} : {color: '#000', borderColor: '#000'}]}
                        
                    >
                        Agentes
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => setOption(false)}>
                    <Text
                        style={[styles.menuText, !option ? {color: '#FF4655', borderColor: '#FF4655'} : {color: '#000', borderColor: '#000'}]}
                    >
                        Armas
                    </Text>
                </TouchableOpacity>
            </View>

            { option ? (
                <Agents navigation={navigation} />
            ) : (
                <Weapons navigation={navigation} />
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
    
    logoImage: {
        marginTop: 10,
        resizeMode: 'contain',
        height: 80,
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
        fontWeight: '700',
        paddingBottom: 5,
        fontSize: 16,
        borderBottomWidth: 2,
    },

    agents: {

    },

    agent: {
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        width: 150,
        height: 150,
        margin: 10,
        marginTop: 60,
        borderRadius: 20,
    },

    agentImage: {
        position: 'absolute',
        top: -50,
        right: 0,
        resizeMode: 'contain',
        width: 100,
        height: '100%',
    },

    agentName: {
        fontWeight: "700",
        fontSize: 11,
        position: 'absolute',
        bottom: 30,
        left: 10,
    },

    agentFunction: {
        fontSize: 12,
        position: 'absolute',
        bottom: 10,
        left: 10,
    },

    weapons: {
        width: '90%'
    },

    weapon: {
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        width: '45%',
        height: 100,
        margin: '2.5%',
        borderRadius: 10,

        alignItems: 'center',
    },

    weaponImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '70%',
    },

    weaponName: {
        fontWeight: "700",
        fontSize: 11,
        position: 'absolute',
        bottom: 10,
    },
});
