import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'
const {width}=Dimensions.get("window")


const UserHome = () => {
  const navigation = useNavigation();
  
  const router = useRouter()
  useLayoutEffect(() => {
    const handleClicktoProfileSetting = () => {
     router.push("/(tabs)/userProfile/profileSetting")
    };
    navigation.setOptions({
  
            headerTitle: () => <CustomTitle />,
        headerShown: true,
           headerTitleAlign: 'center',
      title: "Profile",
      headerStyle: {
        backgroundColor: "#1A3A3A", 
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
        headerRight: () => (
       <Pressable className='items-end' onPress={handleClicktoProfileSetting}>
    <Image source={icons.gear}/>
  </Pressable>
    ),
    });
  }, [navigation,router]);

  const handleClick = function(){
    router.push("/(tabs)/userProfile/addBio")
  }




  return (
    <View     className=' bg-primary100 flex-1  px-4'>
<ScrollView     showsVerticalScrollIndicator={false}
  
    contentContainerStyle={{ paddingBottom: 20 }} >

 

    <View className='justify-center gap-y-3 items-center'>
        <Image source={icons.circleUser} className={`${width<360?"w-[100px]":"w-[150px]"} ${width<360?"h-[100px]":"h-[150px]"}` } resizeMode='contain'/>
        <Text className='text-darkWhite'>OMAJUWA EMMANUEL</Text>
        <Pressable onPress={handleClick}>
<Text className='text-white'>+  ADD BIO</Text>
        </Pressable>
    </View>

    <View className='justify-center items-center mt-3'>
      <Pressable className='flex-row gap-x-3 px-6 justify-center items-center   bg-primary200  p-2  rounded-xl'>
        <Image source={icons.arrowup} className='w-4 text-white  h-4' />
        <Text className='text-white text-center'>Share my progress</Text>
      </Pressable>

      <View className='my-5 flex-row gap-x-5'>
        <View className='bg-[#D9D9D9] w-[90px] rounded-xl h-[130px]'><Text className='text-darkWhite'>XP</Text></View>
        <View className='bg-[#D9D9D9] w-[90px] rounded-xl h-[130px]'><Text className='text-darkWhite'>XP</Text></View>
        <View className='bg-[#D9D9D9] w-[90px] rounded-xl h-[130px]'><Text className='text-darkWhite'>XP</Text></View>
      </View>
      <Pressable className='bg-primary200 px-6 p-2 rounded-xl  py-2'>
        <Text className='text-white text-center'>TRY PRO FOR FREE</Text>
      </Pressable>
    </View>

      <Text className='text-darkWhite mt-5 mb-2 font-semibold my-4 tracking-wide'>Friends</Text>
    <View className='border-2 border-darkWhite rounded-2xl p-3 gap-y-2 justify-center items-center'>
      <TouchableOpacity className='border-2 border-primary200 p-2 rounded-lg'>
        <Text className='text-center text-darkWhite'> + ADD FRIENDS</Text>
      </TouchableOpacity>

      <Image source={images.pple} className='w-[180px] h-[180px]' resizeMode='contain'/>
      <Text className='text-darkWhite font-semibold text-[20px]'>No friends yet</Text>
      <Text className='text-darkWhite text-center text-[16px]'>Learning becomes even more enjoyable and engaging when you share the experience with friends</Text>
    </View>


</ScrollView>
    </View>
  )
}

export default UserHome

const styles = StyleSheet.create({
  text:{
    elevation:8,
    shadowColor:"black"

  },
    titleContainer: {
    backgroundColor: '#FFD700', // gold background color for the title
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  titleText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },

})

export function CustomTitle() {
  return (
   <View style={styles.text} className='bg-gray-500 py-1 px-3 mx-auto rounded-lg'>

  <Text   className='text-white  text-center  tracking-wider font-semibold'>Profile</Text>
</View>
  );
}

