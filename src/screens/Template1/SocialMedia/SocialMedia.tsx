import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import createStyles from './SocialMedia.styles'
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import { TextInput } from "react-native-paper";
import SocialMediaPreview from "./SocialMediaPreview";

interface SocialMediaProps {
    route: any,
}
const SocialMedia: React.FC<SocialMediaProps> = ({ route }) => {
    const navigation = useNavigation();
    const styles = useMemo(() => createStyles(), []);
    const [details, setDetails] = useState<any>({
        email: '',
        phone: '',
        city: '',
        linkedIn: '',
        skype: ''
    });

    const onChangeHandler = (text: any, key: any) => {
        if (key === 'email') {
            setDetails({
                email: text,
                phone: details.phone,
                city: details.city,
                linkedIn: details.linkedIn,
                skype: details.skype
            })
        } else if (key === 'phone') {
            setDetails({
                email: details.email,
                phone: text,
                city: details.city,
                linkedIn: details.linkedIn,
                skype: details.skype
            })
        } else if (key === 'city') {
            setDetails({
                email: details.email,
                phone: details.phone,
                city: text,
                linkedIn: details.linkedIn,
                skype: details.skype
            })
        }else if (key === 'linkedIn') {
            setDetails({
                email: details.email,
                phone: details.phone,
                city: details.city,
                linkedIn: text,
                skype: details.skype
            })
        }else if (key === 'skype') {
            setDetails({
                email: details.email,
                phone: details.phone,
                city: details.city,
                linkedIn: details.linkedIn,
                skype: text
            })
        }
    };

    const saveHandler = () => {
        console.log(details);
        let newData = route.params.globalState.map((ele: any) => {
            if (ele.id === 'socialMedia') {
                return { ...ele, socialMedia: details }
            } else {
                return ele;
            }
        })
        route.params.setGlobalState(newData);
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.outerContainer}>
            <SocialMediaPreview details={details} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Email"
                    value={details.email}
                    style={styles.inputStyles}
                    onChangeText={text => onChangeHandler(text, 'email')}
                    multiline={true}
                />
                <TextInput
                    mode="outlined"
                    label="Mobile No."
                    value={details.phone}
                    style={styles.inputStyles}
                    onChangeText={text => onChangeHandler(text, 'phone')}
                    multiline={true}
                    maxLength={10}
                    keyboardType='numeric'
                />
                <TextInput
                    mode="outlined"
                    label="City"
                    value={details.city}
                    style={styles.inputStyles}
                    onChangeText={text => onChangeHandler(text, 'city')}
                    multiline={true}
                />
                <TextInput
                    mode="outlined"
                    label="LinkedIn"
                    value={details.linkedIn}
                    style={styles.inputStyles}
                    onChangeText={text => onChangeHandler(text, 'linkedIn')}
                    multiline={true}
                />
                <TextInput
                    mode="outlined"
                    label="Skype"
                    value={details.skype}
                    style={styles.inputStyles}
                    onChangeText={text => onChangeHandler(text, 'skype')}
                    multiline={true}
                />
            </View>
            <View style={styles.saveButtonContainer}>
                <SaveButton onPress={saveHandler} />
            </View>
        </ScrollView>
    )
}

export default SocialMedia;