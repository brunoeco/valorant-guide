import React from "react";
import { useContext } from "react";
import { View, Text } from "react-native";
import { WeaponStatsContext } from "../../../pages/Weapon/contexts";
import { styles } from "../../../pages/Weapon/styles";

export default function PrimaryFire() {
    const weaponStats =useContext(WeaponStatsContext);

    const penetration = weaponStats.wallPenetration.split(":");

    return (
            <View>
                <View style={styles.detailsTop}>
                    <Text style={styles.primaryTopTitle}>DISPARO</Text>
    
                    <View style={[styles.flexRow]}>
                        <Text style={styles.primaryTopTitle}>
                            {penetration[penetration.length - 1] === "Low" ? "Baixa"
                            : penetration[penetration.length - 1] === "Medium" ? "Média" : "Alta"} penetração
                        </Text>
                    </View>
                </View>
    
                <View style={[styles.flexRow, styles.primaryFireContainer]}>
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>CADÊNCIA DE TIRO</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.fireRate}</Text>
                        <Text style={styles.primaryFireText}>BALAS/SEG</Text>
                    </View>
    
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>VELOCIDADE DE CORRIDA</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.runSpeedMultiplier}</Text>
                        <Text style={styles.primaryFireText}>M/SEG</Text>
                    </View>
    
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>VELOCIDADE AO EQUIPAR</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.equipTimeSeconds}</Text>
                        <Text style={styles.primaryFireText}>SEG</Text>
                    </View>
                </View>
                
                <View style={[styles.flexRow, styles.primaryFireContainer]}>
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>DISPERÇÃO DO TIRO INICIAL</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.firstBulletAccuracy}{weaponStats.adsStats != null ? '/' + weaponStats.adsStats.firstBulletAccuracy : ''}</Text>
                        <Text style={styles.primaryFireText}>GRAU(SEM/COM MIRA)</Text>
                    </View>
    
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>VELOCIDADE AO RECARREGAR</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.reloadTimeSeconds}</Text>
                        <Text style={styles.primaryFireText}>SEG</Text>
                    </View>
    
                    <View style={styles.primaryFire}>
                        <Text style={styles.primaryFireText}>CARREGADOR</Text>
                        <Text style={styles.primaryFireText}>{weaponStats.magazineSize}</Text>
                        <Text style={styles.primaryFireText}>BALAS</Text>
                    </View>
                </View>
            </View>
        )
}