import { StatusBar as statusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        marginTop: statusBar.currentHeight,
        paddingBottom: 10,
        
        flex: 1,
        backgroundColor: '#F8F8F8',
    },

    menuTop: {
        width: '100%',
        alignItems: 'center',
        
        height: 150,
    },

    goBackButton: {
        position: 'absolute',
        padding: 5,
        left: 20,
        top: 10,
        zIndex: 5

    },
    
    backArrowImg: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },

    mapTopImg: {
        position: 'absolute',
        resizeMode: 'cover',
        width: '100%',
        height: 150,
        
    },

    menu: {
        position: 'absolute',
        bottom: 15,
        flexDirection: 'row',
        marginLeft: 40,
        marginRight: 40,
    },

    menuButton: {
        width: '50%',
    },

    menuText: {
        textAlign: 'center',
        paddingBottom: 5,
        fontWeight: '700',
        fontSize: 16,
        borderBottomWidth: 2,
    },

    map: {
        width: 200,
        paddingHorizontal: 20,
    },

    mapDescription: {
        marginTop: 15,
        marginHorizontal: '7%',
    },

    mapName: {
        fontSize: 20,
        color: '#FF4655',
        zIndex: 5,
        fontWeight: '700'
    },

    mapCoordinates: {
        fontSize: 14,
        color: '#000',
        marginBottom: 20,
        zIndex: 5,
        fontWeight: '400'
    },

    mapImg: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },

    mapDescriptionText: {
        marginTop: 20,
        fontSize: 11,
        lineHeight: 15
    },

    mapGallery: {
        width: '100%'
    },

    mapGalleryView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 180,

        alignItems: 'center',
        marginTop: 5
    },

    mapGalleryImg: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
});
