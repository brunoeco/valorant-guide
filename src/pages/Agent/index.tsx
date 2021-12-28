import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar as statusBar, ScrollView } from 'react-native';
import { Props, AgentProps } from './types'


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
                <Image style={styles.agentImg} source={agent.imageUri} />

                <View style={styles.agentDescription}>
                    <Text style={styles.agentText}>{agent.description}</Text>
                </View>
            </View>
            

            <View style={styles.agentAbilities}>
                <View style={styles.abilitiesIcons}>
                    <TouchableOpacity style={[styles.abilitiesIconsButton, ]} onPress={() => changeAbility(0)} >
                        <Image style={styles.abilitiesIconsImg} source={agent.abilities[0].abilityImageUri} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.abilitiesIconsButton, ]} onPress={() => changeAbility(1)} >
                        <Image style={styles.abilitiesIconsImg} source={agent.abilities[1].abilityImageUri} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.abilitiesIconsButton, ]} onPress={() => changeAbility(2)} >
                        <Image style={styles.abilitiesIconsImg} source={agent.abilities[2].abilityImageUri} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.abilitiesIconsButton, ]} onPress={() => changeAbility(3)} >
                        <Image style={styles.abilitiesIconsImg} source={agent.abilities[3].abilityImageUri} />
                    </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        marginTop: statusBar.currentHeight,
        paddingBottom: 10,
        
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
    },

    menuTop: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 30,
    },

    agentName: {
        fontSize: 16,
        color: '#FF4655',
    },

    goBackButton: {
        position: 'absolute',
        padding: 5,
        left: 20,
        top: -5,
    },
    
    backArrowImg: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },


    agent: {
        flexDirection: 'row',
        width: '100%',
        minHeight: '40%',
        paddingHorizontal: 20,
    },

    agentImg: {
        resizeMode: 'contain',
        width: '50%',
        height: '100%',
    },

    agentDescription: {
        justifyContent: 'center',
        width: '50%',
    },

    agentText: {
        fontSize: 11,
        textAlign: 'right',
        lineHeight: 15,
        marginBottom: 10,
    },

    agentAbilities: {
        flex: 1,
        marginTop: 30,
        width: '100%',

        alignItems: 'center',
    },

    abilitiesIcons: {
        flexDirection: 'row',
    },

    abilitiesIconsButton: {
        marginHorizontal: '3%',
        backgroundColor: '#FF4655',
        width: 50,
        height: 50,
        padding: 5,
        borderRadius: 10,
        marginBottom: 10
    },

    abilitiesIconsImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },

    abilitiesDescription: {
        marginTop: 20,
        marginHorizontal: '7%',
    },

    abilitiesDescriptionTitle: {
        fontWeight: '700',
    },

    abilitiesDescriptionText: {
        marginTop: 20,
        fontSize: 11,
        lineHeight: 15
    },
});
