import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { skinComponentProps} from "./types";

export default function Skins({ skins, changeSkin }:skinComponentProps) {
    const [ reload, setReload ] = useState(false);
      
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
                <TouchableOpacity style={styles.reloadButton} onPress={() => setReload(!reload)}>
                    <Image style={styles.reloadImage} source={require('../../../../assets/reload.png')}/>
                    <Text style={styles.reloadText}>Verifique sua conexão.</Text>
                </TouchableOpacity>
            )}
        </>
    )
}