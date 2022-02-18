import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { WeaponSkinsProps } from "../components/SkinsList/types";

export type RootStackParamList = {
    Home: undefined;
    Agent: {
        agent: object
    };
    Weapon: {
        weapon: object
    };
};
  
export type WeaponScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Weapon'
>;

export type WeaponScreenRouteProp = RouteProp<RootStackParamList, 'Weapon'>;

export type Props = {
    navigation: WeaponScreenNavigationProp;
    route: WeaponScreenRouteProp
};

export type WeaponStatsProps = {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    adsStats: {
      zoomMultiplier: number;
      fireRate: number;
      runSpeedMultiplier: number;
      burstCount: number;
      firstBulletAccuracy: number;
    },
    damageRanges: [
      {
        rangeStartMeters: number;
        rangeEndMeters: number;
        headDamage: number;
        bodyDamage: number;
        legDamage: number;
      },
      {
        rangeStartMeters: number;
        rangeEndMeters: number;
        headDamage: number;
        bodyDamage: number;
        legDamage: number;
      }
    ]
}

export type WeaponProps = {   
    uuid: string,
    displayName: string,
    category: string,
    displayIcon: string,
    weaponStats: WeaponStatsProps;
    shopData: {
      cost: string;
      category: string;
    },
    skins: Array<WeaponSkinsProps>
}