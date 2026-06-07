import { StyleSheet } from "react-native"
import { colorScheme } from "./colors"

export const uiText = StyleSheet.create({
    BigText: {
        fontSize: 30,
        fontFamily: 'Poppins Semibold',
        fontWeight: 'semibold',
        color: colorScheme.textPrimary
    },
    
    Header: {
        fontSize: 23,
        fontFamily: 'Poppins Semibold',
        fontWeight: 'semibold',
        color: colorScheme.textPrimary
    },

    Title: {
        fontSize: 18,
        fontFamily: 'Poppins Semibold',
        fontWeight: 'semibold',
         color: colorScheme.textPrimary
    },

    Text: {
        fontSize: 15,
        fontFamily: 'Poppins Regular',
        fontWeight: 'regular',
        color: colorScheme.textPrimary
    },

    TextSecondary: {
        fontSize: 13,
        fontFamily: 'Poppins Regular',
        fontWeight: 'regular',
        color: colorScheme.textSecondary
    },

    Caption: {
        fontSize: 11,
        fontFamily: 'Poppins Medium',
        fontWeight: 'regular',
        color: colorScheme.textSecondary
    }
})

// Logo / Brand	28–32	SemiBold
// Screen Titles	22–24	SemiBold
// Section Headers	18–20	Medium/Semi
// Body Text	15–16	Regular
// Secondary Text	13–14	Regular
// Captions / Meta	11–12	Regular