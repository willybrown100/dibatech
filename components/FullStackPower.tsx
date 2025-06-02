import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButtom from './CustomButtom'


type surveyItem = | {    title: string,
type:string
    subTitle1?: string
    subTitle2?: string  
    subTitle3?: string  
    subTitle4?: string  
    text?:string
    image: any,}
interface powerType {
    currentSurveyItem:surveyItem
    handleNext:()=>void
}
const {width}=Dimensions.get("window")
const FullStackPower = ({currentSurveyItem,handleNext}:powerType) => {
  return (
    <View>
      <View className='bg-[#D9D9D9] py-2 rounded-lg mx-auto mb-2'>

      <Text className='text-white font-semibold px-4' style={{letterSpacing:1}}>PRO</Text>
      </View>

      <Text className={`text-white font-semibold text-[20px]  mx-auto ${width<360 ?"mb-8": "mb-16"}  text-center `} >{currentSurveyItem.title}</Text>
      <View className='flex-col gap-y-10'>

      <Text className='text-white text-[16px] w-[242px] mx-auto ' >{currentSurveyItem.subTitle1}</Text>
      <Text className='text-white text-[16px] w-[242px]  mx-auto' >{currentSurveyItem.subTitle2}</Text>
      <Text className='text-white text-[16px] w-[242px]  mx-auto ' >{currentSurveyItem.subTitle3}</Text>
      <Text className='text-white text-[16px] w-[242px]  mx-auto ' >{currentSurveyItem.subTitle4}</Text>
      <View className='bg-[#F5EFDF] px-6 py-5 rounded-2xl w-[248px] mx-auto'>

      <Text className='text-black text-[14px]  ' >{currentSurveyItem.text}</Text>
      </View>
      </View>
      <View className='justify-center items-center mt-14'>

      <CustomButtom title='continue' handlePress={handleNext}/>


      
      </View>

    </View>
  )
}

export default FullStackPower

const styles = StyleSheet.create({})