import { Image, Text, View } from 'react-native'
import React from 'react'
import images from '@/constants/images'


export const CustomSplashScreen = () => {
  

  return (
    <View className='flex-1 bg-[#1A3A3A] justify-center items-center'>
      <Image source={images.logo} className='w-24 h-24' resizeMode='contain'/>
    </View>
  )
}