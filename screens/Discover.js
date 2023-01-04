import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome5 } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from "../api";
export default function Discover() {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
const data=[
    {
        key:101,
        imageSrc:"https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_1280.jpg",
        title: "Swadisht",
        location: "kundapur"
    },
    {
        key:102,
        imageSrc:"https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg",
        title: "M cafe",
        location: "kundapur"
    },
    {
        key:103,
        imageSrc:"https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_1280.jpg",
        title: "Eshanya",
        location: "kundapur"
    },
    {
        key:104,
        imageSrc:"https://cdn.pixabay.com/photo/2021/02/17/17/14/plum-6024897_1280.jpg",
        title: "Fish factory",
        location: "udupi"
    },
    {
        key:105,
        imageSrc:"https://cdn.pixabay.com/photo/2020/05/13/21/31/mumbai-5169038_1280.jpg",
        title: "Ocean pearl",
        location: "Manglore"
    },
    {
        key:106,
        imageSrc:"https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg",
        title: "Coffe day",
        location: "udupi"
    },
]
  // useEffect(()=>{
  //     // setIsLoading(true)
  //     getPlacesData().then(data=>{
  //         setMainData(data)
  //         setInterval(() => {
  //             setIsLoading(false)
  //         }, 200);
  //     })
  // })
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">
            {" "}
            Discover
          </Text>
          <Text className="text-[35px] text-[#527283] font-bold">
            {" "}
            The beauty today.
          </Text>
        </View>
        <View className="w-12 h-12 items-center justify-center rounded-md bg-gray-400">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      {/* search */}
      <View className=" flex-row items-center py-1 px-4 shadow-lg rounded-xl mx-4 "></View>
      {/* menu container */}
      {isLoading ? (
        <View className="flex-1  items-center justify-center">
          <ActivityIndicator size="large" clolor="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row justify-center items-center mt-8 px-8"></View>
          <View className="flex-row justify-between items-center px-8 mt-8">
            <MenuContainer
              key={"hotels"}
              title="hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome5 name="arrow-right" size={24} color="#A0C4C7" />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length < 0 ? (
                <>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="text-2xl text-[#428288] font-semibold">
                      Opps... No Data Found
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  {/* {mainData?.map((data, i)=>{
    <ItemCardContainer key={i} imageSrc={data?.photo?.images?.medium?.url ? data?.photo?.images?.medium?.url : "https://cdn.pixabay.com/photo/2020/11/01/21/44/angel-5705040_640.jpg"} title={data?.name} location={data?.location_string} />
})} */}
{data.map((dataItem)=>{
     return (
     <ItemCardContainer
     key={dataItem.key}
     imageSrc={dataItem.imageSrc}
     title={dataItem.title}
     location={dataItem.location}
   />
     )
})}
                  {/* <ItemCardContainer
                    key={"101"}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2020/11/01/21/44/angel-5705040_640.jpg"
                    }
                    title="text with a big name "
                    location="Udupi"
                  />
                  <ItemCardContainer
                    key={data.key}
                    imageSrc={
                      "https://cdn.pixabay.com/photo/2020/11/01/21/44/angel-5705040_640.jpg"
                    }
                    title="text with a big name "
                    location="Udupi"
                  /> */}
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
