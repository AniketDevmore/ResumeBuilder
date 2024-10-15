import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Styles {
    outerContainer: ViewStyle,
    inputStyles: ViewStyle,
    addButtonContainer: ViewStyle,
    saveButtonContainer: ViewStyle,
}

export default () => {
    return StyleSheet.create<Styles>({
        outerContainer: {
            paddingHorizontal: 20,
            marginTop: 20,
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
        }
    })
}