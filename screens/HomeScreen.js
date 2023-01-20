import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native'
import {HeroImage} from '../assets'
const HomeScreen = () => {
    const navigation= useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
         headerShown:false,
        })
    },[])
  return (
    <SafeAreaView className="flex-1 relative">

{/* first header section */}
    <View className="flex-row px-6 mt-8 items-center ">
      <View className=" w-16 h-16 rounded-full bg-black items-center justify-center">
      <Text className="text-[#00BCC9] text-3xl font-semibold">D</Text>


      </View>
      <Text className="text-[#2A2B4B] text-3xl font-semibold" > Blog</Text>
    </View>


{/* second text */}
    <View className="px-6 mt-8  space-y-3">
        <Text className="text-[#3C6072] text-[42px]">The world of</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">Knowledge</Text>
        <Text className="text-[#3C6072] text-base">The blogging app with learn and earn feature by rewarding the followers based on engagement rate.</Text>
    </View>


{/* circle section */}
{/* <View className=" w-[400px] h-[400px] rounded-full bg-[#00BCC9] absolute bottom-36 -right-36" >
</View> */}
{/* <View className=" w-[400px] h-[400px] rounded-full bg-[#E99265] absolute -bottom-28 -left-36" >
</View> */}
{/* image container */}
<View className="flex-1 relative items-center justify-center">
<Animatable.Image animation="fadeIn"  easing="ease-in-out"  className="w-full h-full object-cover mt-20" source={HeroImage}/>

{/* go button */}
<TouchableOpacity onPress={()=>{
    navigation.navigate("MyTabs")
}} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
    <Animatable.View animation="pulse" iterationCount={"infinite"} easing="ease-in-out" className="w-20 h-20 items-center justify-center bg-[#00BCC9] rounded-full">
        <Text className=" text-gray-50 text-[24px] font-semibold">Go</Text>
    </Animatable.View>
</TouchableOpacity>
</View>
    </SafeAreaView>
 
  )
}

export default HomeScreen