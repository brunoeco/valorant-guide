import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    weapons: {
        width: '90%'
    },

    weapon: {
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        width: '45%',
        height: 100,
        margin: '2.5%',
        borderRadius: 10,

        alignItems: 'center',
    },

    weaponImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '70%',
    },

    weaponName: {
        fontWeight: "700",
        fontSize: 11,
        position: 'absolute',
        bottom: 10,
    },
});
