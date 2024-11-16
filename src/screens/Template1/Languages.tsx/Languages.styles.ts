import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import colors from "../../../shared/theme/colors"

interface Styles {
    outerContainer: ViewStyle,
    inputStyles: ViewStyle,
    addButtonContainer: ViewStyle,
    saveButtonContainer: ViewStyle,
    dropdown: ViewStyle
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
            marginTop: 150,
            paddingBottom: 20
        },
        dropdown: {
            marginBottom: 10,
            backgroundColor: colors.colors.whiteTextColor,
            padding: 15,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.colors.grayTextColor
        },
    })
}