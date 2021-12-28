import React from "react";
import { FlatList, TouchableOpacity, Image, Text } from "react-native";
import { Props } from "../../types";
import { styles } from "./styles";

import { db } from "../../../../database/db";

export function Weapons( { navigation }: Props) {
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