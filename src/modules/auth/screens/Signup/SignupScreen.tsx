import { SafeAreaView, TextInput, View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../../../hooks/useAuth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {colorPallete, colorScheme} from "../../../../shared/constants/colors";
import TextField from "../../../../components/TextField";
import EyeClosedIcon from "../../../../asset/svg/EyeClosed";
import EyeIcon from "../../../../asset/svg/EyeOpen";
import LockIcon from "../../../../asset/svg/Lock";
import MailIcon from "../../../../asset/svg/Mail";
import { uiText } from "../../../../shared/constants/ui-styles";
import { useState } from "react";
import Button from "../../../../components/Button";
import styles from "../Login/LoginScreen.style";
import UserIcon from "../../../../asset/svg/User";


const SignupScreen = () => {
    const navigation = useNavigation<any>();

    const {signupForm, handleSignupForm, signup} = useAuth();
        const [hidePassword, setHidePassword] = useState<boolean>(true)

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: colorScheme.background,}}>
                <View style={styles.screen}>
                    <View style={styles.textContainer}>
                            <Text style={{...uiText.Header}}>
                                Create your account
                            </Text>

                            <Text style={{...uiText.Text, color: colorScheme.textTetiary}}>
                                Join Wando and Start Connecting
                            </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TextField
                            value={signupForm?.firstName}
                            placeholder='Enter your firstname'
                            label='First Name'
                            onChange={(e)=>handleSignupForm(e, 'firstName')}
                            LeftIcon={UserIcon}
                        />
                        <TextField
                            value={signupForm?.lastName}
                            placeholder='Enter your lastname'
                            label='Last Name'
                            onChange={(e)=>handleSignupForm(e, 'lastName')}
                            LeftIcon={UserIcon}
                        />
                        <TextField
                            value={signupForm?.email}
                            placeholder='Enter your email'
                            label='Email'
                            onChange={(e)=>handleSignupForm(e, 'email')}
                            LeftIcon={MailIcon}
                        />


                    <View style={{marginTop: 30}}>
                        <Button text='Next' onPress={signup} color='primary' />
                    </View>

                    <View style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', paddingVertical: 25}}>
                        <View style={{borderWidth: 0.5, borderColor: colorScheme.divider, position: 'relative', width: '43%'}}></View>
                        <Text style={{color: colorScheme.textTetiary}}>or</Text>
                        <View style={{borderWidth: 0.5, borderColor: colorScheme.divider, position: 'relative', width: '43%'}}></View>
                    </View>

                    <View style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                        <Text style={{...uiText.Text}}>Already have an account? </Text>
                        <Text style={{color: colorScheme.primaryPurple}} onPress={()=>{
                            navigation.replace('Auth', {screen: 'Login'})
                        }}> Login</Text>
                    </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default SignupScreen;