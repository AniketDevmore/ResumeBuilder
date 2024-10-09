import { useMemo, useState } from "react";
import createStyles from "./Profession.styles";
import { View } from "react-native"
import { TextInput } from "react-native-paper";
import ProfessionPreview from "./ProfessionPreview";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import { useNavigation } from "@react-navigation/native";

interface ProfessionProps {
    route: any,
}
const Profession: React.FC<ProfessionProps> = ({ route }) => {
    const naviation = useNavigation();
    const styles = useMemo(() => createStyles(), []);
    const [details, setDetails] = useState<any>({
        name: '',
        profession: '',
        description: ''
    });

    const onChangeHandler = (text: any, key: any) => {
        if (key === 'name') {
            setDetails({
                name: text,
                profession: details.profession,
                description: details.description
            })
        } else if (key === 'profession') {
            setDetails({
                name: details.name,
                profession: text,
                description: details.description
            })
        } else if (key === 'description') {
            setDetails({
                name: details.name,
                profession: details.profession,
                description: text
            })
        }
    };
    
    const SaveHandler = () => {
        let newData = route.params.globalState.map((ele:any)=>{
            if(ele.id === 'profession'){
                return {...ele, profession: [details]}
            }else{
                return ele;
            }
        })
        route.params.setGlobalState(newData);
        naviation.goBack();
        // console.log(newData);
    }

    return (
        <View style={styles.outerContainer}>
            <ProfessionPreview details={details} />
            <View>
                <TextInput
                    mode="outlined"
                    label="Full Name"
                    value={details.name}
                    style={styles.inputStyles}
                    onChangeText={text => onChangeHandler(text, 'name')}
                    multiline={true}
                />
                <TextInput
                    mode="outlined"
                    label="Profession"
                    value={details.profession}
                    style={styles.inputStyles}
                    onChangeText={text => onChangeHandler(text, 'profession')}
                    multiline={true}
                />
                <TextInput
                    mode="outlined"
                    label="Description"
                    value={details.description}
                    style={styles.inputStyles}
                    onChangeText={text => onChangeHandler(text, 'description')}
                    multiline={true}
                />
            </View>

            <View style={styles.buttonContainer}>
                <SaveButton onPress={SaveHandler} />
            </View>
        </View>
    )
}

export default Profession;