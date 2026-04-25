import { Children, ReactElement, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { colorScheme } from "../shared/constants/colors";

interface Props {
    hideModal: ()=>void
    children: ReactElement,
    modalStyle?: object
}


const SlideUpModal = ({ hideModal, modalStyle, children}: Props)=>{

    const actionSheetRef = useRef<ActionSheetRef>(null);

    useEffect(()=>{
      actionSheetRef.current && actionSheetRef.current.show()
    }, [])


    return(
    <ActionSheet 
        ref={actionSheetRef}
        gestureEnabled
        onClose={()=>hideModal()}
        
        containerStyle={{
            backgroundColor: colorScheme.baseBgColorOff
        }}
        >
            {children}
    </ActionSheet>
    )
}


export default SlideUpModal