import { View } from "react-native"

interface ProfessionProps {
    route: any,
}
const Profession: React.FC<ProfessionProps> = ({ route }) => {
    console.log(route.params.globalState);

    return (
        <View>
            
        </View>
    )
}

export default Profession;