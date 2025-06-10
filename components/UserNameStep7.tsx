import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomButtom from './CustomButtom';
type surveyItem = | {    id: string;
      type: string;
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?: {name:string,timerange:string}[]}
      
interface step6Type {
    currentSurveyItem:surveyItem
    handleNext:()=>void
}
const {width}=Dimensions.get("window")
const UserNameStep7 = ({currentSurveyItem,handleNext}:step6Type) => {
  return (
    <View>
      <Text className='text-white text-center text-[20px] mb-[3.5rem]'>{currentSurveyItem.title}</Text>
   

      <Image source={currentSurveyItem.image} className='mx-auto'/>
      <Text className={`text-white text-center  uppercase mb-2 ${width >360 ? "text-[13px]":"text-[20px]"}`}>{currentSurveyItem.subTitle}</Text>
   
      <TextInput className='bg-darkWhite rounded-full py-3'/>
      <View className='justify-center items-center mt-[10rem]'>

      <CustomButtom containerStyle='' title='continue' handlePress={handleNext}/>
      </View>
    </View>
  )
}

export default UserNameStep7

const styles = StyleSheet.create({})