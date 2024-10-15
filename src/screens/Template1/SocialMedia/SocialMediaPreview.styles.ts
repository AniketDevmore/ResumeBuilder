import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import colors from "../../../shared/theme/colors"

interface Styles {
    outerContainer: ViewStyle,
    viewTextContainer: ViewStyle,
    iconStyle: ViewStyle,
    textStyles: TextStyle
}

export default () => {
    return StyleSheet.create<Styles>({
        outerContainer: {
            marginVertical: 20,
            borderWidth: 1,
            borderColor: colors.colors.lightGrayColor,
            padding: 5,
            minHeight: 50
        },
        viewTextContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            paddingRight: 10
        },
        iconStyle: {
            paddingHorizontal: 5
        },
        textStyles: {
            fontSize: 13,
            color: colors.colors.blackTextColor,
        }
    })
}