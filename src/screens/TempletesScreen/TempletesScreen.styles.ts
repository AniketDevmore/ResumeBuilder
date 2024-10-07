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
            backgroundColor:'gray'
        },
        templates: {
            marginTop: 15,

        },
        templateImg: {
            height: 150,
            width: 150,
            borderRadius: 50
        }
    })
})