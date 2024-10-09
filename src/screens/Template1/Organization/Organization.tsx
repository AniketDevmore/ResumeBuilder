import { View } from "react-native"

interface OrganizationProps {
    route: any,
}
const Organization: React.FC<OrganizationProps> = ({ route }) => {
    console.log(route.params.globalState);

    return (
        <View>
            
        </View>
    )
}

export default Organization;