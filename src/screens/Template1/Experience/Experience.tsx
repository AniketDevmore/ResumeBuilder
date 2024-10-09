import { View } from "react-native"

interface ExperienceProps {
    route: any,
}
const Experience: React.FC<ExperienceProps> = ({ route }) => {
    console.log(route.params.globalState);

    return (
        <View>
            
        </View>
    )
}

export default Experience;