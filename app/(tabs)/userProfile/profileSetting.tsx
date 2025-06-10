import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useNavigation } from 'expo-router';
import icons from '@/constants/icons';

const ProfileSetting = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {

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
    <View className='bg-primary100 flex-1 px-4'>
   <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }} >
              <Text className='text-[16px] text-darkWhite mb-2 font-montseratMedium mt-4'>Account</Text>
<View className='bg-gray-500 p-2 rounded-lg'>

    <View className='flex-row gap-x-2 items-center border-b pb-2 border-b-white'>
      <Image source={icons.padlock}/>
      <Text className='text-[16px] font-montseratRegular'>Change password</Text>
    </View>
    <View className='flex-row gap-x-2 items-center pt-2'>
      <Image source={icons.curvearrow}/>
      <Text className='text-[16px] font-montseratRegular'>Restore purchases</Text>
    </View>
</View>
<View className='mt-6'>
              <Text className='text-[16px] text-darkWhite font-montseratMedium mb-2 '>Socials</Text>
<View className='bg-gray-500 p-2 rounded-lg'>

    <View className='flex-row gap-x-2 items-center border-b pb-2 border-b-white'>
      <Image source={icons.twitter}/>
      <Text className='text-[16px] font-montseratRegular'>Follow us on </Text>
      <Image source={icons.twitter}/>
    </View>

    <View className='flex-row gap-x-2 items-center py-2'>
      <Image source={icons.tiktok}/>
      <Text className='text-[16px] font-montseratRegular'>Follow us on Tiktok </Text>
    </View>
    <View className='flex-row gap-x-2 items-center border-t pt-2  border-t-white' >
      <Image source={icons.instagramdark}/>
      <Text className='text-[16px] font-montseratRegular'>Follow us on instagram </Text>
    </View>
</View>
</View>

<View className='mt-6'>
              <Text className='text-[16px] font-montseratMedium text-darkWhite mb-2 '>Contact</Text>
<View className='bg-gray-500 p-2 rounded-lg'>

    <View className='flex-row gap-x-2 items-center border-b pb-2 border-b-white'>
      <Image source={icons.help}/>
      <Text className='text-[16px] font-montseratRegular'>Help </Text>
   
    </View>

    <View className='flex-row gap-x-2 items-center py-2'>
      <Image source={icons.googledoc}/>
      <Text className='text-[16px] font-montseratRegular'>Terms and Conditions</Text>
    </View>
    <View className='flex-row gap-x-2 items-center border-t pt-2  border-t-darkWhite' >
      <Image source={icons.padlock}/>
      <Text className='text-[16px] font-montseratRegular'>Privacy policy</Text>
    </View>
</View>
</View>
<View className='flex-row gap-x-2 items-center bg-gray-500 rounded-lg mt-9 p-3'>
  <Image source={icons.delete1}/>
  <Text className='text-[#DA0000] text-[16px] font-montseratRegular'>Delete account</Text>
</View>

<View className='border-[1px] p-3 rounded-2xl border-gray-100 w-[150px] mx-auto mt-12 items-center'>
  <Text className='text-[16px] font-montseratRegular text-darkWhite'>LOG OUT</Text>
</View>
<View className='justify-center items-center mt-6 gap-y-2'>
  <Text className='text-darkWhite font-montseratRegular'>VERSION 1.1.O</Text>
  <Text className='text-darkWhite font-montseratRegular'>2020 DibaTech</Text>
</View>
            </ScrollView>
    </View>
  )
}

export default ProfileSetting


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