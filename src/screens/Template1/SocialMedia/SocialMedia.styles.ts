import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import colors from "../../../shared/theme/colors"

interface Styles {
    outerContainer: ViewStyle,
    inputStyles: ViewStyle,
    addButtonContainer: ViewStyle,
    saveButtonContainer: ViewStyle,
    errorText: TextStyle
}

export default () => {
    return StyleSheet.create<Styles>({
        outerContainer: {
            paddingHorizontal: 20,
            marginTop: 20
        },
        inputStyles: {
            marginVertical: 10
        },
        addButtonContainer: {
            alignItems:'flex-end',
            marginTop: 20
        },
        saveButtonContainer: {
            alignItems:'flex-end',
            marginTop: 10,
            paddingBottom: 20
        },
        errorText: {
            fontSize: 14,
            color: colors.colors.errorRed
        }
    })
}