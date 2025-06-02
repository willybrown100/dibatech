import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import CustomButtom from '@/components/CustomButtom'
import { Link, useRouter } from 'expo-router'
const {height}=Dimensions.get("window")
const Email = () => {
    const router = useRouter()
    const [text,setText]=useState("")
    const handleChangeText = function(text:string){
setText(text)
    }
    const handleClick = function(){
router.push("/password")
    }
  return (
    <SafeAreaView className='bg-primary100 flex-1 px-4 py-4'>
<View className='justify-center items-center flex-1' style={{height: height * 0.8}}>
<ScrollView contentContainerStyle={{justifyContent:"center", alignItems:"center",flexGrow:1}}>

    <View className='w-full'>
        <Image source={images.image7} className='mx-auto'/>

      <Text className='text-darkWhite text-center text-[16px] font-semibold'>Enter your email </Text>
      <Text className='text-darkWhite ttext-sm text-center mb-6'>Let’s get you back to where you left off</Text>

      <View className='bg-darkWhite  px-4 rounded-full  border-2 border-[#07E500]'>

      <TextInput placeholder='example@yahoomail.com' className='w-full ' value={text} onChangeText={handleChangeText}/>
      </View>

 
<View className='justify-center items-center mt-24'>

    <CustomButtom title="continue" handlePress={handleClick}/>
</View>

    </View>
</ScrollView>
</View>
    </SafeAreaView>
  )
}

export default Email

const styles = StyleSheet.create({})