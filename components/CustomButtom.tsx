import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButtom = () => {
  return (
    <TouchableOpacity className='bg-[#098000] p-3 rounded-2xl w-[80%]'>
      <Text className='text-white tracking-wider text-center uppercase font-semibold'>get started</Text>
    </TouchableOpacity>
  )
}

export default CustomButtom

