import React from "react";
import { View, Text } from "react-native";
import { WeaponStatsContext } from "../../../pages/Weapon/contexts";

export default function AltFire() {
    return (
        <WeaponStatsContext.Consumer>
            {weaponStats => (
                <View>
                    {/* <View style={styles.detailsTop}>
                        <Text style={styles.altFireTopTitle}>MODO SECUNDÁRIO</Text>
                    </View>
        
                    <View style={styles.altFire}>
                        {altFireArray.map((item, index) => (
                            <Text key={index} style={styles.altFireText}>{item}</Text>
                        ))}
                    </View> */}
                </View>
            )}
        </WeaponStatsContext.Consumer>
    )
}