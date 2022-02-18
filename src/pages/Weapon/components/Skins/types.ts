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

export type skinComponentProps = {
    skins: WeaponSkinsProps[],
    changeSkin: (skinLevel: WeaponSkinLeveProps[]) => void,
}