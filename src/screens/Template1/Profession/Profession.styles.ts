import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Styles {
    outerContainer: ViewStyle,
    inputStyles: ViewStyle,
    buttonContainer: ViewStyle
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
        buttonContainer: {
            alignItems:'flex-end',
            marginTop: 20
        }
    })
}