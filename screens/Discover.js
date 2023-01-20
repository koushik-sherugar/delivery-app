
import { useRef, useState, useLayoutEffect } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,Image,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  TextInput
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function bottomTab() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }
export default function App() {
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

  const richText = useRef();

  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);

  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0 ) {
      setShowDescError(true);
    } else {
      // axios.post(
      //   'http://localhost:8080/article/create', 
      //   replaceHTML)
      //         .then(res => {
                
      //         })
      //         .catch(err => console.log("error markdown",err))
      //     }
      console.log("formatted response data",replaceWhiteSpace)
      console.log("Raw markdownData",replaceHTML)
    }
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
       <View className="flex-row items-center justify-between px-8">
         <View>
           <Text className="text-[40px] text-[#0B646B] font-bold">
           Write
           </Text>
          <Text className="text-[35px] text-[#527283] font-bold">
           Your article.
          </Text>
         </View>
         <View  className="w-12 h-12 items-center justify-center rounded-lg bg-white shadow-xl border-2	border-teal-600">
         {/* <Pressable onPress={()=>{}}> */}
          {/* <Image
            source={aiLogo}
            className="w-full h-full rounded-md object-cover"
           /> */}
           {/* </Pressable>  */}
           <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-2xl font-bold  text-[#428288]">AI</Text>
      </Pressable>
       </View>
      </View>
      <View style={styles.container}>
        <Pressable onPress={() => richText.current?.dismissKeyboard()}>
          <Text style={styles.headerStyle}>Enter your article.</Text>
          {/* <View style={styles.htmlBoxStyle}>
            <Text>{descHTML}</Text>
          </View> */}
        </Pressable>

        {/* modal component */}
        <View style={styles.centeredView} >
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center">
          <View style={styles.modalView}>
            <Text className="text-center text-md font-bold ">Ask your question with our AI powered assistence.</Text>
            <TextInput
        className="h-8 pl-2  w-full border-2	border-slate-300	rounded-md	 placeholder-teal-900 p"
         value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="enter question... "
      />
      <Text className="mt-3">Response here:{response}</Text>

      <View className=" mt-5 justify-between flex-row ">
           
            < TouchableOpacity
              className="px-2 py-1 mr-4 rounded-md bg-teal-600 shadow-md "
              // onPress={() => setModalVisible(!modalVisible)}
            >
              <Text className="font-bold text-lg text-white tracking-widest " onPress={handleSubmit}>search</Text>
            </ TouchableOpacity>
            <TouchableOpacity
              className="px-2 py-1  rounded-md bg-slate-200 shadow-md"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text className="font-bold text-lg text-gray-500 tracking-widest" >close</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> 
      </View>
      
        <View style={styles.richTextContainer}>
          <RichEditor
            ref={richText}
            onChange={richTextHandle}
            placeholder="Write your cool content here :)"
            androidHardwareAccelerationDisabled={true}
            style={styles.richTextEditorStyle}
            initialHeight={250}
          />
          <RichToolbar
            editor={richText}
            selectedIconTint="#04737b"
            iconTint="#873c1e"
            actions={[
              actions.insertImage,
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.insertLink,
              actions.setStrikethrough,
              actions.setUnderline,
            ]}
            style={styles.richTextToolbarStyle}
          />
        </View>
        {showDescError && (
          <Text style={styles.errorTextStyle}>
            Your content shouldn't be empty 🤔
          </Text>
        )}

        <TouchableOpacity
          style={styles.saveButtonStyle}
          onPress={submitContentHandle}>
          <Text style={styles.textButtonStyle}>Save</Text>
        </TouchableOpacity>
        
{/* 
        <View style={styles.htmlBoxStyle}>
            <Text>{descHTML}</Text>
          </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#00BCC9",
    padding: 20,
    alignItems: "center",
  },

  headerStyle: {
    headerShown: true,
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 10,
  },

  htmlBoxStyle: {
    height: 200,
    width: 330,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },

  richTextContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    marginBottom: 10,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "#fff", 

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: "#F2DEBA",
    borderColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },

  errorTextStyle: {
    color: "#6C00FF",
    marginBottom: 10,
  },

  saveButtonStyle: {
    backgroundColor: "#fff",
    color:"#00BCC9",
    borderWidth: 1,
    borderColor: "#c6cacf",
    borderRadius: 10,
    padding: 10,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  textButtonStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#058993",
  },

  //modalcss
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2
  // },
 
  
 
 
});