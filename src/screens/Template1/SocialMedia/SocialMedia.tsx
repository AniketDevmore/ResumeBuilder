import { View } from "react-native"

interface SocialMediaProps {
    route: any,
}
const SocialMedia: React.FC<SocialMediaProps> = ({ route }) => {
    console.log(route.params.globalState);

    return (
        <View>
            
        </View>
    )
}

export default SocialMedia;