import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import colors from "../../../shared/theme/colors"

interface Styles {
    outerContainer: ViewStyle,
    nameText: TextStyle,
    professionText: TextStyle,
    descriptiontext: TextStyle
}

export default () => {
    return StyleSheet.create<Styles>({
        outerContainer: {
            marginVertical: 20,
            borderWidth: 1,
            borderColor: colors.colors.lightGrayColor,
            padding: 5
        },
        nameText: {
            fontWeight: '900',
            fontSize: 18,
            color: colors.colors.headerColor
        },
        professionText: {
            fontWeight: '700',
            fontSize: 15,
            color: colors.colors.grayTextColor
        },
        descriptiontext: {
            fontWeight: '500',
            fontSize: 12,
            color: colors.colors.blackTextColor
        }
    })
}