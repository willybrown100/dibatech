import { Image, Text, View } from 'react-native'
import React from 'react'
import CustomButtom from './CustomButtom';

type SurveyItem =
  | { id: string; type: string; image: any; title: string; options?: undefined; subTitle?: string }


interface Step5Type {
  currentSurveyItem: SurveyItem;
  handleNext:()=>void
}


const Step5 = ({currentSurveyItem,handleNext}:Step5Type) => {
  return (
    <View>

    <View className='justify-center items-center gap-y-8'>
        <Image source={currentSurveyItem.image}/>
        <View>

      <Text className='text-darkWhite font-semibold text-center text-xl'>{currentSurveyItem.title}</Text>
      <Text className='text-darkWhite text-[16px] text-center'>{currentSurveyItem.subTitle}</Text>
        </View>
    </View>
    <View className='justify-center items-center'>

    <CustomButtom title='continue' handlePress={handleNext} containerStyle='mt-[9rem]'/>
    </View>
    </View>
  )
}

export default Step5

