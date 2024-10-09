import { View } from "react-native"

interface EducationProps {
    route: any,
}
const Education: React.FC<EducationProps> = ({ route }) => {
    console.log(route.params.globalState);

    return (
        <View>
            
        </View>
    )
}

export default Education;