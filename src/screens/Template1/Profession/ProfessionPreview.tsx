import { useMemo } from "react";
import { Text, View } from "react-native";
import createStyles from "./ProfessionPreview.styles";

interface ProfessionPreviewProps {
    details: any
}

const ProfessionPreview: React.FC<ProfessionPreviewProps> = ({ details }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={styles.outerContainer}>
            <Text style={styles.nameText}>{details.name}</Text>
            <Text style={styles.professionText}>{details.profession}</Text>
            <Text style={styles.descriptiontext}>{details.description}</Text>
        </View>
    )
}

export default ProfessionPreview;
