import { StyleSheet, TextStyle, ViewStyle } from "react-native"

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
            borderColor: '#ccc',
            padding: 5
        },
        nameText: {
            fontWeight: '900',
            fontSize: 18,
            color: '#3366cc'
        },
        professionText: {
            fontWeight: '700',
            fontSize: 15,
            color: '#808080'
        },
        descriptiontext: {
            fontWeight: '500',
            fontSize: 12,
            color: '#000000'
        }
    })
}