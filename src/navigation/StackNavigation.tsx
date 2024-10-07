import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import TempletesScreen from "../screens/TempletesScreen/TempletesScreen";
import { NavigationContainer } from "@react-navigation/native";

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;