import { StyleSheet } from "react-native"
import { colorPallete, colorScheme, currentTheme } from "../../../../shared/constants/colors"
import { borderRad } from "../../../../shared/constants/ui-sizes"
import LoginStyles from "../Login/LoginScreen.style"

const styles = StyleSheet.create({

  otpInput: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  otpDigitBody: {
    width: 50,
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorScheme.button_border,
    backgroundColor: currentTheme === 'light' ? 'transparent' : '#1C1E2E',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  otpActiveBody: {
    borderColor: colorScheme.primaryPurple,
  },
  otpDigit: {
    color: colorScheme.textPrimary,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  resendOtpContainer: {
    marginBottom: 32,
  },
  resendOtpButton: {
    color: colorScheme.button_bg2,
    fontSize: 14,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  numpad: {
    width: "100%",
    paddingTop: 40
  },
  numpadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  numpadNum: {
    width: "32%",
    aspectRatio: 2,
    backgroundColor: currentTheme === 'light' ? 'transparent' : '#1C1E2E',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colorScheme.background2,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  numpadNumText: {
    color: colorScheme.textPrimary,
    fontSize: 22,
    fontWeight: "700",
  }
})

const comibedStyles = {...styles, ...LoginStyles}

export default comibedStyles