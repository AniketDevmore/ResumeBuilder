import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState, useCallback } from "react";
import { ScrollView, View } from "react-native";
import createStyles from "./Experience.styles";
import ExperiencePreview from "./ExperiencePreview";
import { TextInput } from "react-native-paper";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";

interface ExperienceProps {
    route: any;
}

const Experience: React.FC<ExperienceProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<any[]>([]);
    const [position, setPosition] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [period, setPeriod] = useState<string>('');
    const [explain, setExplain] = useState<string>('');

    useEffect(() => {
        const experienceData = route.params.globalState.find(
            (ele: any) => ele.id === 'experience'
        )?.experience;

        if (experienceData?.length) {
            setDetails(experienceData);
        }
    }, [route]);

    const addHandler = useCallback(() => {
        if (!position || !company || !period || !explain) {
            console.log('Please fill in all fields before adding.');
            return;
        }

        const newExperience = { position, company, period, explain };

        setDetails((prevDetails) => [...prevDetails, newExperience]);

        setPosition('');
        setCompany('');
        setPeriod('');
        setExplain('');
    }, [position, company, period, explain]);

    const removeHandler = useCallback((text: string) => {
        setDetails((prevDetails) =>
            prevDetails.filter((item) => item.position !== text)
        );
    }, []);

    const SaveHandler = useCallback(() => {
        const newData = route.params.globalState.map((ele: any) =>
            ele.id === 'experience' ? { ...ele, experience: details } : ele
        );

        route.params.setGlobalState(newData);
        navigation.goBack();
    }, [details, route, navigation]);

    return (
        <ScrollView style={styles.outerContainer} keyboardShouldPersistTaps="always">
            <ExperiencePreview details={details} removeHandler={removeHandler} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Position"
                    value={position}
                    style={styles.inputStyles}
                    onChangeText={setPosition}
                    multiline
                />
                <TextInput
                    mode="outlined"
                    label="Company"
                    value={company}
                    style={styles.inputStyles}
                    onChangeText={setCompany}
                    multiline
                />
                <TextInput
                    mode="outlined"
                    label="Duration"
                    value={period}
                    style={styles.inputStyles}
                    onChangeText={setPeriod}
                    multiline
                />
                <TextInput
                    mode="outlined"
                    label="Description"
                    value={explain}
                    style={styles.inputStyles}
                    onChangeText={setExplain}
                    multiline
                />
            </View>
            <View style={styles.addButtonContainer}>
                <AddButton onPress={addHandler} />
            </View>
            <View style={styles.saveButtonContainer}>
                <SaveButton onPress={SaveHandler} />
            </View>
        </ScrollView>
    );
};

export default Experience;
