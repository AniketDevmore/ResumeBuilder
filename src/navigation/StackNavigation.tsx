import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import TempletesScreen from "../screens/Template1/TempletesScreen/TempletesScreen";
import { NavigationContainer } from "@react-navigation/native";
import TemplateTitles from "../screens/Template1/TemplateTitles/TemplateTitles";
import Profession from "../screens/Template1/Profession/Profession";
import Skills from "../screens/Template1/Skills/Skills";
import SocialMedia from "../screens/Template1/SocialMedia/SocialMedia";
import Experience from "../screens/Template1/Experience/Experience";
import Education from "../screens/Template1/Education/Education";

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
                <Stack.Screen
                    name="socialMedia"
                    component={SocialMedia}
                    options={{
                        title: 'Social Media',
                        headerShown: false
                    }}
                />
                 <Stack.Screen
                    name="experience"
                    component={Experience}
                    options={{
                        title: 'Experience',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="education"
                    component={Education}
                    options={{
                        title: 'Education',
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;