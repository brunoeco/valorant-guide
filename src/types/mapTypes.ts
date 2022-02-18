import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ImageURISource } from 'react-native';
import { RootStackParamList } from './navigationTypes';

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
    uuid: string;
    displayName: string;
    displayIcon: string;
    listViewIcon: string;
    coordinates: string;
}

export type AboutProps = { 
    imageMapUri: ImageURISource, description: string
}