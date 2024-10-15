import { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import createStyles from "./EducationPreview.styles";

interface EducationPreviewProps {
    details: any,
    removeHandler: (text: any) => void,
}

const EducationPreview: React.FC<EducationPreviewProps> = ({ details, removeHandler }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.viewTextContainer}>
                {
                    details.map((education: any) => (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => removeHandler(education.degree)} style={styles.closeButton}><Text style={styles.close}>X</Text></TouchableOpacity>
                            <View>
                                <Text style={styles.positionStyles}>{education.degree}</Text>
                                <Text style={styles.companyText}>{education.university}</Text>
                                <Text style={styles.periodText}>{education.period}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default EducationPreview;
