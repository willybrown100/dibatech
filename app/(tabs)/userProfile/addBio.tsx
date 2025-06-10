import { Dimensions, Image, TextInput, Pressable, ScrollView, StyleSheet, Text, View, Switch } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'


import icons from '@/constants/icons'
import { router, useNavigation } from 'expo-router'
import { Platform } from 'react-native'



const {width}=Dimensions.get("window")
const AddBio = () => {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
     const navigation = useNavigation();
  useLayoutEffect(() => {
    const handleClicktoProfileSetting= function(){
 router.back()
    }
    navigation.setOptions({
      headerShown: true,

        headerTitle: () => <CustomTitle />,
      title: "Settings",
        headerTitleAlign: 'center',
        headerStyle: {
        backgroundColor: "#1A3A3A", 
      },
    });
  }, [navigation]);
  return (
    <View className=' bg-primary100 flex-1 pt-3 px-4'>
      
        <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }} >

       

  <Image source={icons.circleUser} className={`${width<360?"w-[100px]":"w-[150px]"} mx-auto ${width<360?"h-[100px]":"h-[150px]"}` } resizeMode='contain'/>
  
   <View className="flex-col gap-y-2 mb-4">
    <Text className='text-white'>Name</Text>
    <TextInput className='bg-darkWhite rounded-lg py-3' />
   </View>
   <View className="flex-col gap-y-2 mb-4">
    <Text className='text-white'>Bio</Text>
    <TextInput className='bg-darkWhite rounded-lg py-3' />
   </View>
   <View className="flex-col gap-y-2 mb-4">
    <Text className='text-white'>Email</Text>
    <TextInput className='bg-darkWhite rounded-lg py-3' />
   </View>

   <View className=''>
    <Text className='text-darkWhite mb-2'>App settings</Text>
    <View className='bg-gray-500  rounded-lg px-2 justify-center pb-4 '>
      <View className='flex-row justify-between items-center '>
<View className='flex-row items-center gap-x-1'>
<Image source={icons.darkmode} />
      <Text className='text-[16px] '>Dark mode</Text>
</View>
         <Switch
        trackColor={{ false: "#767577", true: "#1A3A3A" }}
        thumbColor={isEnabled ? "#ccc" : "#f4f3f4"}
        ios_backgroundColor="#1A3A3A"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
<View className='h-[1px] w-full bg-darkWhite'/>
      <View className='flex-row gap-x-2 items-center pt-3'>
<Image source={icons.goal}/>
      <Text  className='text-[16px] '>Set Goals</Text>
      </View>
    </View>
   </View>

   <View className='mt-6'>
    <Text className='text-darkWhite mb-2 '>Notifications</Text>
    <View className={`bg-gray-500  rounded-lg px-2 pb-5 `}>
      <View className='flex-row justify-between items-center'>
<View className='flex-row items-center gap-x-1'>
<Image source={icons.bell} />
      <Text className='text-[16px] '>Reminder</Text>
</View>
         <Switch
        trackColor={{ false: "#767577", true: "#1A3A3A" }}
        thumbColor={isEnabled ? "#ccc" : "#f4f3f4"}
        ios_backgroundColor="#1A3A3A"
        onValueChange={toggleSwitch}
        value={isEnabled}
        className=''
      />
      </View>
      <View className='h-[1px] w-full bg-darkWhite'/>

      <View className='flex-row gap-x-2 items-center pt-3'>
<Image source={icons.clock}/>
      <Text  className='text-[16px] '>Daily reminder time</Text>
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

