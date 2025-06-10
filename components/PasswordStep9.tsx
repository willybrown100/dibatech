import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
;
import icons from '@/constants/icons';
import CustomButtom from './CustomButtom';

type surveyItem = | {    id: string;
      type: string;
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?: {name:string,timerange:string}[] }
      
interface passType {
    currentSurveyItem:surveyItem
    handleNext:()=>void
}
const PasswordStep9 = ({handleNext,currentSurveyItem}:passType) => {
    const [password,setPassword]=useState("")
    const [showPassword,setShowPassword]=useState(false)

  return (
    <View className='flex-col justify-center items-center'>
        <Text className='text-white text-[20px] mb-12 font-semibold text-center'>{currentSurveyItem.title}</Text>
        <Image source={currentSurveyItem.image}/>  
      <Text className='text-darkWhite text-[20px] text-center'>{currentSurveyItem.subTitle}</Text>
     
      <View className={`bg-darkWhite mt-5 mb-24 border-2 flex-row items-center justify-between focus:border-secondary-default border-black-100 w-full rounded-full `}>
      < TextInput value={password} secureTextEntry={!showPassword} onChangeText={(text)=>setPassword(text)} className={`text-black w-full py-3  placeholder:capitalize`}placeholderTextColor="#7b7b8b" placeholder='Enter Your Password'/>
      <TouchableOpacity className='mr-2 absolute right-2 z-10' onPress={()=>setShowPassword(!showPassword)}>
        <Image source={showPassword ? icons.eye:icons.eyehide} className=' w-7 h-7 ' resizeMode='contain'/>
        </TouchableOpacity>
        </View>

      <View className='bg-darkWhite border-2 flex-row items-center justify-between focus:border-secondary-default border-black-100 w-full rounded-full '>
      < TextInput value={password} secureTextEntry={!showPassword} onChangeText={(text)=>setPassword(text)} className={`text-black w-full py-3 `}placeholderTextColor="#7b7b8b" placeholder='Confiirm Your Password'/>
      <TouchableOpacity className='mr-2 absolute right-2 z-10' onPress={()=>setShowPassword(!showPassword)}>
        <Image source={showPassword ? icons.eye:icons.eyehide} className=' w-7 h-7 ' resizeMode='contain'/>
        </TouchableOpacity>
        </View>
     
<View className='justify-center items-center'>

     <CustomButtom containerStyle='mt-10 px-20' handlePress={handleNext} title="continue"/>
</View>
    </View>
  )
}

export default PasswordStep9

