import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    agents: {

    },

    agent: {
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        width: 150,
        height: 150,
        margin: 10,
        marginTop: 60,
        borderRadius: 20,
    },

    agentImage: {
        position: 'absolute',
        top: -50,
        right: 0,
        resizeMode: 'contain',
        width: 100,
        height: '100%',
    },

    agentName: {
        fontWeight: "700",
        fontSize: 11,
        position: 'absolute',
        bottom: 30,
        left: 10,
    },

    agentFunction: {
        fontSize: 12,
        position: 'absolute',
        bottom: 10,
        left: 10,
    }
});
