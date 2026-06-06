import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ColorValue, View, TextStyle, StyleProp, ViewStyle } from "react-native"
import { borderRad } from "../shared/constants/ui-sizes"
import { colorScheme } from "../shared/constants/colors";
import { uiText } from "../shared/constants/ui-styles";
import { currentTheme } from "../shared/constants/colors";
import { CSSProperties } from "react";


interface Props {
    text: string;
    textStyles?: any;
    buttonStyles?: any;
    color: 'primary' | 'secondary' | 'tetiary'
    icon?: any;
    iconProps?: any;
    onPress:  ((event: GestureResponderEvent) => void) | undefined
}

const Button = ({onPress, text, color, icon, iconProps, textStyles, buttonStyles}: Props)=>{

let btnBg 
let btnTxt

const tetiaryStyle: any = {}

const Icon = icon


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
        <TouchableOpacity  onPress={onPress} style={{...buttonStyles}}>
            <View style={{
                ...styles.button, 
                // ...buttonStyles,
                backgroundColor: btnBg,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
            }}>
                {icon && <Icon {...iconProps} />}
                <Text
                style={{
                ...uiText.Text,
                color: btnTxt,
                ...tetiaryStyle,
                fontWeight: 'semibold',
                ...textStyles
                }}
                >{text}</Text>
            </View>
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
    },
})