import { StatusBar as statusBar, StyleSheet } from 'react-native'

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

    weaponName: {
        fontSize: 16,
        color: '#FF4655',
    },

    weapon: {
        width: '100%',
        height: 180,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

    weaponImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '70%'
    },

    weaponVideo: {
        width: '100%',
        height: '100%'
    },

    menu: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
    },

    menuButton: {
        width: '50%',
        marginRight: 7,
        marginLeft: 7,
    },

    menuText: {
        textAlign: 'center',
        paddingBottom: 5,
        fontWeight: '700',
        fontSize: 16,
        borderBottomWidth: 2,
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

    flexRow: {
        flexDirection: 'row',
    },

    details: {
        flex: 1,
        width: '90%',
        marginTop: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 10,
        borderBottomColor: '#FF4655',
        
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
    },

    detailsTop: {
        backgroundColor: '#FF4655',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,

        marginBottom: 10
    },

    penetrationImg: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },

    primaryTopTitle: {
        flexDirection: 'row',
        
        color: '#fff',
        marginHorizontal: 5,
    },

    primaryFireContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    primaryFire: {
        backgroundColor: '#FF4655',
        width: '32%',
        height: 80,
        paddingVertical: 7,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    primaryFireText: {
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 11,
        color: '#fff',
    },

    damageTopTitle: {
        flexDirection: 'row',
        
        color: '#fff',
    },

    damageTopTitleContainer: {
        flexDirection: 'row',
        width: '57%',
        marginRight: 5,
        justifyContent: 'space-between',

    },

    damageContainer: {
        alignItems: 'center',
        marginBottom: 10
    },

    damage: {
        backgroundColor: '#FF4655',
        width: '95%',
        height: 30,
        padding: 5,
        marginBottom: 3,
        alignItems: 'center',
        justifyContent: 'space-between',

        flexDirection: 'row',
    },

    damageTitle: {
        fontSize: 11,
        color: '#fff',
    },

    damageValues: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '53%',
        marginRight: 10
    },

    damageText: {
        fontSize: 11,
        color: '#fff',
    },

    altFireTopTitle: {
        flexDirection: 'row',
        
        color: '#fff',
    },

    altFire: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    altFireText: {
        fontSize: 11,
        color: '#000',
    },

    freatures: {
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    freaturesTopTitle: {
        flexDirection: 'row',
        
        color: '#fff',
    },

    freaturesText: {
        fontSize: 11,
        color: '#000',
    },

    skins: {
        width: '90%'
    }, 

    skin: {
        backgroundColor: '#fff',
        width: '45%',
        height: 90,
        margin: '2.5%',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,

        alignItems: 'center',
    },

    skinImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '70%',
    },

    skinText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 11
    },

    reloadButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },

    reloadText: {
        fontSize: 11
    },

    reloadImage: {
        width: 40,
        height: 40,
        marginBottom: 20
    }

});
