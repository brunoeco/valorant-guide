import React from "react";
import { FlatList, TouchableOpacity, Image, Text } from "react-native";
import { useQuery } from "react-query";

import { connection } from "../../../../database/connection";

import { WeaponProps } from "../../../Weapon/types";
import { Props } from "../../types";

import { ErrorMessage, LoadingMessage } from "../../utils";


import { styles } from "./styles";

export function Weapons( { navigation }: Props) {
    const { data, isLoading, isError } = useQuery('weapons', () => (
        connection.get<{data: Array<WeaponProps>}>('weapons').then(response => {
            return response.data.data;
        }).catch(() => {
            throw new Error;
        })
    ),{
        cacheTime: 60000,
        refetchOnWindowFocus: false,
    });

    if(isLoading) {
        return <LoadingMessage />
    }

    if(isError) {
        return <ErrorMessage />
    }

    return (
        <FlatList 
                style={styles.weapons}
                data={data}
                keyExtractor={item => item.uuid}
                numColumns={2}
                renderItem={({item}) => (
                    <>
                        <TouchableOpacity style={styles.weapon} onPress={() => navigation.navigate('Weapon', {weapon: item})} >
                            <Image style={styles.weaponImage} source={{ uri: item.displayIcon }} />
                            <Text style={styles.weaponName}>{item.displayName.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </>
                )}    
            />
    )
}