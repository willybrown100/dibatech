import React, { useState } from 'react'
import {  Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper';
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
const Step6 = ({currentSurveyItem,handleNext}:step6Type) => {
  const [selected, setSelected] = useState('');

  return (
    <View>
      <Text className='text-darkWhite text-[20px] font-semibold text-center'>{currentSurveyItem.title}</Text>
      <Text className='text-darkWhite text-[16px] text-center mb-5'>{currentSurveyItem.subTitle}</Text>

      <View className='bg-gray-500 rounded-3xl p-4 mt-10 w-[303px] mx-auto'>
<RadioButton.Group onValueChange={setSelected} value={selected} >
      {currentSurveyItem.options?.map((item)=>(
          <View
          key={item.name}
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}
          >
          <RadioButton value={item.name} color="white"
          uncheckedColor="white" 
          />
          <View className='flex-row flex-1 justify-between items-center '>

          <Text className='text-darkWhite capitalize'>{item.name}</Text>
          <Text className='text-darkWhite '>{item.timerange}</Text>
          </View>
        </View>
      ))}
      {/* <Text style={{ marginTop: 10 }} className='text-white'>Selected: {selected}</Text> */}
    </RadioButton.Group>
      </View>
<View className='justify-center items-center'>

      <CustomButtom handlePress={handleNext} title='I’M READY' containerStyle='mt-20'/>
</View>
    </View>
  )
}

export default Step6











