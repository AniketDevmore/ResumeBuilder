import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState, useCallback } from "react";
import { View } from "react-native";
import createStyles from "./Languages.styles";
import AddButton from "../../../component/UI/Buttons/AddButton";
import SaveButton from "../../../component/UI/Buttons/SaveButton";
import LanguagesPreview from "./LanguagesPreview";
import { Dropdown } from "react-native-element-dropdown";
import ISO6391 from "iso-639-1";

interface LanguagesProps {
    route: any;
}

const Languages: React.FC<LanguagesProps> = ({ route }) => {
    const navigation: any = useNavigation();
    const styles = useMemo(() => createStyles(), []);

    const [details, setDetails] = useState<{ language: string; proficiency: string }[]>([]);
    const [language, setLanguage] = useState<string>('');
    const [proficiency, setProficiency] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>(''); // To handle search input

    // Generate language options from iso-639-1
    const languageOptions = ISO6391.getAllNames().map((name) => ({
        label: name,
        value: name,
    }));

    // Filter language options based on the search query
    const filteredLanguageOptions = languageOptions.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Define proficiency levels
    const proficiencyOptions = [
        { label: "Beginner", value: "Beginner" },
        { label: "Intermediate", value: "Intermediate" },
        { label: "Advanced", value: "Advanced" },
        { label: "Native", value: "Native" },
    ];

    useEffect(() => {
        const existingLanguages = route.params.globalState.find((ele: any) => ele.id === 'languages');
        if (existingLanguages?.languages?.length) {
            setDetails(existingLanguages.languages);
        }
    }, [route]);

    const addHandler = useCallback(() => {
        if (!language.trim() || !proficiency.trim()) {
            console.log("Both language and proficiency are required.");
            return;
        }

        setDetails((prevDetails) => [
            ...prevDetails,
            { language: language.trim(), proficiency: proficiency.trim() }
        ]);
        setLanguage('');
        setProficiency('');
    }, [language, proficiency]);

    const SaveHandler = useCallback(() => {
        const newData = route.params.globalState.map((ele: any) =>
            ele.id === 'languages' ? { ...ele, languages: details } : ele
        );

        route.params.setGlobalState(newData);
        navigation.goBack();
    }, [details, route, navigation]);

    const removeHandler = useCallback((languageToRemove: string) => {
        setDetails((prevDetails) =>
            prevDetails.filter((item) => item.language !== languageToRemove)
        );
    }, []);

    return (
        <View style={styles.outerContainer}>
            <LanguagesPreview details={details} removeHandler={removeHandler} />
            <View>
                {/* Language Dropdown with Search */}
                <Dropdown
                    label="Language"
                    data={filteredLanguageOptions} // Using filtered options based on search query
                    labelField="label"
                    valueField="value"
                    value={language}
                    onChange={(item) => setLanguage(item.value)}
                    placeholder="Select Language"
                    placeholderStyle={{color:'#000'}}
                    search
                    searchPlaceholder="Search Language" // Placeholder for the search field
                    onSearch={(query:any) => setSearchQuery(query)} // Set search query
                    style={styles.dropdown}
                />

                {/* Proficiency Dropdown */}
                <Dropdown
                    label="Proficiency"
                    data={proficiencyOptions}
                    labelField="label"
                    valueField="value"
                    value={proficiency}
                    onChange={(item) => setProficiency(item.value)}
                    placeholder="Select Proficiency"
                    placeholderStyle={{color:'#000'}}
                    style={styles.dropdown}
                />
            </View>
            <View style={styles.addButtonContainer}>
                <AddButton onPress={addHandler} />
            </View>
            <View style={styles.saveButtonContainer}>
                <SaveButton onPress={SaveHandler} />
            </View>
        </View>
    );
};

export default Languages;
