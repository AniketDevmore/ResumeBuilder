import { useEffect, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import createStyles from "./LanguagesPreview.styles";

interface LanguagesPreviewProps {
    details: any,
    removeHandler: (text:any) => void,
}

const LanguagesPreview: React.FC<LanguagesPreviewProps> = ({ details, removeHandler }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.viewTextContainer}>
                {
                    details.map((language: any) => (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>removeHandler(language.language)} style={styles.closeButton}><Text style={styles.close}>X</Text></TouchableOpacity>
                            <Text style={styles.viewtext}>{language.language}</Text>
                            <Text style={styles.proficiencyText}>{language.proficiency}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default LanguagesPreview;
