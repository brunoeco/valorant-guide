import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Props, AgentProps } from '../../types/agentTypes'

import { styles } from './styles';

export default function Agent({ navigation, route }: Props) {
    const backArrowImage = require('../../assets/backArrow.png');

    const agent = route.params.agent as AgentProps;

    const [ abilityTitle, setAbilityTitle ] = useState(agent.abilities[0].displayName);
    const [ abilityDescription, setAbilityDescription ] = useState(agent.abilities[0].description);

    const [status, setStatus] = React.useState<boolean>(false);

    function changeAbility(option: number) {
        setAbilityTitle(agent.abilities[option].displayName);
        setAbilityDescription(agent.abilities[option].description);
    }

    return (
        <View style={styles.container}>
            <View style={styles.menuTop}>
                <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Image style={styles.backArrowImg} source={backArrowImage} />
                </TouchableOpacity>
                
                <Text style={styles.agentName}>{agent.displayName.toUpperCase()}</Text>
            </View>

            <View style={styles.agent}>
                <Image style={styles.agentImg} source={{uri: agent.fullPortrait }} />

                <View style={styles.agentDescription}>
                    <Text style={styles.agentText}>{agent.description}</Text>
                </View>
            </View>
            

            <View style={styles.agentAbilities}>
                <View style={styles.abilitiesIcons}>
                    {agent.abilities.map((ability, index) => (
                        <TouchableOpacity key={index} style={[styles.abilitiesIconsButton, ]} onPress={() => changeAbility(index)} >
                            <Image style={styles.abilitiesIconsImg} source={{ uri: ability.displayIcon }} />
                        </TouchableOpacity>
                    ))}
                </View>

                <ScrollView>
                    <View style={styles.abilitiesDescription}>
                        
                        <Text style={styles.abilitiesDescriptionTitle}>
                            {abilityTitle.toUpperCase()}
                        </Text>

                        <Text style={styles.abilitiesDescriptionText}>
                            {abilityDescription}
                        </Text>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}