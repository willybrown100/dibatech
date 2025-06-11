import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomHeaderTitle from '@/components/CustomHeaderTitle';
import { useNavigation } from 'expo-router';
import icons from '@/constants/icons';

const Upgrade = () => {
  const navigation = useNavigation()
   useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
    
            headerTitle: () => <CustomHeaderTitle title='Upgrade' />,
          title: "Upgrade",
            headerTitleAlign: 'center',
            headerStyle: {
            backgroundColor: "#1A3A3A", 
          },
        });
      }, [navigation]);
      const {width}=Dimensions.get("window")
  return (

    <View className='bg-primary100 flex-1 px-4'>
      <ScrollView >

      <View className='bg-gray-400 py-1 px-5 rounded-lg mx-auto my-6'>
      <Text className='text-darkWhite font-montseratBold'>PRO</Text>
      </View>
      <Text className='text-center font-montseratMedium text-darkWhite text-[20px] '>Take DibaTech to the next level with Pro</Text>
      <Text className='text-darkWhite text-sm text-center font-montseratRegular'>Unlocking Pro boosts your chances of completing the full development path by 10x</Text>

      <View className='bg-gray-500 mt-10 p-3  rounded-2xl'>
        <View className='flex-row justify-between items-center h-[4.5rem] bg-[#D9D9D9] border-[2px] border-primary200 rounded-2xl p-2' style={{elevation:9}}>

        <Text className='font-montseratBold'>Yearly</Text>
        <View>

        <Text className='text-sm '>Experience Pro free for 14 days</Text>
        <Text className='font-montseratBold'>N9,900.00 / yearly </Text>
        </View>
        </View>
        <View className='flex-row justify-between items-center h-[4.5rem] mt-5 bg-[#D9D9D9] border-[2px] border-primary200 rounded-2xl p-2' style={{elevation:9}}>

        <Text className='font-montseratBold'>Monthly</Text>
        

        <Text className='font-montseratBold'>N832 / monthly  </Text>
   
        </View>
        <Text className='text-sm mt-3 font-montseratMedium text-center'>Easily cancel anytime through the App Store</Text>
        <Image/>
        <Text className='text-sm mt-3 font-montseratMedium text-center'>4.7/5 Ratings on the App Store</Text>
      </View>


      <View className=' mt-7 mx-auto' style={{width:width * 0.8}}>
<View className='gap-y-2'>
   
      <Text className='text-white text-[16px] font-montseratsemiBold mt-3'>Next-level learning, made easy</Text>

      <View className='flex-row  gap-x-1'>
        <Image source={icons.Starsmall}/>
        <Text className='text-darkWhite  font-montseratMedium'>Full access to all courses and career tracks</Text>
      </View>
      <View className='flex-row items-center gap-x-1'>
        <Image source={icons.Starsmall}/>
        <Text className='text-darkWhite font-montseratMedium'>Infinite Hearts</Text>
      </View>
      <View className='flex-row items-center gap-x-1'>
        <Image source={icons.Starsmall}/>
        <Text className='text-darkWhite font-montseratMedium'>Course Completion Certificate</Text>
      </View>
      <View className='flex-row items-center gap-x-1'>
        <Image source={icons.Starsmall}/>
        <Text className='text-darkWhite font-montseratMedium'>Get unrestricted access to DibaTech AI</Text>
      </View>
      <View className='flex-row items-center gap-x-1'>
        <Image source={icons.Starsmall}/>
        <Text className='text-darkWhite font-montseratMedium'>No limits on hosted projects</Text>
      </View>
      <View className='flex-row items-center gap-x-1'>
        <Image source={icons.Starsmall}/>
        <Text className='text-darkWhite font-montseratMedium'>Monthly streak restore</Text>
      </View>
      </View>
         </View>
      </ScrollView>
    </View>
  )
}

export default Upgrade

const styles = StyleSheet.create({})