import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButtom from './CustomButtom'
import { useRouter } from 'expo-router'
type surveyItem = | {  id:string, title: string,
type:"free"
    subTitle1?: string
    subTitle2?: string  
    subTitle3?: string  
    subTitle4?: string  
    text:string
    text1:string
    text2:string
    text3:string
    image: any,}

interface freeType {
    currentSurveyItem:surveyItem
    handleNext:()=>void
}
const {height}=Dimensions.get("window")
const FreeTrial = ({currentSurveyItem}:freeType) => {
  const router = useRouter()
  const handleClick = function(){
    router.push("/(tabs)/class")
  }
  return (
    <View className='items-center  relaive justify-center' style={{height:height * 0.9}}>
      <Pressable onPress={handleClick} className='absolute top-0 right-2 '>
      <Text className=' text-darkWhite font-semibold '>Skip</Text>
      </Pressable>
        <View className='bg-[#D9D9D9] py-2 rounded-lg mx-auto mb-2'>
            <Text className='text-white font-semibold px-4 ' style={{letterSpacing:1}}>PRO</Text>
            </View>

      <Text className='text-white text-[20px] mb-16 '>{currentSurveyItem.title}</Text>

 <View className='gap-y-9 flex-col'>


      <View>
      <Text className='text-white text-[20px] '>{currentSurveyItem.subTitle1}</Text>
      <Text className='text-darkWhite text-[16px] '>{currentSurveyItem.text1}</Text>
      </View>
      <View>
      <Text className='text-white text-[20px] '>{currentSurveyItem.subTitle2}</Text>
      <Text className='text-darkWhite text-[16px] '>{currentSurveyItem.text1}</Text>
      </View>
      <View>
      <Text className='text-white text-[20px] '>{currentSurveyItem.subTitle3}</Text>
      <Text className='text-darkWhite text-[16px] '>{currentSurveyItem.text1}</Text>
      </View>
       </View>

<Text className='text-darkWhite mt-16 text-[15px] text-center font-semibold'>{currentSurveyItem.subTitle4}</Text>
<View className='justify-center items-center mt-16'>

<CustomButtom title='START MY FREE TRIAL' containerStyle='px-10'/>
</View>
<Text className='text-darkWhite text-center text-xs mt-1'>{currentSurveyItem.text}</Text>
    </View>
  )
}

export default FreeTrial

