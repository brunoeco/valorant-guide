import React from "react";
import { FlatList, TouchableOpacity, Image, Text } from "react-native";
import { Props } from "../../types";

import { db } from "../../../../database/db";

import { styles } from "./styles";

export function Maps( { navigation }: Props) {
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
