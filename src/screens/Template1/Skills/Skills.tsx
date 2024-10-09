import { View } from "react-native"

interface SkillsProps {
    route: any,
}
const Skills: React.FC<SkillsProps> = ({ route }) => {
    console.log(route.params.globalState);

    return (
        <View>
            
        </View>
    )
}

export default Skills;