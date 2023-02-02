import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />

          {/* <Stack.Screen  name="MyTabs" component={MyTabs} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
