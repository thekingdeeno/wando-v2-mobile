import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ColorValue } from "react-native"
import { borderRad } from "../shared/constants/ui-sizes"
import { colorScheme } from "../shared/constants/colors";
import { uiText } from "../shared/constants/ui-styles";
import { currentTheme } from "../shared/constants/colors";


interface Props {
    text: string;
    color: 'primary' | 'secondary' | 'tetiary'
    onPress:  ((event: GestureResponderEvent) => void) | undefined
}

const Button = ({onPress, text, color}: Props)=>{

let btnBg 
let btnTxt

const tetiaryStyle: any = {}


switch (color) {
    case 'primary':
            btnBg = colorScheme.button_bg1
            btnTxt = 'white'
        break;
    case 'secondary':
            btnBg = colorScheme.button_bg2 
            btnTxt = currentTheme === 'dark' ? colorScheme.softPurple : colorScheme.primaryPurple
        break;
    case 'tetiary':
            btnBg = 'transparent'
            btnTxt = colorScheme.textPrimary

            tetiaryStyle.borderRadius = borderRad.small;
            tetiaryStyle.borderWidth = 1
            tetiaryStyle.borderColor = colorScheme.button_border
        break;

    default:
        break;
}

    return (
        <TouchableOpacity  onPress={onPress} style={{
           
        }}>
            <Text style={{
                ...styles.button, 
                backgroundColor: btnBg,
                ...uiText.Text,
                color: btnTxt,
                ...tetiaryStyle,
                fontWeight: 'semibold'
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: borderRad.small,
        textAlign:'center',
        padding: 15, 
        fontSize: 15, 
        fontWeight: 'bold'
    },
    innerText: {
        
    },
    secondaryBg: {

    },
    tetiaryBg: {
        
    }
})