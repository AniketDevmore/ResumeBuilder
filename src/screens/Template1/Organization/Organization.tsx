import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { View } from "react-native";
import createStyles from "./Organization.styles";
import { TextInput } from "react-native-paper";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import OrganizationPreview from "./OrganizationPreview";

interface OrganizationProps {
    route: any,
}
const Organization: React.FC<OrganizationProps> = ({ route }) => {
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
            if (ele.id === 'organization') {
                return { ...ele, organization: details }
            } else {
                return ele;
            }
        })
        route.params.setGlobalState(newData);
        navigation.goBack();
    }

    const removeHandler = (text: any) => {
        let index = details.findIndex((ele: any) => ele === text);
        let newData = details;
        newData.splice(index, 1);
        setDetails([...newData]);
        console.log('text--->>', index, newData, details);
    }


    return (
        <View style={styles.outerContainer}>
            <OrganizationPreview details={details} removeHandler={removeHandler} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Organization"
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

export default Organization;