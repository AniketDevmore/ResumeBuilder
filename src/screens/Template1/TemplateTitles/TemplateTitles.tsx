import { useEffect, useMemo, useState } from "react";
import { Dimensions, Pressable, Text, TextInput, View } from "react-native";
import createStyles from './TemplateTitles.styles';
import { NestableDraggableFlatList, NestableScrollContainer } from "react-native-draggable-flatlist";
import { useNavigation } from "@react-navigation/native";

const TemplateTitles = () => {
    const navigation:any = useNavigation();
    const styles = useMemo(() => createStyles(), []);
    const height = Dimensions.get('window').height;
    
    const [globalState, setGlobalState] = useState<any>([
        { id: 'profession', title: 'Profession', 'profession': [] },
        { id: 'socialMedia', title: 'Social Media', 'socialMedia': []},
        { id: 'skills', title: 'Skills', 'skills': []},
        { id: 'experience', title: 'Experience', 'experience': []},
        { id: 'education', title: 'Education', 'education': []},
        { id: 'organization', title: 'Organization', 'organization': []},
        { id: 'languages', title: 'Languages', 'languages': []},
    ]);

    useEffect(() => {
        console.log(globalState)
    }, [globalState])

    const pressHandler = (title:any) => {
        console.log('pressHandler', title);
        navigation.navigate(title, {globalState: globalState, setGlobalState: setGlobalState});
    }

    return (
        <NestableScrollContainer>
            <NestableDraggableFlatList
                style={{ paddingBottom: height - 430 }}
                data={globalState}
                renderItem={({ item, drag, isActive }) => (
                    <View style={[styles.outerContainer, { backgroundColor: isActive ? 'lightgreen' : 'white' }]}>
                        <Pressable onPress={()=>pressHandler(item.id)} onLongPress={drag} style={styles.pressableContainer}>
                            <Text style={{ color: 'black' }}>{item.title}</Text>
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item: any) => item.id.toString()}
                // Update the state with the new order after dragging
                onDragEnd={({ data }) => setGlobalState(data)}
            />
        </NestableScrollContainer>
    );
}

export default TemplateTitles;
