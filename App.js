import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import ItemScreen from './screens/ItemScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArticleDisplay from './screens/ArticleDisplay';
import SearchArticle from './screens/SearchArticle';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Discover" component={Discover}/>
      <Tab.Screen name="ItemScreen" component={ItemScreen} />
      <Tab.Screen name="ArticleDisplay" component={ArticleDisplay} />
      <Tab.Screen name="SearchArticle" component={SearchArticle} />
    
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen  name="MyTabs" component={MyTabs} />
      <Stack.Screen name="ArticleDisplay" component={ArticleDisplay} />
      <Stack.Screen name="SearchArticle" component={SearchArticle} />
      
        <Stack.Screen name="ItemScreen" component={ItemScreen}/>
      </Stack.Navigator>
      </NavigationContainer>

    </TailwindProvider>
  );
}

