import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Discover" component={Discover}/>
//       <Tab.Screen name="ItemScreen" component={ItemScreen} />
//       <Tab.Screen name="ArticleDisplay" component={ArticleDisplay} />
//       <Tab.Screen name="SearchArticle" component={SearchArticle} />

//     </Tab.Navigator>
//   );
// }
export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              options={{ presentation: "fullScreenModal" }}
            />

            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ presentation: "modal" }}
            />
            {/* <Stack.Screen  name="MyTabs" component={MyTabs} /> */}
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </TailwindProvider>
  );
}
