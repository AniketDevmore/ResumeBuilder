import { useNavigation } from "@react-navigation/native";
import { useMemo, useState, useCallback } from "react";
import { ScrollView, View } from "react-native";
import createStyles from "./Education.styles";
import { TextInput } from "react-native-paper";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import EducationPreview from "./EducationPreview";

interface EducationProps {
    route: any;
}

const Education: React.FC<EducationProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<any[]>([]);
    const [degree, setDegree] = useState<string>('');
    const [university, setUniversity] = useState<string>('');
    const [period, setPeriod] = useState<string>('');

    const addHandler = useCallback(() => {
        if (!degree || !university || !period) {
            console.log('Please fill in all fields before adding.');
            return;
        }

        const newEducation = { degree, university, period };

        setDetails((prevDetails) => [...prevDetails, newEducation]);

        setDegree('');
        setUniversity('');
        setPeriod('');
    }, [degree, university, period]);

    const SaveHandler = useCallback(() => {
        const newData = route.params.globalState.map((ele: any) =>
            ele.id === 'education' ? { ...ele, education: details } : ele
        );

        route.params.setGlobalState(newData);
        navigation.goBack();
    }, [details, route, navigation]);

    const removeHandler = useCallback((degreeToRemove: string) => {
        setDetails((prevDetails) =>
            prevDetails.filter((item) => item.degree !== degreeToRemove)
        );
    }, []);

    return (
        <ScrollView style={styles.outerContainer} keyboardShouldPersistTaps="always">
            <EducationPreview details={details} removeHandler={removeHandler} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Degree"
                    value={degree}
                    style={styles.inputStyles}
                    onChangeText={setDegree}
                    multiline
                />
                <TextInput
                    mode="outlined"
                    label="University"
                    value={university}
                    style={styles.inputStyles}
                    onChangeText={setUniversity}
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

export default Education;
