import { StyleSheet } from "react-native"
import colorPallete from "../../../../shared/constants/colors"

const style = StyleSheet.create({
    screen:{
        height: '100%',
    },
    text:{
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        fontWeight: 900
    },
    otpInput:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:"center",
        padding: 20
    },
    otpDigitBody:{
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        margin: 5,
        width: 40
    },
    otpDigit:{
        fontSize: 50,
        color: 'white',
        textAlign: 'center'
        // padding:10
    },
    resendOtpContainer:{
        backgroundColor: 'white'
    },
    resendOtpButton:{
        color: 'red'
    },
    numpad:{
        // backgroundColor: 'blue',
        width: '100%',
        position:'absolute',
        bottom: 0,
        padding: 20
        // margin: 'auto'
    },
    numpadRow: {
        // backgroundColor: 'white',
        margin: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    numpadNum:{
        backgroundColor: colorPallete.cardPurple,
        padding:20,
        textAlign:'center',
        borderRadius: '80%',
        margin: 10,
        marginHorizontal: 20,
        // flex:3,
    },
    numpadNumText: {
        width: 10,
        borderRadius: 80,
        textAlign: 'center',
        color: 'white'
    }
})

export default style