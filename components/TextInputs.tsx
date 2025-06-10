import {  Dimensions, TextInput, View } from 'react-native'
import React from 'react'
interface textType {
placeholder?:string,
value:string,
onChangeText:(text:string)=>void
}
const {width}=Dimensions.get("window")
const TextInputs = ({placeholder,value,onChangeText}:textType) => {
  return (
  <View  className='flex-row items-center bg-darkWhite mb-4 rounded-full px-5'>
    
    <TextInput  value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="black" className='w- ml-2 py-3 text-white ' style={{width:width * 0.8}}/>
      </View>
  )
}

export default TextInputs