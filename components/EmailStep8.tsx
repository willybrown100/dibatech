import {  Dimensions, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import images from '@/constants/images'
import TextInputs from './TextInputs'
import CustomButtom from './CustomButtom'
const {width, }=Dimensions.get("window")
interface emailType {
    handleNext:()=>void
}

const EmailStep8 = ({handleNext}:emailType) => {
    const [text,setText]=useState("")
  return (
    <View className=''>

    <View className='justify-center flex-col items-center'>
        <Image source={images.image7} className={`mt-5 ${width<360 ? "h-40":"h-48"}`} />
        <Text className={`text-white text-center my-2  ${width<360 ? "text-[13px]" : "text-[20px]"}`}>ENTER YOUR EMAIL</Text>
        <TextInputs value={text} onChangeText={(text:string)=>setText(text)} placeholder='example@yahoomail.com'/>
    
    </View>

    <View className='justify-center items-center mt-36'>

    <CustomButtom title='continue' containerStyle='' handlePress={handleNext}/>
    </View>
    </View>
  )
}

export default EmailStep8

