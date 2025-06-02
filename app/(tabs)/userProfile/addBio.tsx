import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import icons from '@/constants/icons'
import { useNavigation } from 'expo-router'


const {width}=Dimensions.get("window")
const AddBio = () => {
     const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Edit Profile",
        headerStyle: {
        backgroundColor: "#6200ee", // 🔵 background color
      },
    });
  }, [navigation]);
  return (
    <SafeAreaView   edges={['top',"bottom"]}  className=' bg-primary100 flex-1  px-4'>
        <View className='flex-row'>

        <Pressable className='flex-row items-center gap-x-1'>
            <Image source={icons.arrowback}/>
            <Text className='text-white text-left'>Profile</Text>
        </Pressable>
<View className='bg-gray-500 px-2 rounded-xl mx-auto'>
     <Text className='text-darkWhite text-center ml-[-2px]'>Settings</Text>
</View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }} >

       
        <View >



  <Image source={icons.circleUser} className={`${width<360?"w-[100px]":"w-[150px]"} mx-auto ${width<360?"h-[100px]":"h-[150px]"}` } resizeMode='contain'/>
        </View>

     </ScrollView>
    </SafeAreaView>
  )
}

export default AddBio

const styles = StyleSheet.create({})