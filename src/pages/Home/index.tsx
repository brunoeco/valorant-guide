import React, {useState} from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Props } from './types';

import { styles } from './styles';

import { Agents } from './components/Agents';
import { Weapons } from './components/Weapons';
import { Maps } from './components/Maps';

const logoImage = require('../../assets/logo.png');

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