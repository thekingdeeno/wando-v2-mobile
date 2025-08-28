import {Text, StyleSheet, View, Image, Pressable, TextInput, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import useAuth from "../../../../hooks/useAuth";
import {colorPallete, colorScheme, currentTheme} from '../../../../shared/constants/colors';
import { useEffect } from 'react';

const LoginScreen = () => {
    const navigation = useNavigation<any>();
    const {loginForm, login, handleLoginForm} = useAuth()

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: colorScheme.baseBgColor,}}>
                <View style={style.screen}>
                    <View>
                            <Text style={style.header}>
                                Wando
                            </Text>
                    </View>
                    <View style={style.formContainer}>
                        <TextInput value={loginForm?.email.toLowerCase()} style={style.formInput} placeholder='Email'  onChange={(e)=>handleLoginForm(e, 'email')}/>
                        <TextInput value={loginForm?.password} secureTextEntry style={style.formInput} placeholder='Password'  onChange={(e)=>handleLoginForm(e, 'password')}/>
                    </View>
                    <Pressable style={style.submitBtn} 
                        onPress={()=>{
                            login()
                        }
                    }>
                            <Text style={{color: colorScheme.baseBgColor, textAlign: 'center'}} >
                                Login
                            </Text>
                    </Pressable>
                    <Text style={{...style.linkBtn}} onPress={()=>{
                        navigation.replace('Auth', {screen: 'Signup'})
                    }}>
                        {`I don't have an account`}
                    </Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

const style = StyleSheet.create({
    screen: {
        padding: 25,
        height: '100%'
    },
    header: {
        color: colorScheme.textColor, textAlign: 'center', fontSize: 40, paddingBottom: 20
    },
    formContainer: {
        backgroundColor: colorPallete.cardPurple,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 10,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 10,
    },
    formInput: {
        backgroundColor: colorScheme.baseBgColor,
        color: colorScheme.textColor,
        opacity: 0.7,
        marginTop: 10,
        // marginLeft: 10,
        // marginRight: 10,
        padding: 15,
        borderRadius: 5
    },
    submitBtn: {
        backgroundColor: colorScheme.baseFgColor,
        padding: 20,
        marginTop: 20,
        borderRadius: 10
    },

    linkBtn: {
        color: colorScheme.baseFgColor,
        textAlign: 'center',
        marginTop: 30,
        marginLeft: 70,
        marginRight: 70,
    }
})

export default LoginScreen