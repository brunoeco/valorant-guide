import React from "react";
import { View, Text } from "react-native";
import { WeaponStatsContext } from "../../../pages/Weapon/contexts";

export default function PrimaryFire() {
    return (
        <WeaponStatsContext.Consumer>
            {weaponStats => (
                <View>
                    {/* <View style={styles.detailsTop}>
                        <Text style={styles.freaturesTopTitle}>RECURSO</Text>
                    </View>
        
                    <View style={styles.freatures}>
                        {freaturesArray.map((item, index) => (
                            <Text key={index} style={styles.freaturesText}>{item}</Text>
                        ))}
                    </View> */}
                </View>
            )}
        </WeaponStatsContext.Consumer>
    )
}