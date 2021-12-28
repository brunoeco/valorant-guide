import React from "react";
import { FlatList, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";

import { Props } from "../../types";

import { db } from "../../../../database/db";

export function Agents( { navigation }: Props) {
    const data = db.agents.sort(function(a,b) {
        return a.displayName < b.displayName ? -1 : a.displayName > b.displayName ? 1 : 0;
    });
      
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