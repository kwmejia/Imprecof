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
import { stylesG } from "../themes/globalTheme";
import { Text } from "react-native";
import { ServiceAprovatedComponent } from "../components/";


const Stack = createNativeStackNavigator();

const headerStyleDefaut = () => ({
  height: 150,
  backgroundColor: '#5472AE',
  shadowColor: '#000',
  elevation: 25
});

const titleHeader = (title) => (<Text style={stylesG.title}>{title}</Text>)

export const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#FFF",
          },
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{ headerTitle: () => titleHeader('PERFILES'), headerStyle: headerStyleDefaut() }}
        />
        <Stack.Screen name="AddService" component={AddService}
          options={{ headerTitle: () => titleHeader('REGISTRO DE DATOS'), headerStyle: headerStyleDefaut() }}
        />
        <Stack.Screen name="HelpYouScreen" component={HelpYouScreen}
          options={{ headerTitle: () => titleHeader('TIPO DE SERVICIO'), headerStyle: headerStyleDefaut() }}
        />
        <Stack.Screen name="SelectPritingScreen" component={SelectPritingScreen}
          options={{ headerTitle: () => titleHeader('DATOS'), headerStyle: headerStyleDefaut() }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen}
          options={{ headerTitle: () => titleHeader('INICIO DE SESIÓN'), headerStyle: headerStyleDefaut() }}
        />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen name="SpecificationsOrder" component={SpecificationsOrder}
          options={{ headerTitle: () => titleHeader('ESPECIFICACIONES'), headerStyle: headerStyleDefaut() }}

        />
        <Stack.Screen name="TopTab" component={TopTab}
          options={{ headerTitle: () => titleHeader('SERVICIOS'), headerStyle: headerStyleDefaut() }}
        />

        <Stack.Screen name="ServiceAprovatedComponent" component={ServiceAprovatedComponent}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}
