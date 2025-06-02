import { StyleSheet, Text, View,TextInput, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import CustomButtom from '@/components/CustomButtom'

const {height}=Dimensions.get("window")
const Password = () => {
    const router = useRouter()
    const [password,setPassword]=useState("")
     const [showPassword,setShowPassword]=useState(false)
    const handleChangeText = function (text:string){
setPassword(text)
    }
    const handleClick = function(){
router.push("/welcome")
    }
  return (
       <SafeAreaView className='bg-primary100 flex-1 px-4 py-4'>
   <View className='justify-center items-center flex-1' style={{height: height * 0.8}}>
   <ScrollView contentContainerStyle={{justifyContent:"center", alignItems:"center",flexGrow:1}}>
   
       <View className=''>
           <Image source={images.image8} className='mx-auto'/>
   
         <Text className='text-darkWhite text-center text-[16px] font-semibold'>Enter your password </Text>
         <Text className='text-darkWhite ttext-sm text-center mb-6'>Almost there! Just enter your password</Text>
   
        <View className={`bg-darkWhite mt-5  border-2 flex-row items-center justify-between focus:border-secondary-default  border-[#07E500] w-full rounded-full `}>
             < TextInput value={password} secureTextEntry={!showPassword} onChangeText={handleChangeText} className={`text-black w-full py-3 `}placeholderTextColor="#7b7b8b"/>
             <TouchableOpacity className='mr-2 absolute right-2 z-10' onPress={()=>setShowPassword(!showPassword)}>
               <Image source={showPassword ? icons.eye:icons.eyehide} className=' w-7 h-7 ' resizeMode='contain'/>
               </TouchableOpacity>
               </View>
      <View className='justify-center items-center mt-24'>
      
          <CustomButtom title="continue" handlePress={handleClick}/>
      </View>
   
      
       </View>
   </ScrollView>
   </View>
       </SafeAreaView>
  )
}

export default Password

const styles = StyleSheet.create({})