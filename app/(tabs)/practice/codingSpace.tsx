import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import CustomHeaderTitle from '@/components/CustomHeaderTitle'
import icons from '@/constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const CodingSpace = () => {

  return (
    <SafeAreaView className='bg-primary100 flex-1 '>
      <View className='my-3 relative'>
        <CustomHeaderTitle title='Practice'/>
        <View className='bg-[#0E2626] absolute top-6 px-3 py-6 w-full '>
          <Text className='text-darkWhite text-center'>Create coding space</Text>
        </View>
      </View>
      <View className='mt-16 px-4'>

      <Text className='text-darkWhite mb-3 text-[16px]'>Basic code space</Text>
      <View className='bg-gray-500 rounded-xl py-3'>
        <View className='px-4'>

<View className='flex-row gap-x-2'>

      <Text className='px-2 font-medium text-[16px]'>Basic</Text>
      <Image source={icons.html} className='h-6 w-6'/>
      <Image source={icons.css} className='h-6 w-6'/>
      <Image source={icons.js} className='h-6 w-6'/>
</View>
        <Text className='px-2'>Simple front-end starter kit for building static web pages</Text>
        </View>

      <View className='bg-gray-400 px-6 py-2 mt-10 rounded-xl' style={styles.box}>
        <View className='flex-row gap-x-3 '>

        <Text className='font-medium text-[16px] ' >Python</Text>
        <Image source={icons.python}/>
        </View>
<Text>python space for experimentation and protyping</Text>
      </View>
      <View className='bg-gray-400 px-6 py-2 mt-6 rounded-xl' style={styles.box}>
        <View className='flex-row gap-x-3 '>

        <Text className='font-medium text-[16px]' >React</Text>
        <Image source={icons.python}/>
        </View>
<Text>React setup for creating interactive single-page applications</Text>
      </View>
      <View className='bg-gray-400 px-6 py-2 mt-6 rounded-xl' style={styles.box}>
        <View className='flex-row gap-x-3 '>

        <Text className='font-medium text-[16px]' >Javascript</Text>
        <Image source={icons.python}/>
        </View>
<Text>Quick-start Javascipt lab for experiments and concept testing</Text>
      </View>
      

      </View>
      <Text className='text-white my-3'>Advance projects</Text>
      <View className='  bg-gray-500 p-3 rounded-xl px-6'>
        <View className='flex-row gap-x-2 items-center'>

        <Text className='font-medium text-[16px]'>Express server </Text>
        <Image source={icons.ex}/>
        </View>
        <Text>Express server with package manage for backend-end and full stack applications </Text>
      </View>

      </View>
    </SafeAreaView>
  )
}

export default CodingSpace

const styles = StyleSheet.create({
  box:{
      // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 7,

    // Android shadow
    elevation: 8,
  }
})