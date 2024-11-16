import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, View, Alert, Text } from "react-native";
import createStyles from './SocialMedia.styles';
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import { TextInput } from "react-native-paper";
import SocialMediaPreview from "./SocialMediaPreview";

interface SocialMediaProps {
    route: any;
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

    const [errors, setErrors] = useState<any>({});

    useEffect(() => {
        const socialMediaData = route.params.globalState.find((ele: any) => ele.id === 'socialMedia');
        if (socialMediaData?.socialMedia) {
            setDetails(socialMediaData.socialMedia);
        }
    }, [route]);

    const validateFields = () => {
        const newErrors: any = {};

        // Email validation
        if (!details.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        // Phone validation (numeric and 10 digits)
        if (!details.phone || !/^\d{10}$/.test(details.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }

        // City validation (non-empty)
        if (!details.city) {
            newErrors.city = "City cannot be empty.";
        }

        // // LinkedIn URL validation (basic check for URL format)
        // if (!details.linkedIn || !/^https?:\/\/.+/.test(details.linkedIn)) {
        //     newErrors.linkedIn = "Enter a valid LinkedIn URL.";
        // }

        // // Skype validation (non-empty)
        // if (!details.skype) {
        //     newErrors.skype = "Skype ID cannot be empty.";
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onChangeHandler = (value: string, key: keyof typeof details) => {
        setDetails((prevDetails:any) => ({ ...prevDetails, [key]: value }));
        setErrors((prevErrors:any) => ({ ...prevErrors, [key]: '' })); // Clear error for this field
    };

    const saveHandler = () => {
        if (validateFields()) {
            const newData = route.params.globalState.map((ele: any) =>
                ele.id === 'socialMedia' ? { ...ele, socialMedia: details } : ele
            );
            route.params.setGlobalState(newData);
            navigation.goBack();
        } else {
            Alert.alert("Validation Error", "Please correct the highlighted fields.");
        }
    };

    return (
        <ScrollView style={styles.outerContainer}>
            <SocialMediaPreview details={details} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Email"
                    value={details.email}
                    style={styles.inputStyles}
                    onChangeText={(text) => onChangeHandler(text, 'email')}
                    multiline
                    error={!!errors.email}
                />
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                
                <TextInput
                    mode="outlined"
                    label="Mobile No."
                    value={details.phone}
                    style={styles.inputStyles}
                    onChangeText={(text) => onChangeHandler(text, 'phone')}
                    multiline
                    maxLength={10}
                    keyboardType="numeric"
                    error={!!errors.phone}
                />
                {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

                <TextInput
                    mode="outlined"
                    label="City"
                    value={details.city}
                    style={styles.inputStyles}
                    onChangeText={(text) => onChangeHandler(text, 'city')}
                    multiline
                    error={!!errors.city}
                />
                {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}

                <TextInput
                    mode="outlined"
                    label="LinkedIn"
                    value={details.linkedIn}
                    style={styles.inputStyles}
                    onChangeText={(text) => onChangeHandler(text, 'linkedIn')}
                    multiline
                    error={!!errors.linkedIn}
                />
                {errors.linkedIn && <Text style={styles.errorText}>{errors.linkedIn}</Text>}

                <TextInput
                    mode="outlined"
                    label="Skype"
                    value={details.skype}
                    style={styles.inputStyles}
                    onChangeText={(text) => onChangeHandler(text, 'skype')}
                    multiline
                    error={!!errors.skype}
                />
                {errors.skype && <Text style={styles.errorText}>{errors.skype}</Text>}
            </View>
            <View style={styles.saveButtonContainer}>
                <SaveButton onPress={saveHandler} />
            </View>
        </ScrollView>
    );
};

export default SocialMedia;
