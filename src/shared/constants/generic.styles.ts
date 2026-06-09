import { StyleSheet } from "react-native";

const genStyles = StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
})

export default genStyles;