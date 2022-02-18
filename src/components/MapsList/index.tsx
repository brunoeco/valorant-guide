import React from "react";
import { FlatList, TouchableOpacity, Image, Text } from "react-native";
import { useQuery } from "react-query";
import { connection } from "../../database/connection";
import { MapProps } from "../../types/mapTypes";
import { Props } from "../../types/homeTypes";
import { ErrorMessage, LoadingMessage } from "../../utils";

import { styles } from "./styles";

export function Maps( { navigation }: Props) {
    const { data, isLoading, isError } = useQuery('maps',() => (
        connection.get<{data:Array<MapProps>}>('maps').then(response => {
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
                style={styles.maps}
                data={data}
                keyExtractor={item => item.uuid}
                numColumns={1}
                renderItem={({item}) => (
                    <>
                        <TouchableOpacity style={styles.map} onPress={() => navigation.navigate('Map', {map: item})} >
                            <Image style={styles.mapImage} source={{uri: item.listViewIcon }} />
                            <Text style={styles.mapName}>{item.displayName.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </>
                )}    
            />
    )
}
