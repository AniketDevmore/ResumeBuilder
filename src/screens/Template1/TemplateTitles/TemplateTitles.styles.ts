import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Styles {
    rowItem: ViewStyle,
    text: TextStyle,
    outerContainer: ViewStyle,
    pressableContainer: ViewStyle
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
          outerContainer:{
            flex: 1,
            marginTop:10,
            marginHorizontal: 10,
            borderRadius: 20, 
            height: 50,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {height: 10, width: 10},
            shadowRadius: 10,
            elevation: 8,
        },
          pressableContainer:{
            height:'100%',
            justifyContent:'center'
          }
    })
}