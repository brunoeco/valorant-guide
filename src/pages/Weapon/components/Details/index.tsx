import React from "react";
import { ScrollView, View } from "react-native";

import Damage from "../Damage";
import PrimaryFire from "../PrimaryFire";

import { WeaponProps } from "../../types";

import { styles } from "../../styles";
import { WeaponStatsContext } from "../../context";

export default function Details(weapon:WeaponProps) {
    return (
        <WeaponStatsContext.Provider value={weapon.weaponStats} >
            <View style={styles.details}>
                <ScrollView>
                    <PrimaryFire />
                    <Damage />
                </ScrollView>
            </View>
        </WeaponStatsContext.Provider>
    )
}