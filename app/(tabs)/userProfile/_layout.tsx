import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';


const _Layout = () => {
  return (
<>

   <Stack screenOptions={{ headerShown:false, headerTintColor:"white", }} />
</>

  )
}

export default _Layout

const styles = StyleSheet.create({})
