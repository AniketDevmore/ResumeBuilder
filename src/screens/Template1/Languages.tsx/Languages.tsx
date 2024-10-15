import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { View } from "react-native";
import createStyles from "./Languages.styles";
import { TextInput } from "react-native-paper";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import LanguagesPreview from "./LanguagesPreview";

interface LanguagesProps {
    route: any,
}
const Languages: React.FC<LanguagesProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<any>([]);
    const [language, setLanguage] = useState<any>('');
    const [proficiency, setProficiency] = useState<any>('');

    const addHandler = () => {
        let newObj:any = new Object();
        newObj.language = language;
        newObj.proficiency = proficiency;

        let newDetails = details;
        newDetails.push(newObj);
        setDetails(newDetails);

        setLanguage('');
        setProficiency('');
    }

    const SaveHandler = () => {
        console.log(details);
        let newData = route.params.globalState.map((ele: any) => {
            if (ele.id === 'languages') {
                return { ...ele, languages: details }
            } else {
                return ele;
            }
        })
        route.params.setGlobalState(newData);
        navigation.goBack();
    }

    const removeHandler = (text: any) => {
        let index = details.findIndex((ele: any) => ele.language === text);
        let newData = details;
        newData.splice(index, 1);
        setDetails([...newData]);
        console.log('text--->>', index, newData, details);
    }


    return (
        <View style={styles.outerContainer}>
            <LanguagesPreview details={details} removeHandler={removeHandler} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Languages"
                    value={language}
                    style={styles.inputStyles}
                    onChangeText={text => setLanguage(text)}
                    multiline={true}
                />
                <TextInput
                    mode="outlined"
                    label="Proficiency"
                    value={proficiency}
                    style={styles.inputStyles}
                    onChangeText={text => setProficiency(text)}
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

export default Languages;