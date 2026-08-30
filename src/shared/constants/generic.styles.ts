import { StyleSheet } from "react-native";
import { colorScheme } from "./colors";

const genStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colorScheme.background,
    },
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