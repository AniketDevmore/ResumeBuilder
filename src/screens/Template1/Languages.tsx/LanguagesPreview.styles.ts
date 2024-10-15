import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import colors from "../../../shared/theme/colors"

interface Styles {
    outerContainer: ViewStyle,
    viewTextContainer: ViewStyle,
    viewtext: TextStyle,
    proficiencyText: TextStyle,
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
            fontSize: 15,
            color: colors.colors.blackTextColor
        },
        proficiencyText: {
            fontSize: 12,
            color: colors.colors.headerColor
        },
        container: {
            borderWidth: 1,
            borderColor: colors.colors.grayTextColor,
            width: '100%',
            position: 'relative',
            borderRadius: 12,
            padding: 10,
            marginTop: 2
        },
        closeButton: {
            top: 0,
            alignItems: 'flex-end',
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