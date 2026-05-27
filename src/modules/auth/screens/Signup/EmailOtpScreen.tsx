import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import {colorPallete, colorScheme} from "../../../../shared/constants/colors";
import style from "./EmailOtpScreen.style";
import { Fragment, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Button from "../../../../components/Button";
import { uiText } from "../../../../shared/constants/ui-styles";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';


const EmailOtpScreen = ({route}: any)=>{
    const [otpValue, setOtpValue] = useState("")
    const {verifyEmailOtp, signupForm} = useAuth()
    const [otpIndex, setOtpIndex] = useState<number>(0)
    

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
            <SafeAreaView style={{backgroundColor: colorScheme.background}}>
                <View style={style.screen}>
                    <View>

                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{...uiText.Header}}>Verify your email</Text>
                        <Text style={{...uiText.TextSecondary}}>We've sent a 6-digit code to</Text>
                        <Text style={{...uiText.Text}}>{route.params.email}</Text>
                    </View>

                    <View style={{}}>
                     <View style={style.otpInput}>
                        {('012345').split("").map((i)=>{
                               let ui = {...style.otpDigitBody}
                               const active = Number(i) === otpValue.length
                               if (active) {
                                     ui = {...ui, ...style.otpActiveBody}
                                }
                            return(
                            <View style={ui} key={i}>
                                <Text style={style.otpDigit}>{otpValue[Number(i)] ?? (
                                    <Entypo name="dot-single" size={24} color={active ? colorScheme.primaryPurple : colorScheme.button_border} />)}</Text>
                            </View>
                            )
                        })

                        }
                     </View>
                 </View>
                    <View>
                        <Text>Code expires in</Text>
                        <Text>01:45</Text>
                    </View>

                    <View>
                        <Button text="Verify Code" onPress={()=>verifyEmailOtp(signupForm.email, signupForm.password, otpValue)} color="primary">

                        </Button>
                    </View>

                    <View style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', paddingVertical: 25}}>
                        <View style={{borderWidth: 0.5, borderColor: colorScheme.divider, position: 'relative', width: '43%'}}></View>
                        <Text style={{color: colorScheme.textTetiary}}>or</Text>
                        <View style={{borderWidth: 0.5, borderColor: colorScheme.divider, position: 'relative', width: '43%'}}></View>
                    </View>

                    <View 
                        style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}
                        >
                        <TouchableOpacity style={{flexDirection: 'row'}}>
                            <AntDesign name="reload1" size={18} color={colorScheme.primaryPurple} />
                            <Text style={{color: colorScheme.primaryPurple, paddingLeft: 10}}>Resend Code</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.numpad}>
                         <View style={style.numpadRow}>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('1')}>
                                 <Text style={style.numpadNumText}>
                                     {'1'}
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('2')}>
                                 <Text style={style.numpadNumText}>
                                     {2}
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('3')}>
                                 <Text style={style.numpadNumText}>
                                     {3}
                                 </Text>
                             </TouchableOpacity>
                         </View>
                         <View style={style.numpadRow}>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('4')}>
                                 <Text style={style.numpadNumText}>
                                     {4}
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('5')}>
                                 <Text style={style.numpadNumText}>
                                     {5}
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('6')}>
                                 <Text style={style.numpadNumText}>
                                     {6}
                                 </Text>
                             </TouchableOpacity>
                         </View>
                         <View style={style.numpadRow}>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('7')}>
                                 <Text style={style.numpadNumText}>
                                     {7}
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('8')}>
                                 <Text style={style.numpadNumText}>
                                     {8}
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('9')}>
                                 <Text style={style.numpadNumText}>
                                     {9}
                                 </Text>
                             </TouchableOpacity>
                         </View>
                         <View style={{...style.numpadRow}}>
                            <View style={{width: style.numpadNum.width}} />
                             <TouchableOpacity style={style.numpadNum} onPress={()=>updateOtpForm('0')}>
                                 <Text style={style.numpadNumText}>
                                     {0}
                                 </Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={{...style.numpadNum, backgroundColor: 'none'}} onPress={()=>setOtpValue(otpValue.slice(0, -1))}>
                                <Ionicons name="backspace-outline" size={30} color={style.numpadNumText.color} />
                             </TouchableOpacity>
                         </View>
                     </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};  

export default EmailOtpScreen

