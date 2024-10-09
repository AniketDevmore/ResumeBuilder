import { View } from "react-native"

interface LanguagesProps {
    route: any,
}
const Languages: React.FC<LanguagesProps> = ({ route }) => {
    console.log(route.params.globalState);

    return (
        <View>
            
        </View>
    )
}

export default Languages;