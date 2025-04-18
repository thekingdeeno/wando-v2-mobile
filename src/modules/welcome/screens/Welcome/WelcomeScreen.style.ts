import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#551C63',
        height: '100%',
    },
    screenHeader: {
        backgroundColor: '#40164B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        padding: 20,
        fontSize: 20,
        color: 'white'
    },
    introContainer: {
        paddingTop: 60,
        padding: 30,
    },
    introTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
        paddingBottom: 20
    },
    introMessage: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
    },
    myGreetingCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#74224E',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    btn: {
        padding: 15,
        marginTop: 30,
        borderRadius: 10,
        width: '45%',
    },
    btnText: {
        padding: 30,
    }
})

export default styles