import { Button, SafeAreaView, TextInput, View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../../../hooks/useAuth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import colorPallete from "../../../../shared/constants/colors";


const SignupScreen = () => {
    const navigation = useNavigation();

    const {signupForm} = useAuth();

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
                        <TextInput value={signupForm?.firstName} placeholder="First Name" style={style.formInput} />
                        <TextInput value={signupForm?.lastName} placeholder="Last Name" style={style.formInput} />
                        <TextInput value={signupForm?.email} placeholder="Email" style={style.formInput} />
                        <TextInput value={signupForm?.phoneNumber} placeholder="Phone Number" style={style.formInput} />
                        <TextInput value={signupForm?.password} placeholder="Password" style={style.formInput} />
                    </View>
                    <Pressable style={style.submitBtn}>
                            <Text style={{color: 'white', textAlign: 'center'}}>
                                Sign Up
                            </Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
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
    }
})


export default SignupScreen;