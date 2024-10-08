import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import TempletesScreen from "../screens/TempletesScreen/TempletesScreen";
import { NavigationContainer } from "@react-navigation/native";
import TemplateTitles from "../screens/TemplateTitles/TemplateTitles";

const StackNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'templetesScreen'}
                    component={TempletesScreen}
                    options={{
                        title: 'Templetes'
                    }}
                />
                <Stack.Screen
                name="templateTitles"
                component={TemplateTitles}
                options={{
                    title: 'Titles'
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;