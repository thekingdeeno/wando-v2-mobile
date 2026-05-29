import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { KeyboardAvoidingView, Platform, ScrollView, View, Text } from "react-native"
import { colorScheme } from "../../../../shared/constants/colors"
import styles from "../Signup/Signup.style"
import { uiText } from "../../../../shared/constants/ui-styles"
import Button from '../../../../components/Button';
import LockIcon from '../../../../asset/svg/Lock';
import EyeIcon from '../../../../asset/svg/EyeOpen';
import EyeClosedIcon from '../../../../asset/svg/EyeClosed';
import TextField from '../../../../components/TextField';
import useAuth from "../../../../hooks/useAuth"
import { useState } from "react"

const PasswordScreen = ({route}: any) => {
    const { passwordForm, setPasswordForm, signup, handlePasswordForm } = useAuth();
    const [hidePassword, setHidePassword] = useState<boolean>(true);

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme.background }}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
                >
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.screen}>
                            <View style={styles.textContainer}>
                                {/* back button and logo */}
                            <Text style={uiText.Header}>Set up your password</Text>
                            <Text style={{...uiText.TextSecondary, width: '70%', textAlign: 'center'}}>Create a strong password to keep your account secure.</Text>
                            </View>
                            <View style={styles.formContainer}>
                                <TextField
                                    value={passwordForm?.password}
                                    label="Password"
                                    placeholder="Enter your password"
                                    onChange={(e) => handlePasswordForm(e, 'password')}
                                    LeftIcon={LockIcon}
                                    RightIcon={hidePassword ? EyeClosedIcon : EyeIcon}
                                    RightIconClick={() => setHidePassword(!hidePassword)}
                                    secureText={hidePassword}
                                    LeftIconSize={16}
                                />

                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Text style={{...uiText.TextSecondary}}>Password strength:</Text>
                                    <Text style={{...uiText.TextSecondary }}>{passwordForm.strength < 25 && 'Weak'}
                                    {passwordForm.strength >= 25 && passwordForm.strength < 50 && 'Fair'}
                                    {passwordForm.strength >= 50 && passwordForm.strength < 75 && 'Good'}
                                    {passwordForm.strength >= 75 && 'Strong'}
                                    </Text>
                                </View>

                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 0, justifyContent: 'space-between'}}>
                                    {("1234").split("").map(i=>{
                                        let color = colorScheme.divider
                                        if ( Number(i)===1 && passwordForm.strength >= 25) {
                                            color = passwordForm.color
                                        }
                                        if ( Number(i)===2 && passwordForm.strength >= 50) {
                                            color = passwordForm.color
                                        }
                                        if ( Number(i)===3 && passwordForm.strength >= 75) {
                                            color = passwordForm.color
                                        }
                                        if ( Number(i)===4 && passwordForm.strength === 100){
                                            color = passwordForm.color
                                        }
                                        return(
                                            <View key={i} style={{width: '24.5%', height: 5, backgroundColor: color, borderRadius: 2.5, marginBottom: 4}}>
                                            </View>
                                        )
                                    })
                                        
                                    }
                                </View>

                                <TextField
                                    value={passwordForm?.confirmPassword}
                                    label="Confirm Password"
                                    placeholder="Confirm your password"
                                    onChange={(e) => handlePasswordForm(e, 'confirmPassword')}
                                    LeftIcon={LockIcon}
                                    RightIcon={hidePassword ? EyeClosedIcon : EyeIcon}
                                    RightIconClick={() => setHidePassword(!hidePassword)}
                                    secureText={hidePassword}
                                    LeftIconSize={16}
                                />
                                <View style={{marginTop: 50}}>

                                <Button text="Create Password" onPress={()=>signup(route.params.email)} color="primary" />
                                </View>
                            </View>
                            
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default PasswordScreen