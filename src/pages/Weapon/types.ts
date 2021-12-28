import { ImageURISource } from "react-native";

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

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

export type WeaponDetailsProps = {
    weaponStats: {
        altFire: string,
        freatures: string,
        fireRate: number,
        magazineSize: number,
        runSpeedMultiplier: number,
        equipTimeSeconds: number,
        reloadTimeSeconds: number,
        firstBulletAccuracy: number,
        shotgunPelletCount: number,
        wallPenetration: string,
        feature: number,
        fireMode: number,
        altFireType: string,
        adsStats: {
          zoomMultiplier: number,
          fireRate: number,
          runSpeedMultiplier: number,
          burstCount: number,
          firstBulletAccuracy: number,
        },
        altShotgunStats: number,
        airBurstStats: number,
        damageRanges: [
          {
            rangeStartMeters: number,
            rangeEndMeters: number,
            headDamage: number,
            bodyDamage: number,
            legDamage: number,
          }
        ]
    }
}

export type skinComponentProps = {
    uuid: string,
    changeSkin: any,
}

export type WeaponSkinLeveProps = {
      uuid: string,
      displayName: string,
      levelItem: null,
      displayIcon: string,
      streamedVideo: string,
      assetPath: string,
}

export type WeaponSkinsProps = {
    uuid: string,
    displayName: string,
    themeUuid: string,
    contentTierUuid: string,
    displayIcon: string,
    assetPath: string,
    chromas: [
      {
        uuid: string,
        displayName: string,
        displayIcon: string,
        fullRender: string,
        swatch: string,
        streamedVideo: null,
        assetPath: string,
      },
    ],
    levels: WeaponSkinLeveProps[]
}

export type WeaponProps = {   
    id: string,
    uuid: string,
    displayName: string,
    type: string,
    price: string,
    imageUri: ImageURISource,
    weaponStats: {
        altFire: string,
        freatures: string,
        fireRate: number,
        magazineSize: number,
        runSpeedMultiplier: number,
        equipTimeSeconds: number,
        reloadTimeSeconds: number,
        firstBulletAccuracy: number,
        shotgunPelletCount: number,
        wallPenetration: string,
        feature: number,
        fireMode: number,
        altFireType: string,
        adsStats: {
          zoomMultiplier: number,
          fireRate: number,
          runSpeedMultiplier: number,
          burstCount: number,
          firstBulletAccuracy: number,
        },
        altShotgunStats: number,
        airBurstStats: number,
        damageRanges: [
          {
            rangeStartMeters: number,
            rangeEndMeters: number,
            headDamage: number,
            bodyDamage: number,
            legDamage: number,
          }
        ]
    },

}
