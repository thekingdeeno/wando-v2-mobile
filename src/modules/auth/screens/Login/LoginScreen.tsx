import {Text, StyleSheet, View, Image, Pressable, TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import useAuth from "../../../../hooks/useAuth";
import {colorPallete, colorScheme, currentTheme} from '../../../../shared/constants/colors';
import { useEffect, useState } from 'react';
import styles from './LoginScreen.style';
import TextField from '../../../../components/TextField';
import MailIcon from '../../../../asset/svg/Mail';
import { uiText } from '../../../../shared/constants/ui-styles';
import Button from '../../../../components/Button';
import LockIcon from '../../../../asset/svg/Lock';
import EyeIcon from '../../../../asset/svg/EyeOpen';
import EyeOffIcon from '../../../../asset/svg/EyeOff';
import EyeClosedIcon from '../../../../asset/svg/EyeClosed';

const LoginScreen = () => {
    const navigation = useNavigation<any>();
    const {loginForm, login, handleLoginForm} = useAuth()
    const [hidePassword, setHidePassword] = useState<boolean>(true)

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: colorScheme.background,}}>
                <View style={styles.screen}>
                    <View style={styles.textContainer}>
                            <Text style={{...uiText.Header}}>
                                Welcome back
                            </Text>

                            <Text style={{...uiText.Text, color: colorScheme.textTetiary}}>
                                Log in to continue your journey
                            </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TextField
                            value={loginForm?.email





                                
                            }
                            placeholder='Enter your email'
                            label='Email'
                            onChange={(e)=>handleLoginForm(e, 'email')}
                            LeftIcon={MailIcon}
                        />
                        <TextField
                            value={loginForm?.password}
                            label='Password'
                            placeholder='Enter your password'
                            onChange={(e)=>handleLoginForm(e, 'password')}
                            LeftIcon={LockIcon}
                            RightIcon={hidePassword ? EyeClosedIcon : EyeIcon}
                            RightIconClick={()=>setHidePassword(!hidePassword)}
                            secureText={hidePassword}
                            LeftIconSize={16}

                        />

                        <Text style={{...styles.linkBtn}} onPress={()=>{
                            navigation.replace('Auth', {screen: 'Signup'})
                        }}>
                        {`Forgot Password?`}
                    </Text>

                    <Button text='Login' onPress={login} color='primary' />

                    <View style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', paddingVertical: 25}}>
                        <View style={{borderWidth: 0.5, borderColor: colorScheme.divider, position: 'relative', width: '43%'}}></View>
                        <Text style={{color: colorScheme.textTetiary}}>or</Text>
                        <View style={{borderWidth: 0.5, borderColor: colorScheme.divider, position: 'relative', width: '43%'}}></View>
                    </View>

                    <View style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                        <Text style={{...uiText.Text}}>Don't have and account? </Text>
                        <Text style={{color: colorScheme.primaryPurple}} onPress={()=>{
                            navigation.replace('Auth', {screen: 'Signup'})
                        }}> Sign up</Text>
                    </View>

                    </View>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default LoginScreen