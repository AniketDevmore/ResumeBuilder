import { useNavigation } from "@react-navigation/native";
import { useMemo, useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import createStyles from "./Organization.styles";
import { TextInput } from "react-native-paper";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import OrganizationPreview from "./OrganizationPreview";

interface OrganizationProps {
    route: any;
}

const Organization: React.FC<OrganizationProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<string[]>([]);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        const existingLanguages = route.params.globalState.find((ele: any) => ele.id === 'organization');
        if (existingLanguages?.organization?.length) {
            setDetails(existingLanguages.organization);
        }
    }, [route]);

    const addHandler = useCallback(() => {
        if (!text.trim()) {
            console.log("Please enter a valid organization.");
            return;
        }

        setDetails((prevDetails) => [...prevDetails, text.trim()]);
        setText('');
    }, [text]);

    const SaveHandler = useCallback(() => {
        const newData = route.params.globalState.map((ele: any) =>
            ele.id === 'organization' ? { ...ele, organization: details } : ele
        );

        route.params.setGlobalState(newData);
        navigation.goBack();
    }, [details, route, navigation]);

    const removeHandler = useCallback((organizationToRemove: string) => {
        setDetails((prevDetails) =>
            prevDetails.filter((item) => item !== organizationToRemove)
        );
    }, []);

    return (
        <View style={styles.outerContainer}>
            <OrganizationPreview details={details} removeHandler={removeHandler} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Organization"
                    value={text}
                    style={styles.inputStyles}
                    onChangeText={setText}
                    multiline
                />
            </View>
            <View style={styles.addButtonContainer}>
                <AddButton onPress={addHandler} />
            </View>
            <View style={styles.saveButtonContainer}>
                <SaveButton onPress={SaveHandler} />
            </View>
        </View>
    );
};

export default Organization;
