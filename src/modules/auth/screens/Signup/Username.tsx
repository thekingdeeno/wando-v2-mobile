import { Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import useAuth from "../../../../hooks/useAuth";
import { colorScheme } from '../../../../shared/constants/colors';
import { useState } from 'react';
import styles from './Signup.style';
import TextField from '../../../../components/TextField';
import { uiText } from '../../../../shared/constants/ui-styles';
import Button from '../../../../components/Button';
import UserIcon from '../../../../asset/svg/User';

const UsernameScreen = () => {
    const navigation = useNavigation<any>();
    const { loginForm, login, handleLoginForm } = useAuth();
    const [hidePassword, setHidePassword] = useState<boolean>(true);

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
                                <Text style={{ ...uiText.Header, textAlign: 'center' }}>
                                    Setup a username
                                </Text>
                                <Text style={{ ...uiText.Text, color: colorScheme.textTetiary, textAlign: 'center' }}>
                                    Your username is how others will find you on Wando
                                </Text>
                            </View>

                            <View style={styles.formContainer}>
                                <TextField
                                    value={loginForm?.email}
                                    placeholder="Enter a username"
                                    label="Username"
                                    onChange={(e) => handleLoginForm(e, 'email')}
                                    LeftIcon={UserIcon}
                                />

                                <Button text="Login" onPress={()=>{}} color="primary" />

                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default UsernameScreen;