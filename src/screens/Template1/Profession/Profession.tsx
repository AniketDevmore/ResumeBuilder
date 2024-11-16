import { useEffect, useMemo, useState, useCallback } from "react";
import createStyles from "./Profession.styles";
import { ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";
import ProfessionPreview from "./ProfessionPreview";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import { useNavigation } from "@react-navigation/native";

interface ProfessionProps {
    route: any;
}

const Profession: React.FC<ProfessionProps> = ({ route }) => {
    const navigation = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<{ name: string; profession: string; description: string }>({
        name: '',
        profession: '',
        description: '',
    });

    useEffect(() => {
        const professionData = route.params.globalState.find((ele: any) => ele.id === 'profession');
        if (professionData?.profession?.length) {
            setDetails(professionData.profession[0]);
        }
    }, [route]);

    const onChangeHandler = useCallback((value: string, key: keyof typeof details) => {
        setDetails((prevDetails) => ({ ...prevDetails, [key]: value }));
    }, []);

    const SaveHandler = useCallback(() => {
        if (details.name && details.profession && details.description) {
            const updatedGlobalState = route.params.globalState.map((ele: any) =>
                ele.id === 'profession' ? { ...ele, profession: [details] } : ele
            );
            route.params.setGlobalState(updatedGlobalState);
            navigation.goBack();
        } else {
            console.log("All fields are required");
        }
    }, [details, route, navigation]);

    return (
        <ScrollView style={styles.outerContainer}>
            <ProfessionPreview details={details} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Full Name"
                    value={details.name}
                    style={styles.inputStyles}
                    onChangeText={(text) => onChangeHandler(text, 'name')}
                    multiline
                />
                <TextInput
                    mode="outlined"
                    label="Profession"
                    value={details.profession}
                    style={styles.inputStyles}
                    onChangeText={(text) => onChangeHandler(text, 'profession')}
                    multiline
                />
                <TextInput
                    mode="outlined"
                    label="Description"
                    value={details.description}
                    style={styles.inputStyles}
                    onChangeText={(text) => onChangeHandler(text, 'description')}
                    multiline
                />
            </View>
            <View style={styles.buttonContainer}>
                <SaveButton onPress={SaveHandler} />
            </View>
        </ScrollView>
    );
};

export default Profession;
