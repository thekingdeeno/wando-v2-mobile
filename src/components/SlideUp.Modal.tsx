import { ReactElement } from "react";
import { Pressable, StyleSheet, View } from "react-native"

    interface Props {
        active: boolean
        fullPage?: boolean,
        children: ReactElement,
        changeVis: (visibility: any)=>void,
    }

    const SlideUpModal = ({active, fullPage, children, changeVis}: Props) => {

        return(
            <Pressable style={style.container} onPressIn={()=>{changeVis(!active)}}>
                <View style={style.section}>
                    {children}
                </View>
            </Pressable>
        )
};

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        zIndex: 2,
        backgroundColor: '#7878784e',
        position:'absolute',
    },
    section: {
        minHeight: '35%',
        width: '100%',
        backgroundColor: 'grey',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})

export default SlideUpModal