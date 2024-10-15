
import { useEffect, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import createStyles from "./OrganizationPreview.styles";

interface OrganizationPreviewProps {
    details: any,
    removeHandler: (text:any) => void,
}

const OrganizationPreview: React.FC<OrganizationPreviewProps> = ({ details, removeHandler }) => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.viewTextContainer}>
                {
                    details.map((organization: any) => (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={()=>removeHandler(organization)} style={styles.closeButton}><Text style={styles.close}>X</Text></TouchableOpacity>
                            <Text style={styles.viewtext}>{organization}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default OrganizationPreview;
