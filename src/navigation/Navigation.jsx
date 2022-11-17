import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  HomeScreen,
  AddService,
  HelpYouScreen,
  SelectPritingScreen,
  LoginScreen,
  OrdersScreen,
  SpecificationsOrder
} from "../screens/";
import { TopTab } from "./TopTab";


const Stack = createNativeStackNavigator();

export const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddService" component={AddService} />
        <Stack.Screen name="HelpYouScreen" component={HelpYouScreen} />
        <Stack.Screen name="SelectPritingScreen" component={SelectPritingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen name="SpecificationsOrder" component={SpecificationsOrder} />
        <Stack.Screen name="TopTab" component={TopTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
