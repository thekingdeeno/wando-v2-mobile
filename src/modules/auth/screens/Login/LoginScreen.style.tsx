import { StyleSheet } from "react-native"
import { colorScheme } from "../../../../shared/constants/colors"
import { borderRad } from "../../../../shared/constants/ui-sizes"

const styles = StyleSheet.create({
    screen: {
        padding: 25,
        marginTop: 50, 
        height: '100%'
    },
    textContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 40
    },
    header: {
        color: colorScheme.textPrimary, textAlign: 'center', fontSize: 40, paddingBottom: 20
    },
    formContainer: {
        backgroundColor: colorScheme.background2,
        padding: 20,
        borderRadius: borderRad.large,
        borderColor: colorScheme.divider,
        borderWidth: 1,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 10,
        gap: 10
    },
    formInput: {
        backgroundColor: colorScheme.background3,
        color: colorScheme.textPrimary,
        opacity: 0.7,
        marginTop: 10,
        padding: 15,
        borderRadius: 5
    },
    submitBtn: {
        backgroundColor: colorScheme.primaryPurple,
        padding: 20,
        marginTop: 20,
        borderRadius: 10
    },

    linkBtn: {
        color: colorScheme.textSecondary,
        textAlign: 'right',
        marginVertical: 20,
    }
})

export default styles