import {  TextInput, View } from 'react-native'
import React from 'react'
interface textType {
placeholder?:string,
value:string,
onChangeText:(text:string)=>void
}
const TextInputs = ({placeholder,value,onChangeText}:textType) => {
  return (
  <View  className='flex-row items-center bg-darkWhite w-full mb-4 rounded-full px-5'>
    
    <TextInput  value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#a8b5db" className='w-full ml-2 text-white '/>
      </View>
  )
}

export default TextInputs