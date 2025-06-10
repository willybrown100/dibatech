import { StyleSheet, Text, View } from "react-native";
interface titleType{
  title:string
}
export default function CustomHeaderTitle({title}:titleType) {
  return (
   <View style={styles.text} className='bg-gray-500 py-1 px-3 mx-auto rounded-lg'>

  <Text className='text-white  text-center  tracking-wider font-semibold'>{title}</Text>
</View>
  );
}

const styles = StyleSheet.create({
      text:{
    elevation:8,
    shadowColor:"black"

  },
})