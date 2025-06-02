import {  Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker';
import TimePicker from '@/utils/TimePicker';
import CustomButtom from './CustomButtom';
const {width}=Dimensions.get("window")
type surveyItem =  {    id: string;
      type: string;
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?:string}
      
interface step6Type {
    currentSurveyItem:surveyItem
    handleNext:()=>void
}

const CodingHabitStep10 = ({handleNext,currentSurveyItem}:step6Type) => {
  return (
    <View>
      <Text className='text-darkWhite text-[20px] font-semibold text-center'>{currentSurveyItem.title}</Text>
      <Text className='text-darkWhite text-[16px] text-center'>{currentSurveyItem.subTitle}</Text>
      <TimePicker/>
        <View className={`justify-center  ${width<360 ? "mt-10" : "mt-24"} items-center`}>
      
          <CustomButtom title='YES, TURN ON' containerStyle='mt-28' />
          <TouchableOpacity className='mt-6' onPress={handleNext}>
              <Text className='text-darkWhite tracking-wide font-semibold'>SET LATER</Text>
          </TouchableOpacity>
          
          </View>
    </View>
  )
}

export default CodingHabitStep10






