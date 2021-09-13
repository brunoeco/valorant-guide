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
    Map: {
        map: object
    };
};
  
type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;
  
type Props = {
    navigation: HomeScreenNavigationProp;
};

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

function Maps( { navigation }: Props) {
    const data = db.maps;
      
    return (
        <FlatList 
                style={styles.maps}
                data={data}
                keyExtractor={item => item.id}
                numColumns={1}
                renderItem={({item}) => (
                    <>
                        <TouchableOpacity style={styles.map} onPress={() => navigation.navigate('Map', {map: item})} >
                            <Image style={styles.mapImage} source={item.imageUri} />
                            <Text style={styles.mapName}>{item.displayName.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </>
                )}    
            />
    )
}

export default function Home({ navigation }: Props) {
    const [ option, setOption ] = useState("agents");

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={logoImage}/>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuButton} onPress={() => setOption("agents")}>
                    <Text
                        style={[styles.menuText, option == "agents" ? {color: '#FF4655'} : {color: '#6d6d6d'}]}
                        
                    >
                        Agentes
                    </Text>
                    <View style={[styles.span, option == "agents" ? {display: 'flex'} : {display: 'none'}]}></View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => setOption("weapons")}>
                    <Text
                        style={[styles.menuText, option == "weapons" ? {color: '#FF4655'} : {color: '#6d6d6d'}]}
                    >
                        Armas
                    </Text>
                    <View style={[styles.span, option == "weapons" ? {display: 'flex'} : {display: 'none'}]}></View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => setOption("maps")}>
                    <Text
                        style={[styles.menuText, option == "maps" ? {color: '#FF4655'} : {color: '#6d6d6d'}]}
                    >
                        Mapas
                    </Text>
                    <View style={[styles.span, option == "maps" ? {display: 'flex'} : {display: 'none'}]}></View>
                </TouchableOpacity>
            </View>

            { option == "agents" ? (
                <Agents navigation={navigation} />
            ) : option == "weapons" ? (
                <Weapons navigation={navigation} />
            ) : (
                <Maps navigation={navigation} />
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
        height: 70,
    },

    menu: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 40,
    },

    menuButton: {
        marginRight: 15,
        marginLeft: 7,
    },

    menuText: {
        textAlign: 'left',
        fontWeight: '700',
        paddingBottom: 5,
        fontSize: 16,
    },

    span: {
        height: 5,
        width: 30,
        borderRadius: 20,
        backgroundColor: "#FF4655"
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

    maps: {
        width: '90%'
    },

    map: {
        backgroundColor: '#fff',
        elevation: 3,
        height: 150,
        margin: '2.5%',
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center'
    },

    mapImage: {
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        padding: 10,
        height: 150,
        margin: '2.5%',
        borderRadius: 10,
        resizeMode: 'cover',
        width: '100%',
    },

    mapName: {
        fontWeight: "400",
        fontSize: 16,
        position: 'absolute',
        bottom: 10,
        left: 20,
        backgroundColor: "#fff",
        width: 100,
        paddingHorizontal: 5
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
