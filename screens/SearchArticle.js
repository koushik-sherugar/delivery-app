import { React,useRef, useState, useLayoutEffect } from "react";
import { View, Text, TextInput, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";
//ai search
import axios from 'axios';
import {SafeAreaView} from "react-native-safe-area-context";

export default function SearchArticle() {
    const navigation = useNavigation();
  useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
      const [prompt, setPrompt] = useState("");
      const [response, setResponse] = useState("");
      //search
      const handleSubmit = (e) => {
      axios
      .post("/chat", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
        console.log("res.data")
      })
      .catch((err) => {
        console.error("error:",err);
      });
    }
  return (
    <SafeAreaView>
      
      <View> 
        <Text> search</Text>
    <TextInput className=" border-4 border-violet-700 font-bold h-16 bo"
        
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
       <Text>{response}</Text>
       <Button
        title="Press me"
        color="#f194ff"
        className="bg-teal-500"
        onPress={handleSubmit}
      />
      </View>
    
    </SafeAreaView>
   
  )
}