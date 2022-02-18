import React from "react";
import { FlatList, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";

import { Props } from "../../types/homeTypes";
import { connection } from "../../database/connection";
import { AgentProps } from "../../types/agentTypes";
import { ErrorMessage, LoadingMessage } from "../../utils";
import { useQuery } from "react-query";

export function Agents( { navigation }: Props) {
    const { data, isLoading, isError } = useQuery('agents', () => (
        connection.get<{data: Array<AgentProps>}>('agents?isPlayableCharacter=true').then(response => {
            const dataTemp = response.data.data.sort((a, b) => {
                return a.displayName < b.displayName ? -1 : a.displayName > b.displayName ? 1 : 0;
            });

            return dataTemp;    
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
                style={styles.agents}
                data={data}
                keyExtractor={item => item.uuid}
                numColumns={2}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity style={styles.agent} onPress={() => navigation.navigate('Agent', {agent: item})} >
                            <Image style={styles.agentImage} source={{uri: item.bustPortrait}} />
                            <Text style={styles.agentName}>{item.displayName.toUpperCase()}</Text>
                            <Text style={styles.agentFunction}>{item.role.displayName.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </>
                )}    
            />
    )
}