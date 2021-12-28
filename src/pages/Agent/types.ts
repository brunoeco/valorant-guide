import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ImageURISource } from 'react-native';

export type RootStackParamList = {
    Home: undefined;
    Agent: {
        agent: object
    };
    Weapon: {
        weapon: object
    };
};
  
export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Agent'>;

export type AgentScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Agent'
>;
  
export type Props = {
    navigation: AgentScreenNavigationProp;
    route: ProfileScreenRouteProp
};

export type AgentProps = {
    id: string;
    displayName: string;
    function: string;
    imageUri: ImageURISource;
    description: string;
    abilities: [
        {
            abilityImageUri: ImageURISource;
            displayName: string;
            description: string;
        },

        {
            abilityImageUri: ImageURISource;
            displayName: string;
            description: string;
        },

        {
            abilityImageUri: ImageURISource;
            displayName: string;
            description: string;
        },

        {
            abilityImageUri: ImageURISource;
            displayName: string;
            description: string;
        }
    ]
}
