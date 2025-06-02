import {  Text, View ,Image, ImageSourcePropType, Dimensions} from 'react-native'
import React from 'react'
interface itemType {
item:{id:number,title:string, image: ImageSourcePropType, subTitle:string
}

}
const { width } = Dimensions.get("window");
const Slide = ({item}:itemType) => {
  
  return (
    <View className='flex-col items-center justify-center flex-1 mr-3'>
        <Image source={item.image} className={`w-full ${width<360?"h-40":"h-52"}`} resizeMode='contain'/>
      <Text className='text-white text-center font-semibold mt-4 mb-1'>{item.title}</Text>
      <Text className='text-[#D9D9D9] text-center ' style={{width:width * 0.9}}>{item.subTitle}</Text>
    </View>
  )
}

export default Slide

