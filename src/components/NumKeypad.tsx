import { View, Pressable, StyleSheet, Text } from "react-native"
import {colorPallete} from "../shared/constants/colors"

const NumKeypad = ()=>{

    return(
                    <View style={style.numpad}>
                        <View style={style.numpadRow}>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {'1'}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {2}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {3}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={style.numpadRow}>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {4}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {5}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {6}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={style.numpadRow}>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {7}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {8}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {9}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={style.numpadRow}>
                            <Pressable style={style.numpadNum} onPress={()=>{}}>
                                <Text style={style.numpadNumText}>
                                    {0}
                                </Text>
                            </Pressable>
                        </View>
                    </View>
    )
}

const style = StyleSheet.create({
    screen:{
        height: '100%',
    },
    text:{
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        fontWeight: 900,
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

export default NumKeypad