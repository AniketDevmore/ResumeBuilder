import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import createStyles from "./Experience.styles"
import ExperiencePreview from "./ExperiencePreview";
import { TextInput } from "react-native-paper";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";

interface ExperienceProps {
    route: any,
}
const Experience: React.FC<ExperienceProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<any>([]);
    const [position, setPosition] = useState<any>('');
    const [company, setCompany] = useState<any>('');
    const [period, setPeriod] = useState<any>('');
    const [explain, setExplain] = useState<any>('');

    const addHandler = () => {
        let newObj:any = new Object();
        newObj.position = position;
        newObj.company = company;
        newObj.period = period;
        newObj.explain = explain;

        let newDetails = details;
        newDetails.push(newObj);
        setDetails(newDetails);

        setPeriod('');
        setCompany('');
        setPosition('');
        setExplain('');
    }

    const SaveHandler = () => {
        console.log(details);
        let newData = route.params.globalState.map((ele: any) => {
            if (ele.id === 'experience') {
                return { ...ele, experience: details }
            } else {
                return ele;
            }
        })
        route.params.setGlobalState(newData);
        navigation.goBack();
    }

    const removeHandler = (text:any) => {
        let index = details.findIndex((ele: any) => ele.position === text);
        let newData = details;
        newData.splice(index, 1);
        setDetails([...newData]);
        console.log('text--->>', index, newData, details);
    }


    return (
        <ScrollView style={styles.outerContainer}>
        <ExperiencePreview details={details} removeHandler={removeHandler}/>
        <View>
            <TextInput
                mode="outlined"
                label="Position"
                value={position}
                style={styles.inputStyles}
                onChangeText={text => setPosition(text)}
                multiline={true}
            />
            <TextInput
                mode="outlined"
                label="Company"
                value={company}
                style={styles.inputStyles}
                onChangeText={text => setCompany(text)}
                multiline={true}
            />
            <TextInput
                mode="outlined"
                label="Duration"
                value={period}
                style={styles.inputStyles}
                onChangeText={text => setPeriod(text)}
                multiline={true}
            />
            <TextInput
                mode="outlined"
                label="Description"
                value={explain}
                style={styles.inputStyles}
                onChangeText={text => setExplain(text)}
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
    )
}

export default Experience;