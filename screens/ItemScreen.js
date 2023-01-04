import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native';
import {FontAwesome, FontAwesome5, MaterialIcons} from '@expo/vector-icons';

export default function ItemScreen({route}) {
    const navigation= useNavigation()
    const data= route?.params?.param
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
    
    //   console.log(data)
  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <ScrollView className="flex-1 px-4 py-6 ">
            <View className="relative bg-white shadow-lg">
            <Image  source={{uri: "https://cdn.pixabay.com/photo/2020/11/01/21/44/angel-5705040_640.jpg"}} className="w-full h-72 rounded-md object-cover"/>
  
  <View className="absolute flex-row top-5 justify-between px-6 inset-x-0 ">
    <TouchableOpacity onPress={()=>{navigation.navigate("Discover")}} className="w-10 h-10 rounded-md justify-center items-center bg-white">
<FontAwesome5 name="chevron-left" size={24} color="#06B2BE"/>
    </TouchableOpacity>
    <TouchableOpacity className="w-10 h-10 rounded-md justify-center items-center bg-[#06B2BE]">
<FontAwesome5 name="heartbeat" size={24} color="#fff"/>
        
        </TouchableOpacity>
  </View>


  <View className="absolute flex-row bottom-5 justify-between px-6 inset-x-0 ">
    <Text className="text-[18px] text-gray-100 font-bold items-center align-bottom">Price: 100$</Text>
    <Text className="px-2 py-1 rounded-md bg-teal-100">Open Now</Text>
  </View>
            </View>

{/* restaurant name */}
<View className="mt-6">
<Text className="text-[#428288] text-[28px] font-bold ">
   title
  </Text>
  <View className="flex-row mt-2 space-x-2 items-center">
  <FontAwesome name="map-marker" size={24} color="#8597A2" />
  <Text className="text-[#428288] text-[14px] font-bold ">
    location
  </Text>
  </View>
  </View>

{/* ratings section */}
<View className="mt-4 flex-row items-center justify-between">
    <View className="flex-row items-center space-x-2">
        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
            <FontAwesome name='star' size="24" color="#D58574"/>
        </View>
        <View >
            <Text className="#text-[#515151]" >4.5</Text>
            <Text className="#text-[#515151]" >Rating</Text>
        </View>
    </View>


<View className=" flex-row items-center justify-between">
    <View className="flex-row items-center space-x-2">
        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
            <MaterialIcons name='attach-money' size="24" color="#D58574"/>
        </View>
        <View >
            <Text className="#text-[#515151]" >100$</Text>
            <Text className="#text-[#515151]" >Price level</Text>
        </View>
    </View>
</View>

<View className=" flex-row items-center justify-between">
    <View className="flex-row items-center space-x-2">
        <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
            <FontAwesome5 name='map-signs' size="24" color="#D58574"/>
        </View>
        <View >
            <Text className="#text-[#515151]" >NorthWest</Text>
            <Text className="#text-[#515151]" >Bearing</Text>
        </View>
    </View>
</View>

</View>


{/* description */}
<View>
    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6A7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatem voluptatum id explicabo recusandae iste aut, cumque quod nisi hic saepe minus vero cum nobis?</Text>
</View>
{/* cuisine */}
<View className="justify-start  items-center flex-row gap-2 flex-wrap mt-4">
    <TouchableOpacity className=" px-2 py-1 rounded-md bg-teal-200">
        <Text>Indian</Text>        
    </TouchableOpacity>
    <TouchableOpacity className=" px-2 py-1 rounded-md bg-teal-200">
        <Text>Mediteranian</Text>
    </TouchableOpacity>
    <TouchableOpacity className=" px-2 py-1 rounded-md bg-teal-200">
        <Text>Chinees</Text>
        
    </TouchableOpacity>
    <TouchableOpacity className=" px-2 py-1 rounded-md bg-teal-200">
<Text>Eastern</Text>
    </TouchableOpacity>
    <TouchableOpacity className=" px-2 py-1 rounded-md bg-teal-200">
<Text>Italian</Text>
    </TouchableOpacity>
</View>


{/* contact section */}
<View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-2 py-3">
<View className="flex-row space-x-6 items-center">
    <FontAwesome name='phone' size={24} color="#428288" />
    <Text className="text-lg">+91 81926 63373</Text>
</View>
<View className="flex-row space-x-6 items-center">
    <FontAwesome name='envelope' size={24} color="#428288" />
    <Text className="text-lg"> kaushiksherugar2001@gmail.com</Text>
</View>
<View className="flex-row space-x-6 items-center">
    <FontAwesome name='map-pin' size={24} color="#428288" />
    <Text className="text-lg">Hegde complex, near shastri circle, kundapur-576201, karnataka.</Text>
</View>
</View>


<View className="px-4 py-4 mt-4 rounded-md bg-[#06B2BE] items-center justify-center mb-12">
<Text className="text-3xl text-gray-100 uppercase tracking-wider font-semibold ">BOOK NOW</Text>
</View>
        </ScrollView>
    </SafeAreaView>
  )
}