import React from "react";
import { View, Text } from "react-native";
import { WeaponStatsContext } from "../../../pages/Weapon/contexts";
import { styles } from "../../../pages/Weapon/styles";

export default function Damage() {
    return (
        <WeaponStatsContext.Consumer>
            {weaponStats => (
                <View>
                    <View style={styles.detailsTop}>
                        <Text style={styles.damageTopTitle}>DANO</Text>
        
                        <View style={styles.damageTopTitleContainer}>
                            {weaponStats.damageRanges.map((item, index) => (

                                <Text style={styles.damageText} key={index + 'damage'}>{item.rangeStartMeters}-{item.rangeEndMeters}m</Text>

                            ))}
                        </View>
                    </View>
        
                    <View style={styles.damageContainer}>
                        <View style={styles.damage}>
                            <Text style={styles.damageTitle}>CABEÇA</Text>
                            <View style={styles.damageValues}>
                                {weaponStats.damageRanges.map((item, index) => (

                                    <Text style={styles.damageText} key={index + 'head'}>{Math.trunc(item.headDamage)}</Text>

                                ))}
                            </View>
                        </View>
        
                        <View style={styles.damage}>
                            <Text style={styles.damageTitle}>CORPO</Text>
                            <View style={styles.damageValues}>
                                {weaponStats.damageRanges.map((item, index) => (

                                    <Text style={styles.damageText}  key={index + 'body'}>{Math.trunc(item.bodyDamage)}</Text>

                                ))}
                            </View>
                        </View>
        
                        <View style={styles.damage}>
                            <Text style={styles.damageTitle}>PERNAS</Text>
                            <View style={styles.damageValues}>
                                {weaponStats.damageRanges.map((item, index) => (

                                    <Text style={styles.damageText} key={index + 'legs'}>{Math.trunc(item.legDamage)}</Text>

                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </WeaponStatsContext.Consumer>
    )
}