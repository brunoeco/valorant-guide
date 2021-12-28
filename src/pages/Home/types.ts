import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Agent: {
        agent: object
    };
    Weapon: {
        weapon: object
    };
    Map: {
        map: object
    };
};

export type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;

export type Props = {
    navigation: HomeScreenNavigationProp;
};