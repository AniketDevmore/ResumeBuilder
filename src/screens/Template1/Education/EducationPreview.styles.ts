import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import colors from "../../../shared/theme/colors"

interface Styles {
    outerContainer: ViewStyle,
    viewTextContainer: ViewStyle,
    viewtext: TextStyle,
    positionStyles: TextStyle,
    companyText: TextStyle,
    periodText: TextStyle,
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
            flexDirection: 'column',
            flexWrap: 'wrap',
        },
        positionStyles: {
            fontWeight: '900',
            fontSize: 18,
            color: colors.colors.blackTextColor
        },
        companyText: {
            fontWeight: '700',
            fontSize: 15,
            color: colors.colors.blackTextColor
        },
        periodText: {
            fontWeight: '500',
            fontSize: 13,
            color: colors.colors.grayTextColor
        },
        viewtext: {
            fontWeight: '500',
            fontSize: 12,
            color: colors.colors.blackTextColor
        },
        container: {
            width: '100%',
            position: 'relative',
            borderWidth: 1,
            borderColor: colors.colors.grayTextColor,
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