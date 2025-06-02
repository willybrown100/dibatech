import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack, Tabs, usePathname } from 'expo-router'
import icons from '@/constants/icons'




const Layout = () => {
const pathname = usePathname()
console.log(pathname)
    const TabBarIcon = function({icon,focused,color}:any){
return<View className='flex-col items-center justify-center w-full flex-1 '>
<Image source={icon} className='h-6 w-6' resizeMode='contain' tintColor={color}/>
</View>
}
  return (
    <Tabs   screenOptions={{
    tabBarActiveTintColor: 'black',   
          
    tabBarInactiveTintColor: 'white',     
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: '600',
   color:"white"
    },
 tabBarStyle: {
  backgroundColor: "#122f2f",
  borderTopWidth: 0,
  elevation: 0,                 // Android
  shadowOpacity: 0,            // iOS
  shadowOffset: { height: 0, width: 0 }, // iOS
  shadowRadius: 0,             // iOS
},

  }}>
<Tabs.Screen
  name="class"
  options={{

    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon icon={icons.graduationcap} name="class" focused={focused} color={color} />
    ),
  }}
/>

<Tabs.Screen name='practice' options={{title:"practice",
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon icon={icons.code} name="practice" focused={focused} color={color} />
    ),}}/>
<Tabs.Screen name='upgrade' options={{title:"upgrade",     
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon icon={icons.rocket} name="upgrade" focused={focused} color={color} />
    ),}}/>
<Tabs.Screen name='progress' options={{title:"progress", 
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon icon={icons.trophy} name="progress" focused={focused} color={color} />
    ),}}/>
<Tabs.Screen name="userProfile"  options={{title:"Profile",  headerShown:false,
    tabBarIcon: ({ color, focused }) => (
      <TabBarIcon icon={icons.user} name="Profile" focused={focused} color={color} />
    ),}}/>
    </Tabs>
  )
}

export default Layout

const styles = StyleSheet.create({})