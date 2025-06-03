import { Dimensions, Image, TextInput, Pressable, ScrollView, StyleSheet, Text, View, Switch } from 'react-native'
import React, { useLayoutEffect } from 'react'


import icons from '@/constants/icons'
import { useNavigation } from 'expo-router'



const {width}=Dimensions.get("window")
const AddBio = () => {
     const navigation = useNavigation();
  useLayoutEffect(() => {
    const handleClicktoProfileSetting= function(){

    }
    navigation.setOptions({
      headerShown: true,
          headerLeft: () => (
           <Pressable className='  ' onPress={handleClicktoProfileSetting}>
        <Image source={icons.arrowback}/>
        {/* <Text className='text-white w-full'>profile</Text> */}
      </Pressable>
        ),
        headerTitle: () => <CustomTitle />,
      title: "Settings",
        headerTitleAlign: 'center',
        headerStyle: {
        backgroundColor: "#1A3A3A", 
      },
    });
  }, [navigation]);
  return (
    <View className=' bg-primary100 flex-1  px-4'>
      
        <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }} >

       

  <Image source={icons.circleUser} className={`${width<360?"w-[100px]":"w-[150px]"} mx-auto ${width<360?"h-[100px]":"h-[150px]"}` } resizeMode='contain'/>
  
   <View className="flex-col gap-y-2 mb-4">
    <Text className='text-white'>Name</Text>
    <TextInput className='bg-darkWhite rounded-lg' />
   </View>
   <View className="flex-col gap-y-2 mb-4">
    <Text className='text-white'>Bio</Text>
    <TextInput className='bg-darkWhite rounded-lg' />
   </View>
   <View className="flex-col gap-y-2 mb-4">
    <Text className='text-white'>Email</Text>
    <TextInput className='bg-darkWhite rounded-lg' />
   </View>

   <View className='gap-y-2'>
    <Text className='text-darkWhite'>App settings</Text>
    <View className='bg-gray-400  rounded-lg px-2'>
      <View className='flex-row justify-between items-center'>
<View className='flex-row items-center gap-x-1'>
<Image source={icons.darkmode} />
      <Text className='text-[16px] '>Dark mode</Text>
</View>
      <Switch/>
      </View>
      <View className='flex-row gap-x-2 items-center'>
<Image source={icons.goal}/>
      <Text  className='text-[16px] '>Set Goals</Text>
      </View>
    </View>
   </View>

     </ScrollView>
    </View>
  )
}

export default AddBio


export function CustomTitle() {
  return (
   <View style={styles.text} className='bg-gray-500 mx-auto w-[80px] py-1  rounded-lg '>

  <Text   className='text-white  text-center font-semibold px-2 tracking-wider'>Settings</Text>
</View>
  );
}

const styles = StyleSheet.create({
    text:{
    elevation:8,
    shadowColor:"black"

  },
})

