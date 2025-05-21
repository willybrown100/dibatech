import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface buttonType {
  handlePress :()=>void;
  title:string
containerStyle?:string
}
const CustomButtom = ({handlePress,containerStyle,title}:buttonType) => {

  return (
    <TouchableOpacity onPress={handlePress} className={`${containerStyle} bg-[#008000] p-3 rounded-2xl w-[80%]`}>
      <Text className='text-white tracking-wider text-center uppercase font-semibold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtom

