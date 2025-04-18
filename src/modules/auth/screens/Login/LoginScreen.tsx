import {Text, StyleSheet, View, Image, Pressable, TextInput, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import useAuth from "../../../../hooks/useAuth";

const LoginScreen = () => {
    const navigation = useNavigation();
    const {loginForm, login} = useAuth()

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text>
                        Login Screen
                    </Text>
                </View>
                <View>
                    <TextInput value={loginForm?.email} />
                    <TextInput value={loginForm?.password} />
                    <Button title="submit" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default LoginScreen