import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import createStyles from "./Education.styles"
import { TextInput } from "react-native-paper";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import EducationPreview from "./EducationPreview";

interface EducationProps {
    route: any,
}
const Education: React.FC<EducationProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<any>([]);
    const [degree, setDegree] = useState<any>('');
    const [university, setUniversity] = useState<any>('');
    const [period, setPeriod] = useState<any>('');

    const addHandler = () => {
        let newObj:any = new Object();
        newObj.degree = degree;
        newObj.university = university;
        newObj.period = period;

        let newDetails = details;
        newDetails.push(newObj);
        setDetails(newDetails);

        setPeriod('');
        setUniversity('');
        setDegree('');
    }

    const SaveHandler = () => {
        console.log(details);
        let newData = route.params.globalState.map((ele: any) => {
            if (ele.id === 'education') {
                return { ...ele, education: details }
            } else {
                return ele;
            }
        })
        route.params.setGlobalState(newData);
        navigation.goBack();
    }

    const removeHandler = (text:any) => {
        let index = details.findIndex((ele: any) => ele.degree === text);
        let newData = details;
        newData.splice(index, 1);
        setDetails([...newData]);
        console.log('text--->>', index, newData, details);
    }


    return (
        <ScrollView style={styles.outerContainer}>
        <EducationPreview details={details} removeHandler={removeHandler}/>
        <View>
            <TextInput
                mode="outlined"
                label="Degree"
                value={degree}
                style={styles.inputStyles}
                onChangeText={text => setDegree(text)}
                multiline={true}
            />
            <TextInput
                mode="outlined"
                label="University"
                value={university}
                style={styles.inputStyles}
                onChangeText={text => setUniversity(text)}
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

export default Education;