import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Styles {
    rowItem: ViewStyle,
    text: TextStyle,
}

export default () => {
    return StyleSheet.create<Styles>({
        rowItem: {
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
          },
          text: {
            color: "#000",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          },
    })
}