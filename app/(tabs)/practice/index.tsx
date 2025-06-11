import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import CustomHeaderTitle from '@/components/CustomHeaderTitle'

const Index = () => {
    const navigation = useNavigation()
  
  const router = useRouter()
  useLayoutEffect(() => {

    navigation.setOptions({
  
            headerTitle: () => <CustomHeaderTitle title='Practice' />,
        headerShown: true,
           headerTitleAlign: 'center',
      title: "Practice",
      headerStyle: {
        backgroundColor: "#1A3A3A", 
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
  
 
    });
  }, [navigation,router]);
  return (
   <View className='bg-primary100 flex-1 px-4'>
<View className='flex-row justify-between mt-6'>

      <Text className='text-darkWhite'>Playgrounds</Text>
    <Link href="/(tabs)/practice/codingSpace"> 
    <Text className='text-darkWhite'>+ CREATE NEW</Text>
    </Link>

</View>
<View className='mt-10'>
    
      <Text className='text-darkWhite mb-2'>Your Pratice Progress</Text>
      <View className='justify-between flex-row bg-gray-500 px-11 py-4 h-[85px] rounded-2xl'>
        <View className=''>

        <View className=' items-center rounded-xl' style={styles.box}>

        <Text className='' style={styles.text}>1</Text>
        </View>
        <Text className='mt-2 '>Activities done</Text>
        </View>
<View className=' w-[0.1px] bg-darkWhite h-full '/>
        <View>

        <View style={styles.box}>

        <Text style={styles.text} className=''>30 mins</Text>
        </View>
        <Text className='mt-2'>Time on tasks</Text>
        </View>
      </View>
</View>
      <View className='bg-gray-500 p-3 pb-5 rounded-2xl mt-7'>
        <Text className='text-capitalize font-montseratMedium text-xl'>Unleash Your Creativity</Text>
        <Text className='tracking-wide '>Create, run, and collaborate on projects directly from your phone.</Text>
        <TouchableOpacity className='bg-darkWhite p-2 w-[120px] items-center mt-5 border-[1px] border-green-500 rounded-2xl '>
            <Text className='font-semibold'>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Index




const styles = StyleSheet.create({
  box: {
    backgroundColor: '#6b7280',
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 7,

    // Android shadow
    elevation: 9,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'medium',
  },
});
