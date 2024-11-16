import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import createStyles from "./Skills.styles";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SkillsPreview from "./SkillsPreview";

interface SkillsProps {
    route: any;
}

const Skills: React.FC<SkillsProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);
    const inputRef = useRef<any>(null);

    const [details, setDetails] = useState<string[]>([]);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        route.params.globalState.map((ele: any) => {
            if (ele.id === 'skills' && ele.skills.length !== 0) {
                console.log(ele.skills)
                setDetails(ele.skills)
            }
        })
    }, [route]);

    const addHandler = useCallback(() => {
        if (text.trim() === '' || details.includes(text.trim())) return;
        setDetails((prevDetails) => [...prevDetails, text.trim()]);
        setText('');
        inputRef.current?.focus();
    }, [text, details]);

    const removeHandler = useCallback((skill: string) => {
        setDetails((prevDetails) => prevDetails.filter((item) => item !== skill));
    }, []);

    const SaveHandler = async () => {
        const newData = route.params.globalState.map((ele: any) =>
            ele.id === 'skills' ? { ...ele, skills: details } : ele
        );
        await route.params.setGlobalState(newData);
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.outerContainer} keyboardShouldPersistTaps="always">
            <SkillsPreview details={details} removeHandler={removeHandler} />
            <View>
                <TextInput
                    ref={inputRef}
                    mode="outlined"
                    label="Skills"
                    value={text}
                    style={styles.inputStyles}
                    onChangeText={setText}
                    multiline={true}
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

export default Skills;
