import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import TempletesScreen from "../screens/Template1/TempletesScreen/TempletesScreen";
import { NavigationContainer } from "@react-navigation/native";
import TemplateTitles from "../screens/Template1/TemplateTitles/TemplateTitles";
import Profession from "../screens/Template1/Profession/Profession";
import Skills from "../screens/Template1/Skills/Skills";

const StackNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'templetesScreen'}
                    component={TempletesScreen}
                    options={{
                        title: 'Templetes',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="templateTitles"
                    component={TemplateTitles}
                    options={{
                        title: 'Titles',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="profession"
                    component={Profession}
                    options={{
                        title: 'Profession',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="skills"
                    component={Skills}
                    options={{
                        title: 'Skills',
                        headerShown: false
                    }}
                />
                {/* <Stack.Screen
                    name="skills"
                    component={Skills}
                    options={{
                        title: 'Skills',
                        headerShown: false
                    }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;