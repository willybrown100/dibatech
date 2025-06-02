import {  Dimensions, Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { Link } from 'expo-router'
import icons from '@/constants/icons'

const {width,height}=Dimensions.get("window")
const login = () => {
  return (
    <SafeAreaView className='bg-[#1A3A3A] flex-1 px-4 py-2'>
<View  className='justify-center items-center flex-1' style={{height: height * 0.8}}>
<ScrollView contentContainerStyle={{justifyContent:"center", alignItems:"center",flexGrow:1}}>

    <View className=''>
      <Text className='text-darkWhite text-[20px] tracking-wide text-center mx-auto font-semibold mb-40'>Login</Text>
      <View className='flex-col gap-y-6'>

      <Image source={images.image1} className='mx-auto'/>
      <Link href="/email" className='border-2 border-[#19FB21] px-8 py-2 text-center rounded-full'>
      <Text className='text-darkWhite'>SIGN IN WITH EMAIL</Text>
      </Link>
      <Text className='text-darkWhite text-center mb-6 text-sm'>Or continue with:</Text>
      </View>

      <View className='flex-row gap-x-5 mt-6 items-center justify-center'>
        <Image source={icons.google} className={` ${width<360 ? "h-[40px]":"h-[60px]"} ${width<360 ?"w-[40px]":"w-[60px]"}   `} resizeMode='contain' />
        <Image source={icons.apple} className={` ${width<360 ? "h-[40px]":"h-[46px]"} ${width<360 ?"w-[40px]":"w-[46px]"}   `} resizeMode='contain' />
        <Image source={icons.facebook} className={` ${width<360 ? "h-[40px]":"h-[46px]"} ${width<360 ?"w-[40px]":"w-[46px]"}   `} resizeMode='contain' />
        <Image source={icons.instagram} className={` ${width<360 ? "h-[40px]":"h-[46px]"} ${width<360 ?"w-[40px]":"w-[46px]"}   `} resizeMode='contain' />
      </View>
    </View>
</ScrollView>
</View>
    </SafeAreaView>
  )
}

export default login

