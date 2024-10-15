import { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./SocialMediaPreview.styles";

interface SocialMediaPreviewProps {
    details: any,
}

const SocialMediaPreview: React.FC<SocialMediaPreviewProps> = ({ details }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.viewTextContainer}>
            </View>
        </View>
    )
}

export default SocialMediaPreview;
