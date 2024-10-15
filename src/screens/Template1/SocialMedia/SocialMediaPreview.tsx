import { useMemo } from "react";
import { Text, View } from "react-native";
import createStyles from "./SocialMediaPreview.styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SocialMediaPreviewProps {
    details: any,
}

const SocialMediaPreview: React.FC<SocialMediaPreviewProps> = ({ details }) => {
    const styles = useMemo(() => createStyles(), []);
    console.log('details----------->>>', details)
    return (
        <View style={styles.outerContainer}>
            <View style={styles.viewTextContainer}>
                {
                    !!details.email && <View style={styles.viewTextContainer}>
                        <Icon style={styles.iconStyle} name={'email'} size={20} color={'#000'}/>
                        <Text style={styles.textStyles}>{details.email}</Text>
                    </View>
                }
                {
                    !!details.phone && <View style={styles.viewTextContainer}>
                        <Icon style={styles.iconStyle} name={'cellphone'} size={20} color={'#000'}/>
                        <Text style={styles.textStyles}>{details.phone}</Text>
                    </View>
                }
                {
                    !!details.city && <View style={styles.viewTextContainer}>
                        <Icon style={styles.iconStyle} name={'map-marker'} size={20} color={'#000'}/>
                        <Text style={styles.textStyles}>{details.city}</Text>
                    </View>
                }
                {
                    !!details.linkedIn && <View style={styles.viewTextContainer}>
                        <Icon style={styles.iconStyle} name={'linkedin'} size={20} color={'#000'}/>
                        <Text style={styles.textStyles}>{details.linkedIn}</Text>
                    </View>
                }
                {
                    !!details.skype && <View style={styles.viewTextContainer}>
                        <Icon style={styles.iconStyle} name={'skype'} size={20} color={'#000'}/>
                        <Text style={styles.textStyles}>{details.skype}</Text>
                    </View>
                }
            </View>
        </View>
    )
}

export default SocialMediaPreview;
