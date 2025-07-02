import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, Alert } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import colorPallete from "../../../../shared/constants/colors";
import style from "./EmailOtpScreen.style";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";


const EmailOtpScreen = ({route}: any)=>{

    
    
    const [otpValue, setOtpValue] = useState('');
    
    const {verifyEmailOtp} = useAuth()
    
    function updateOtpForm(number: string){
        if(otpValue.length === 6){
            return;
        }
        const newOtpValue = `${otpValue}${number}`
        setOtpValue(newOtpValue);
        
        if (newOtpValue.length === 6) {
            const {email, password} = route.params
            verifyEmailOtp(email, password, newOtpValue)
        }
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: colorPallete.basePurple}}>
                <View style={style.screen}>
                    <View>
                        <Text style={style.text}>
                            Enter the OTP sent to your email
                        </Text>
                    </View>
                    <View style={style.otpInput}>
                        <View style={style.otpDigitBody}>
                            {/* <Text style={style.otpDigit}>{otpValue[0]}</Text> */}
                            <TextInput style={style.otpDigit} value={otpValue[0]}></TextInput>
                        </View>
                        <View style={style.otpDigitBody}>
                            <Text style={style.otpDigit}>{otpValue[1]}</Text>
                        </View>                        
                        <View style={style.otpDigitBody}>
                            <Text style={style.otpDigit}>{otpValue[2]}</Text>
                        </View>
                        <View style={style.otpDigitBody}>
                            <Text style={style.otpDigit}>{otpValue[3]}</Text>
                        </View>                        
                        <View style={style.otpDigitBody}>
                            <Text style={style.otpDigit}>{otpValue[4]}</Text>
                        </View>                        
                        <View style={style.otpDigitBody}>
                            <Text style={style.otpDigit}>{otpValue[5]}</Text>
                        </View>
                    </View>
                    <View style={style.resendOtpContainer}>
                        <Text style={style.resendOtpButton}>{'txt'}</Text>
                    </View>
                    <View style={style.numpad}>
                        <View style={style.numpadRow}>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('1')}>
                                <Text style={style.numpadNumText}>
                                    {'1'}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('2')}>
                                <Text style={style.numpadNumText}>
                                    {2}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('3')}>
                                <Text style={style.numpadNumText}>
                                    {3}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={style.numpadRow}>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('4')}>
                                <Text style={style.numpadNumText}>
                                    {4}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('5')}>
                                <Text style={style.numpadNumText}>
                                    {5}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('6')}>
                                <Text style={style.numpadNumText}>
                                    {6}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={style.numpadRow}>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('7')}>
                                <Text style={style.numpadNumText}>
                                    {7}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('8')}>
                                <Text style={style.numpadNumText}>
                                    {8}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('9')}>
                                <Text style={style.numpadNumText}>
                                    {9}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={style.numpadRow}>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('0')}>
                                <Text style={style.numpadNumText}>
                                    {0}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>updateOtpForm('0')}>
                                <Text style={style.numpadNumText}>
                                    {0}
                                </Text>
                            </Pressable>
                            <Pressable style={style.numpadNum} onPress={()=>setOtpValue(otpValue.slice(0, -1))}>
                                <Text style={style.numpadNumText}>
                                    {'<'}
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default EmailOtpScreen