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
    uuid: string;
    displayName: string;
    description: string;
    role: {
        uuid: string;
        displayName: string;
        description: string;
        displayIcon: string;
    };
    fullPortrait: string;
    bustPortrait: string;
    abilities: [
        {
            slot: string;
            displayName: string;
            description: string;
            displayIcon: string;
        },
    ]
}
