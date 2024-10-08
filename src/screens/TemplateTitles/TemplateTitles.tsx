import { useMemo } from "react";
import { Text, View } from "react-native";
import createStyles from './TemplateTitles.styles';
import { NestableScrollContainer } from "react-native-draggable-flatlist";

const TemplateTitles = () => {
    const styles = useMemo(() => createStyles(), []);

    return (
        <NestableScrollContainer>
            <Text>aa</Text>
        </NestableScrollContainer>
    )
}

export default TemplateTitles;