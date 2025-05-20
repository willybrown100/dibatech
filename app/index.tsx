import CustomButtom from "@/components/CustomButtom";
import Slide from "@/components/Slide";
import images from "@/constants/images";
import { useRef, useState } from "react";
import { NativeScrollEvent } from "react-native";
import { NativeSyntheticEvent } from "react-native";
import { Dimensions, FlatList, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const {height,width}=Dimensions.get("window")
  const slides =  [
    {id:1, subTitle:"Forge your own path You’ve got goals. we’ve got the tools. Let’s build something that get’s you noticed",image:images.image1,title:"Your Goals, Our Tools" },
    {id:2, subTitle:"Work on real projects, gain real experience, and be job-ready by the time you finish learning.",image:images.image2, title:"Build. Apply. Succeed."},
    {id:3, subTitle:"We go deeper than HTML & CSS master C#, .NET, React, Node.js and more. Learn what employers actually want.",image:images.image3, title:"Beyond the Basics"}
  ]

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView 
      className="bg-[#1A3A3A] px-4 flex-1 justify-center items-center"
    >
      <ScrollView>

  <View className=" flex-col items-center justify-center" style={{height:height * 0.8}}>

      <FlatList ref={flatListRef} data={slides} renderItem={({item})=><Slide item={item}/>} contentContainerStyle={{}} horizontal pagingEnabled showsHorizontalScrollIndicator={false}     onScroll={handleScroll}
            scrollEventThrottle={16}
            keyExtractor={(item) => item.id.toString()}/>
        
          <View className="flex-row mb-24">
            {slides.map((_, index) => (
              <View
                key={index}
                className={`h-[0.6rem] w-[0.6rem] rounded-full mx-1 ${
                  index === currentIndex ? 'bg-[#008000]' : 'bg-[#6D6D6D]'
                }`}
              />
            ))}
          </View>

      <CustomButtom/>
<Text className="text-[#D9D9D9] mt-6">I ALREADY HAVE AN ACCOUNT</Text>
  </View>
      </ScrollView>
    </SafeAreaView>


  );
}



















// const Slide = ({ item }) => (
//   <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
//     <Text className="text-white text-2xl">{item.title}</Text>
//   </View>
// );



// export default function OnboardingScreen() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const flatListRef = useRef<FlatList>(null);

//   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const index = Math.round(event.nativeEvent.contentOffset.x / width);
//     setCurrentIndex(index);
//   };

//   return (
//     <SafeAreaView className="bg-[#1A3A3A] flex-1 px-4">
//       <ScrollView>
//         <View
//           className="flex-col items-center justify-center"
//           style={{ height: height * 0.8 }}
//         >
//           <FlatList
//             data={slides}
//             ref={flatListRef}
//             renderItem={({ item }) => <Slide item={item} />}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             keyExtractor={(item) => item.id}
//           />

//           {/* Pagination Dots */}
//           <View className="flex-row mt-4">
//             {slides.map((_, index) => (
//               <View
//                 key={index}
//                 className={`h-2 w-2 rounded-full mx-1 ${
//                   index === currentIndex ? 'bg-white' : 'bg-gray-500'
//                 }`}
//               />
//             ))}
//           </View>

//           <CustomButton />
//           <Text className="text-[#D9D9D9] mt-6">I ALREADY HAVE AN ACCOUNT</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
