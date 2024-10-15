import { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import createStyles from "./ExperiencePreview.styles";

interface ExperiencePreviewProps {
    details: any,
    removeHandler: (text: any) => void,
}

const ExperiencePreview: React.FC<ExperiencePreviewProps> = ({ details, removeHandler }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.viewTextContainer}>
                {
                    details.map((experience: any) => (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => removeHandler(experience.position)} style={styles.closeButton}><Text style={styles.close}>X</Text></TouchableOpacity>
                            <View>
                                <Text style={styles.positionStyles}>{experience.position}</Text>
                                <Text style={styles.companyText}>{experience.company}</Text>
                                <Text style={styles.periodText}>{experience.period}</Text>
                                <Text style={styles.viewtext}>{experience.explain}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default ExperiencePreview;
