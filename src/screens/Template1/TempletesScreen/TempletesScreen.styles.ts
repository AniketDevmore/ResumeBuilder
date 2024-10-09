import { ImageStyle, StyleSheet, ViewStyle } from "react-native"

interface Styles {
    commonFlex: ViewStyle,
    templateContainer: ViewStyle,
    templates: ViewStyle,
    templateImg: ImageStyle
}

export default (() => {
    return StyleSheet.create<Styles>({
        commonFlex: {
            flex: 1
        },
        templateContainer: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        templates: {
            marginTop: 15,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {height: 10, width: 10},
            shadowRadius: 10,
            elevation: 8,
            borderRadius: 20
        },
        templateImg: {
            height: 200,
            width: 150,
        }
    })
})