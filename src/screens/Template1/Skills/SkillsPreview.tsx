import { useEffect, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import createStyles from "./SkillsPreview.styles";

interface SkillsPreviewProps {
    details: any,
    removeHandler: (text:any) => void,
}

const SkillsPreview: React.FC<SkillsPreviewProps> = ({ details, removeHandler }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.viewTextContainer}>
                {
                    details.map((skill: any) => (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>removeHandler(skill)} style={styles.closeButton}><Text style={styles.close}>X</Text></TouchableOpacity>
                            <Text style={styles.viewtext}>{skill}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default SkillsPreview;
