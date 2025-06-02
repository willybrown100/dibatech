import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import { SafeAreaView } from 'react-native-safe-area-context'
const {height}=Dimensions.get("window")
const welcome = () => {
  return (
    <SafeAreaView className='bg-primary100 flex-1 '>

    <View className='justify-center items-center' style={{height:height * 0.8}}>
        
        <Image source={images.image9}/>
      <Text className='text-darkWhite'>welcome</Text>
      <Text className='text-darkWhite'>OMAJUWA EMMANUEL</Text>
    </View>
    </SafeAreaView>
  )
}

export default welcome

const styles = StyleSheet.create({})