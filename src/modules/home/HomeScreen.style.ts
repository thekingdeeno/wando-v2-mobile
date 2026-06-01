import { StyleSheet } from "react-native"
import { colorScheme } from "../../shared/constants/colors"

const styles = StyleSheet.create({
    screen: {
        // height: '100%',
        flex: 1,
        backgroundColor: colorScheme.background,
    },
    screenHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
    },
    screenBody:{
        height: '100%',
    },
    logoText: {
        padding: 20,
        fontSize: 20,
    },
    introContainer: {
        paddingTop: 60,
        padding: 30,
    },
})

export default styles