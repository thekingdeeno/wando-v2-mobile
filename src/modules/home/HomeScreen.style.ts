import { StyleSheet } from "react-native"
import { colorScheme } from "../../shared/constants/colors"

const styles = StyleSheet.create({
    screen: {
        height: '100%',
    },
    screenHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: colorScheme.grey,
    },
    screenBody:{
        height: '100%',
    },
    logoText: {
        padding: 20,
        fontSize: 20,
        color: colorScheme.textColor,
    },
    introContainer: {
        paddingTop: 60,
        padding: 30,
    },
})

export default styles