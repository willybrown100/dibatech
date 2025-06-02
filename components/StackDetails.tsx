import { Text, View } from 'react-native'
import React from 'react'
import CustomButtom from './CustomButtom'
interface stackProp{
    handle:()=>void
}
const StackDetails = ({handle}:stackProp) => {
  return (
    <View className="w-full items-center flex-col gap-y-4 rounded-xl py-1 justify-center">

    <View  className='flex-col gap-y-4'>
      <Text className='text-white mb-7 tracking-wider text-[1.2rem] text-center'>Front-End Development</Text>
      <Text className='bg-white text-[#000000] rounded-full text-center capitalize tracking-wider font-medium p-4'>courses</Text>
      <View className='w-[248px] bg-[#D9D9D9] h-[356px] my-8 rounded-2xl'/>
      <View className='justify-center items-center'>

      <CustomButtom handlePress={handle} title='continue' />
      </View>
    </View>
    </View>
  )
}

export default StackDetails

