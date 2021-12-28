import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ImageURISource } from 'react-native';

export type RootStackParamList = {
    Home: undefined;
    map: {
        map: object
    };
    Weapon: {
        weapon: object
    };
    Map: {
        map: object
    };
};
  
export type MapScreenRouteProp = RouteProp<RootStackParamList, 'Map'>;

export type MapScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Map'
>;
  
export type Props = {
    navigation: MapScreenNavigationProp;
    route: MapScreenRouteProp
};

export type MapProps = {
    id: string;
    displayName: string;
    imageUri: ImageURISource;
    imageMapUri: ImageURISource;
    description: string;
    gallery: Array<string>
}

export type AboutProps = { 
    imageMapUri: ImageURISource, description: string
}