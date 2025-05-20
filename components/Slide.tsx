import { StyleSheet, Text, View ,Image, ImageSourcePropType} from 'react-native'
import React from 'react'
interface itemType {
item:{id:number,title:string, image: ImageSourcePropType, subTitle:string
}

}
const Slide = ({item}:itemType) => {
  return (
    <View className='flex-col items-center justify-center mr-3'>
        <Image source={item.image} className='w-full h-52' resizeMode='contain'/>
      <Text className='text-white text-center font-semibold mt-4 mb-1'>{item.title}</Text>
      <Text className='text-[#D9D9D9] text-center w-[23rem]'>{item.subTitle}</Text>
    </View>
  )
}

export default Slide

const styles = StyleSheet.create({})