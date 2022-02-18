import { createContext } from "react";
import { WeaponStatsProps } from "../../types/weaponTypes";

export const WeaponStatsContext = createContext<WeaponStatsProps>({
    fireRate: 0,
    magazineSize: 0,
    runSpeedMultiplier: 0,
    equipTimeSeconds: 0,
    reloadTimeSeconds: 0,
    firstBulletAccuracy: 0,
    shotgunPelletCount: 0,
    wallPenetration: "",
    adsStats: {
      zoomMultiplier: 0,
      fireRate: 0,
      runSpeedMultiplier: 0,
      burstCount: 0,
      firstBulletAccuracy: 0,
    },
    damageRanges: [
      {
        rangeStartMeters: 0,
        rangeEndMeters: 0,
        headDamage: 0,
        bodyDamage: 0,
        legDamage: 0,
      },
      {
        rangeStartMeters: 0,
        rangeEndMeters: 0,
        headDamage: 0,
        bodyDamage: 0,
        legDamage: 0,
      }
    ]
  });