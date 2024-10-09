import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Styles {
  outermostContainer: ViewStyle,
  dragableContainer: ViewStyle,
  rowItem: ViewStyle,
  text: TextStyle,
  outerContainer: ViewStyle,
  pressableContainer: ViewStyle,
  previewContainer: ViewStyle
}

export default () => {
  return StyleSheet.create<Styles>({
    outermostContainer: {
      marginTop: 20,
      paddingHorizontal: 20
    },
    dragableContainer :{ 
      paddingBottom: 20 
    },
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
    outerContainer: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 10,
      borderRadius: 20,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { height: 10, width: 10 },
      shadowRadius: 10,
      elevation: 8,
    },
    pressableContainer: {
      height: '100%',
      justifyContent: 'center'
    },
    previewContainer :{
      marginTop: 20,
      alignItems: 'flex-end'
  }
  })
}