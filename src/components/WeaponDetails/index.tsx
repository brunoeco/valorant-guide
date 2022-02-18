import React from "react";
import { ScrollView, View } from "react-native";

import Damage from "./Damage";
import PrimaryFire from "./PrimaryFire";

import { WeaponProps } from "../../types/weaponTypes";

import { styles } from "../../pages/Weapon/styles";
import { WeaponStatsContext } from "../../pages/Weapon/contexts";

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