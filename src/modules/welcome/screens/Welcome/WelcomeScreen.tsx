import { View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from "./WelcomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colorPallete from "../../../../shared/constants/colors";



const WelcomeScreen = ()=>{

    const navigation = useNavigation<any>()

    const LoginScreen = () => {
        navigation.navigate('Auth')
    }

    const SignupScreen = () => {
        navigation.navigate('Auth', {screen: 'Signup'})
    }


    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: 'black'}}>
                <View style={styles.screen}>
                    <View style={styles.screenHeader}>
                        <Text style={styles.logoText}>Wando</Text>
                    </View>
                    <View style={styles.introContainer}>
                        <Text style={styles.introTitle}>
                            Connecting Communities
                        </Text>
                        <Text style={styles.introMessage}>
                        Spread stories, meet people and make lots of meaningful connections. On Wando you'll be able to post blogs and communicate with other users and make new friends. no ads, no fees, no subscription. In future updates youll be able to join and build camps with people of similar interests.
                        </Text>
                    </View>
                    <View style={styles.myGreetingCard}>
                        <Image
                        source={require('../../../../asset/images/myPhoto.jpeg')}
                        style={{height:160, width: 140,resizeMode: 'cover', borderRadius: '50%'}}
                        />
                        <Text style={{color: 'white', padding: 10}}>
                            Hi, I'm Nwando Ifezue usually refered to as Deeno. Send me a DM on my wando account
                        </Text>
                        <Text style={{color:'pink'}}>
                            @deeno
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={{backgroundColor: 'black', ...styles.btn}} onPress={SignupScreen}>
                            <Text 
                            style={{textAlign: 'center', color: 'white'}}>
                                Join Wando
                            </Text>
                        </Pressable>
                        <Pressable style={{backgroundColor: 'white', ...styles.btn}} onPress={LoginScreen}>
                            <Text
                            style={{textAlign: 'center'}}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default WelcomeScreen