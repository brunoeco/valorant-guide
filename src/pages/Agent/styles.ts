import { StyleSheet, StatusBar as statusBar } from "react-native";

export const styles = StyleSheet.create({
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
        height: '40%',
        paddingRight: 20,
    },

    agentImg: {
        resizeMode: 'cover',
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
        marginHorizontal: "10%",
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
