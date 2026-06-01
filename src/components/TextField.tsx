import { View, Text, TextInput, StyleSheet, Image, NativeSyntheticEvent, TextInputChangeEventData, Pressable} from "react-native"
import { colorScheme } from "../shared/constants/colors"
import { borderRad } from "../shared/constants/ui-sizes"
import { uiText } from "../shared/constants/ui-styles"

type TextProps = {
    onChange: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined,
    label?: string,
    value?: string,
    placeholder?: string,
    secureText?: boolean,
    LeftIcon?: (props: any)=>React.JSX.Element,
    LeftIconColor?: string,
    LeftIconSize?: number,
    RightIcon?: (props: any)=>React.JSX.Element,
    RightIconColor?: string
    RightIconSize?: number,
    RightIconClick?: ()=>void
}

const TextField = ({LeftIcon, RightIcon, placeholder, LeftIconColor, RightIconColor, LeftIconSize, RightIconSize, RightIconClick, onChange, secureText, label, value}: TextProps) => {

    const textFieldWidth = 
        (LeftIcon && !RightIcon || !LeftIcon && RightIcon) ? '85%' :
        (LeftIcon && RightIcon) ? '70%' : '100%'

    return (
            <View style={styles.container}>
            {label && <Text style={{...styles.label, ...uiText.Text, color:colorScheme.textPrimary}}>{label}</Text>}
            <View style={styles.inputBox}>
                {LeftIcon && 
                <View style={styles.leftIcon}>
                    <LeftIcon color={LeftIconColor ?? colorScheme.textTetiary} size={LeftIconSize ?? 20}/>
                </View>}
                <TextInput 
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={colorScheme.textTetiary}
                    style={{...styles.text, width: textFieldWidth}}
                    onChange={onChange}
                    secureTextEntry={secureText}
                    
                />
                {RightIcon &&
                <Pressable onPress={RightIconClick}>
                <View style={styles.rightIcon}>
                    <RightIcon color={RightIconColor ?? colorScheme.textTetiary} size={RightIconSize ?? 20} />
                </View>
                </Pressable>}
            </View>
            </View>
    )
}

export default TextField

const styles = StyleSheet.create({

    container: {
        // padding: 5
    },

    label:{
        color: colorScheme.textPrimary,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },

    inputBox: {
        borderWidth: 1,
        borderColor: colorScheme.divider,
        borderRadius: borderRad.small,
        backgroundColor: colorScheme.background3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,

    },

    leftIcon: {
        padding: 15,
        width: '15%'
    },

    rightIcon: {
        padding: 15,
        width: '15%'
    },

    text:{
        position: 'relative',
        width: '70%',
        color: colorScheme.textPrimary,
        opacity: 0.7,
        borderRadius: 5
    }
})