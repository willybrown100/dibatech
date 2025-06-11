import { StyleSheet, Text, View } from "react-native";
interface titleType{
  title:string
}
export default function CustomHeaderTitle({title}:titleType) {
  return (
   <View style={styles.text} className='py-1 px-3 mx-auto rounded-lg'>

  <Text className='text-white  text-center  tracking-wider font-semibold'>{title}</Text>
</View>
  );
}

const styles = StyleSheet.create({
      text:{
            backgroundColor: '#6b7280',
     // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 7,

    // Android shadow
    elevation: 9,

  },
})