import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomHeaderTitle from '@/components/CustomHeaderTitle';
import { useNavigation, useRouter } from 'expo-router';
import icons from '@/constants/icons';
import CustomButtom from '@/components/CustomButtom';

const Progress = () => {
  const router = useRouter()
  const handleClick = function(){
  router.push("/courseContent")
  }
  const {width}=Dimensions.get("window")
  const navigation = useNavigation()
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
  
          headerTitle: () => <CustomHeaderTitle title='weekly progress' />,
        title: "Progress",
          headerTitleAlign: 'center',
          headerStyle: {
          backgroundColor: "#1A3A3A", 
        },
      });
    }, [navigation]);
  return (
    <View className='bg-primary100 flex-1 px-4'>
      <ScrollView>

    
      <View className='bg-gray-500 rounded-xl mt-6 p-2 flex-row justify-between'>

<View className='gap-y-2 flex-col'>
  <View className='flex-col p-2 px-3 items-center justify-center rounded-2xl' style={{backgroundColor:"#9ca3af",width:54,height:54}}>

<Image source={icons.award} className='h-full w-full' />
  </View>
      <Text className='font-semibold text-center'>Rookie</Text>
</View>
<View className='gap-y-2 flex-col'>
  <View className='flex-col py-2 px-3 items-center justify-center rounded-2xl' style={{backgroundColor:"#9ca3af",width:54,height:54}}>

<Image source={icons.padlock1} className='w-full h-full' resizeMode='contain'  />
  </View>
      {/* <Text className='font-montseratBlack  text-center'>Rookie</Text> */}
</View>
<View className='gap-y-2 flex-col'>
  <View className='flex-col py-2 px-3 items-center justify-center rounded-2xl' style={{backgroundColor:"#9ca3af",width:54,height:54}}>

<Image source={icons.padlock1} className='h-full w-full' />
  </View>
      {/* <Text className='font-montseratBlack  text-center'>Rookie</Text> */}
</View>
<View className='gap-y-2 flex-col'>
  <View className='flex-col py-2 px-3 items-center justify-center rounded-2xl' style={{backgroundColor:"#9ca3af",width:54,height:54}}>

<Image source={icons.padlock1} className='h-full w-full' />
  </View>
      {/* <Text className='font-montseratBlack  text-center'>Rookie</Text> */}
</View>


    </View>

<View className='mt-20 justify-center items-center'>
  <Image source={icons.trophy1} className={``}/>
</View>



<View className='mt-12 border-[1px] border-darkWhite rounded-3xl py-6 mx-auto' style={{width:width * 0.8}}>
  <Text className='text-darkWhite font-montseratRegular text-center'>WEEKLY PROGRESS</Text>
  <Text className='text-darkWhite font-montseratRegular text-center'>Complete one more lesson to unlock competitive play with others</Text>
</View>
<View className='items-center mt-20'>

<CustomButtom title='START LESSON' handlePress={handleClick}/>
</View>
  </ScrollView>
      </View>
  )
}

export default Progress

const styles = StyleSheet.create({})