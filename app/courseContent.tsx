import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {  } from 'react'
import icons from '@/constants/icons'

import { SafeAreaView } from 'react-native-safe-area-context'

const CourseContent = () => {


  return (
    <SafeAreaView className='bg-primary100 flex-1'>
        <View className='bg-[#0E2626] mt-6 pb-6 pt-2'>
<Image source={icons.Rectangle} className='mx-auto'/>
      <Text className='text-darkWhite text-center py-4 font-montseratMedium text-[16px]'>Front-End Developer</Text>
        </View>
        <View className='px-4 pt-6 flex-1'>

        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View className='bg-gray-500 mt-6 p-3  items-center rounded-xl flex-row justify-between'>
                <Text className='font-montseratMedium text-[20px] w-[150px]'>Intro to Web Development</Text>
                <View className='bg-gray-400 px-4 py-2 rounded-3xl'>

                <Text className='font-semibold  text-[20px]'>16%</Text>
                </View>
            </View>
            <View className='bg-gray-500 mt-6 p-3  items-center rounded-xl flex-row justify-between'>
                <Text className='font-montseratMedium text-[20px] w-[150px]'>Interactive Webpages</Text>
                <View className='bg-gray-400 px-4 py-2 rounded-3xl'>

                <Image source={icons.padlock1} className='w-8 h-8' resizeMode='contain'/>
                </View>
            </View>
            <View className='bg-gray-500 mt-6 p-3  items-center rounded-xl flex-row justify-between'>
                <Text className='font-montseratMedium text-[20px] w-[150px]'>Intermediate HTML & CSS</Text>
                <View className='bg-gray-400 px-4 py-2 rounded-3xl'>

                <Image source={icons.padlock1} className='w-8 h-8' resizeMode='contain'/>
                </View>
            </View>
            <View className='bg-gray-500 mt-6 p-3  items-center rounded-xl flex-row justify-between'>
                <Text className='font-montseratMedium text-[20px] w-[150px]'>Loops</Text>
                <View className='bg-gray-400 px-4 py-2 rounded-3xl'>

                <Image source={icons.padlock1} className='w-8 h-8' resizeMode='contain'/>
                </View>
            </View>
            <View className='bg-gray-500 mt-6 p-3  items-center rounded-xl flex-row justify-between'>
                <Text className='font-montseratMedium text-[20px] w-[150px]'>Flexbox</Text>
                <View className='bg-gray-400 px-4 py-2 rounded-3xl'>

                <Image source={icons.padlock1} className='w-8 h-8' resizeMode='contain'/>
                </View>
            </View>
            <View className='bg-gray-500 mt-6 p-3  items-center rounded-xl flex-row justify-between'>
                <Text className='font-montseratMedium text-[20px] w-[150px]'>Grid</Text>
                <View className='bg-gray-400 px-4 py-2 rounded-3xl'>

                <Image source={icons.padlock1} className='w-8 h-8' resizeMode='contain'/>
                </View>
            </View>
            <View className='bg-gray-500 mt-6 p-3  items-center rounded-xl flex-row justify-between'>
                <Text className='font-montseratMedium text-[20px] w-[150px]'>Array & Functions</Text>
                <View className='bg-gray-400 px-4 py-2 rounded-3xl'>

                <Image source={icons.padlock1} className='w-8 h-8' resizeMode='contain'/>
                </View>
            </View>

        </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default CourseContent

const styles = StyleSheet.create({})