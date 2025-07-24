import {Text, StyleSheet, View, Image, Pressable, TextInput, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import useAuth from "../../../../hooks/useAuth";
import {colorPallete} from '../../../../shared/constants/colors';

const LoginScreen = () => {
    const navigation = useNavigation<any>();
    const {loginForm, login, handleLoginForm} = useAuth()

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: colorPallete.basePurple,}}>
                <View style={style.screen}>
                    <View>
                            <Text style={style.header}>
                                Wando
                            </Text>
                    </View>
                    <View style={style.formContainer}>
                        <TextInput value={loginForm?.email} style={style.formInput} placeholder='Email'  onChange={(e)=>handleLoginForm(e, 'email')}/>
                        <TextInput value={loginForm?.password} style={style.formInput} placeholder='Password'  onChange={(e)=>handleLoginForm(e, 'password')}/>
                    </View>
                    <Pressable style={style.submitBtn} 
                        onPress={()=>{
                            login()
                        }
                    }>
                            <Text style={{color: 'white', textAlign: 'center'}} >
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
        color: 'white', textAlign: 'center', fontSize: 40, paddingBottom: 20
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
        backgroundColor: 'white',
        opacity: 0.5,
        marginTop: 10,
        // marginLeft: 10,
        // marginRight: 10,
        padding: 15,
        borderRadius: 5
    },
    submitBtn: {
        backgroundColor: 'black',
        padding: 20,
        marginTop: 20,
        borderRadius: 10
    },

    linkBtn: {
        color: 'white',
        textAlign: 'center',
        marginTop: 30,
        marginLeft: 70,
        marginRight: 70,
    }
})

export default LoginScreen