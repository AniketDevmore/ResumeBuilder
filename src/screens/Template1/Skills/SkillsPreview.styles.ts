import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import colors from "../../../shared/theme/colors"

interface Styles {
    outerContainer: ViewStyle,
    viewTextContainer: ViewStyle,
    viewtext: TextStyle,
    closeButton: ViewStyle,
    container: ViewStyle,
    close: TextStyle
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
        },
        viewtext: {
            backgroundColor: colors.colors.headerColor,
            paddingHorizontal: 20,
            paddingVertical: 5,
            color: colors.colors.whiteTextColor,
            minWidth: 10,
            minHeight: 10,
            margin: 5,
            fontSize: 15,
            borderRadius: 20
        },
        container: {
            position: 'relative',
        },
        closeButton: {
            top: 22,
            alignItems:'flex-end',
            zIndex: 10
        },
        close: {
            color: colors.colors.whiteTextColor,
            backgroundColor: colors.colors.blackTextColor,
            width: 20,
            height: 20,
            textAlign: 'center',
            borderRadius: 50
        }
    })
}