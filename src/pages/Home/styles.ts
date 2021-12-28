import { StatusBar as statusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        marginTop: statusBar.currentHeight,
        paddingBottom: 10,
        
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
    },
    
    logoImage: {
        marginTop: 10,
        resizeMode: 'contain',
        height: 70,
    },

    menu: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 40,
    },

    menuButton: {
        marginRight: 15,
        marginLeft: 7,
    },

    menuText: {
        textAlign: 'left',
        fontWeight: '700',
        paddingBottom: 5,
        fontSize: 16,
    },

    span: {
        height: 5,
        width: 30,
        borderRadius: 20,
        backgroundColor: "#FF4655"
    }
});
