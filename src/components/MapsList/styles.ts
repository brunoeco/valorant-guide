import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    maps: {
        width: '90%'
    },

    map: {
        backgroundColor: '#fff',
        elevation: 3,
        height: 150,
        margin: '2.5%',
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center'
    },

    mapImage: {
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        padding: 10,
        height: 150,
        margin: '2.5%',
        borderRadius: 10,
        resizeMode: 'cover',
        width: '100%',
    },

    mapName: {
        fontWeight: "400",
        fontSize: 16,
        position: 'absolute',
        bottom: 10,
        left: 20,
        backgroundColor: "#fff",
        width: 100,
        paddingHorizontal: 5
    }
});
