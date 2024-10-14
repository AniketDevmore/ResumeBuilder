import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import createStyles from "./Skills.styles"
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import { TextInput } from "react-native-paper";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SkillsPreview from "./SkillsPreview";

interface SkillsProps {
    route: any,
}
const Skills: React.FC<SkillsProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<any>([]);
    const [text, setText] = useState<any>('');

    const addHandler = () => {
        let newData = details;
        newData.push(text);
        setDetails(newData);
        console.log('clicked')
        setText('')
    }

    const SaveHandler = () => {
        console.log(details);
        let newData = route.params.globalState.map((ele: any) => {
            if (ele.id === 'skills') {
                return { ...ele, skills: details }
            } else {
                return ele;
            }
        })
        route.params.setGlobalState(newData);
        navigation.goBack();
    }

    const removeHandler = (text:any) => {
        let index = details.findIndex((ele: any) => ele === text);
        let newData = details;
        newData.splice(index, 1);
        setDetails([...newData]);
        console.log('text--->>', index, newData, details);
    }

    return (
        <View style={styles.outerContainer}>
            <SkillsPreview details={details} removeHandler={removeHandler}/>
            <View>
                <TextInput
                    mode="outlined"
                    label="Skills"
                    value={text}
                    style={styles.inputStyles}
                    onChangeText={text => setText(text)}
                    multiline={true}
                />
            </View>
            <View style={styles.addButtonContainer}>
                <AddButton onPress={addHandler} />
            </View>
            <View style={styles.saveButtonContainer}>
                <SaveButton onPress={SaveHandler} />
            </View>
        </View>
    )
}

export default Skills;