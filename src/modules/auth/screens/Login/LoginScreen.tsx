import { Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import useAuth from "../../../../hooks/useAuth";
import { colorScheme } from '../../../../shared/constants/colors';
import { useState } from 'react';
import styles from './LoginScreen.style';
import TextField from '../../../../components/TextField';
import MailIcon from '../../../../asset/svg/Mail';
import { uiText } from '../../../../shared/constants/ui-styles';
import Button from '../../../../components/Button';
import LockIcon from '../../../../asset/svg/Lock';
import EyeIcon from '../../../../asset/svg/EyeOpen';
import EyeClosedIcon from '../../../../asset/svg/EyeClosed';
import { useToast } from '../../../../components/Toast/ToastContext';

const LoginScreen = () => {
    const navigation = useNavigation<any>();
    const { loginForm, login, handleLoginForm } = useAuth();
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const toast = useToast();
    return (
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
                                <Text style={{ ...uiText.Header }}>
                                    Welcome back
                                </Text>
                                <Text style={{ ...uiText.Text, color: colorScheme.textTetiary }}>
                                    Log in to continue your journey
                                </Text>
                            </View>

                            <View style={styles.formContainer}>
                                <TextField
                                    value={loginForm?.email}
                                    placeholder="Enter your email"
                                    label="Email"
                                    onChange={(e) => handleLoginForm(e, 'email')}
                                    LeftIcon={MailIcon}
                                />
                                <TextField
                                    value={loginForm?.password}
                                    label="Password"
                                    placeholder="Enter your password"
                                    onChange={(e) => handleLoginForm(e, 'password')}
                                    LeftIcon={LockIcon}
                                    RightIcon={hidePassword ? EyeClosedIcon : EyeIcon}
                                    RightIconClick={() => setHidePassword(!hidePassword)}
                                    secureText={hidePassword}
                                    LeftIconSize={16}
                                />

                                <Text style={styles.linkBtn} onPress={() => null}>
                                    Forgot Password?
                                </Text>

                                <Button text="Login" onPress={() => {
                                    if (!loginForm.email || !loginForm.password) {
                                        toast.error("",'Please fill in all fields')
                                        return;
                                    }
                                    login()
                                }} color={loginForm.email && loginForm.password ? 'primary' : 'secondary'} />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingVertical: 25 }}>
                                    <View style={{ borderWidth: 0.5, borderColor: colorScheme.divider, width: '43%' }} />
                                    <Text style={{ color: colorScheme.textTetiary }}>or</Text>
                                    <View style={{ borderWidth: 0.5, borderColor: colorScheme.divider, width: '43%' }} />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={{ ...uiText.Text }}>Don't have an account? </Text>
                                    <Text
                                        style={{ color: colorScheme.primaryPurple }}
                                        onPress={() => navigation.replace('Auth', { screen: 'Signup' })}
                                    >
                                        Sign up
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default LoginScreen;