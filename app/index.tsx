import CustomButtom from "@/components/CustomButtom";
import Slide from "@/components/Slide";
import images from "@/constants/images";
import { useRef, useState } from "react";
import { Animated, Image, NativeScrollEvent, TouchableOpacity } from "react-native";
import { NativeSyntheticEvent } from "react-native";
import { Dimensions, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const slides = [
  {
    id: 1,
    subTitle:
      "Forge your own path You’ve got goals. we’ve got the tools. Let’s build something that get’s you noticed",
    image: images.image1,
    title: "Your Goals, Our Tools",
  },
  {
    id: 2,
    subTitle:
      "Work on real projects, gain real experience, and be job-ready by the time you finish learning.",
    image: images.image2,
    title: "Build. Apply. Succeed.",
  },
  {
    id: 3,
    subTitle:
      "We go deeper than HTML & CSS master C#, .NET, React, Node.js and more. Learn what employers actually want.",
    image: images.image3,
    title: "Beyond the Basics",
  },
];
const surveyData = [
  {
    id: "1",
    type: "text",
    text: "Let’s tailor your. Just a few quick questions to get you set up.",
    image: images.image4,
    title: "Welcome to DibaTech",
  },

  {
    id: "3",
    type: "about",
    text: "Where are you from?",
    title: "How did you hear about DibaTech?",
    options: [
      { icon: images.people, name: "Friend or family" },
      { icon: images.people, name: "App store search" },
      { icon: images.people, name: "Facebook or instagram ad" },
      { icon: images.people, name: "Tiktok ad" },
      { icon: images.people, name: "Article or blog" },
      { icon: images.people, name: "Social media influencer" },
    ],
  },
  {
    id: "4",
    type: "tech",

    options: [
      { name: "Front-End Development" },
      { name: "Back-End Development" },
      { name: "Full-Stack Development" },
   
    ],
  },
];

const progressbar = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];



const { width, height } = Dimensions.get("window");






export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstTab, setFirstTab] = useState(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  const index = Math.round(event.nativeEvent.contentOffset.x / width);
  setCurrentIndex(index);
};

  const handleNext = () => {
    if (currentIndex < surveyData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const currentSurveyItem = surveyData[currentIndex];

  return (
    <SafeAreaView className="bg-[#1A3A3A] px-4 flex-1">
      {/* Progress Bar */}
      <View
        className="flex-row mx-auto justify-center gap-x-2 mb-4"
        style={{ width: width * 0.9 }}
      >
        {progressbar.map((item, index) => {
          const isFilled = firstTab ? index === 0 : index <= currentIndex + 1;
          return (
            <View
              key={item.id}
              className={`w-[2rem] h-1 ${
                isFilled ? "bg-green-500" : "bg-[#6D6D6D]"
              }`}
            />
          );
        })}
      </View>

      {/* First tab: Intro Slides */}
      {firstTab ? (
        <View className="items-center justify-center" style={{ height: height * 0.8 }}>
          <FlatList
            data={slides}
            renderItem={({ item }) => <Slide item={item} />}
            horizontal
            onScroll={handleScroll}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
          />
          <View className="flex-row mt-6 mb-24">
            {slides.map((_, index) => (
              <View
                key={index}
                className={`h-[0.6rem] w-[0.6rem] rounded-full mx-1 ${
                  index === currentIndex ? "bg-[#008000]" : "bg-[#6D6D6D]"
                }`}
              />
            ))}
          </View>

          <CustomButtom
            handlePress={() => setFirstTab(false)}
            title="GET STARTED"
          />
          <Text className="text-[#D9D9D9] mt-6">I ALREADY HAVE AN ACCOUNT</Text>
        </View>
      ) : (
        // 🟢 Second tab: Render survey item using a View
        <View className="flex-1 items-center justify-center " style={{height:height * 0.8}}>
          {currentSurveyItem?.type === "text" && (
            <View className="items-center flex-col w-full justify-center">
              <Image
                source={currentSurveyItem.image}
                className="mb-4"
                resizeMode="contain"
                style={{ width: 150, height: 200 }}
              />
              <Text className="text-[#D9D9D9] mb-1 text-2xl font-semibold tracking-wider text-center">
                {currentSurveyItem.title}
              </Text>
              <Text className="text-[#D9D9D9] text-center">
                {currentSurveyItem.text}
              </Text>
              <CustomButtom
                handlePress={handleNext}
                title="LET’S GO"
                containerStyle="mt-[6rem] "
              />
            </View>
          )}

          {currentSurveyItem?.type === "about" && (
            <View className="w-full items-center flex-col gap-y-4 rounded-xl py-1 justify-center">
              <Text className="text-[#C8CFCB] capitalize text-lg">How did you hear about DibaTech?</Text>
              {currentSurveyItem.options?.map((option, index) => (
                <TouchableOpacity key={index}   className="bg-[#C8CFCB]  flex-row items-center gap-x-2 px-4 py-2 rounded-lg" style={{width:width * 0.8}}>
                  <Image source={images.people}/>
                  <Text className="text-[#282727] text-lg my-2 text-center">
                    {option.name}
                  </Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={handleNext}>

              <Text className="text-[#D9D9D9]">NONE OF THESE</Text>
              </TouchableOpacity>
            </View>
          )}
          {currentSurveyItem?.type === "tech" && (
            <View className="w-full items-center flex-col gap-y-4 rounded-xl py-1 justify-center">
           
              {currentSurveyItem.options?.map((option, index) => (
                <TouchableOpacity key={index}   className="bg-[#C8CFCB]  flex-row items-center gap-x-2 px-4 py-4 rounded-[2rem]" style={{width:width * 0.8}}>
                  <Image source={images.people}/>
                  <Text className="text-[#282727] text-lg my-2 text-center">
                    {option.name}
                  </Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={handleNext}>
              </TouchableOpacity>
              <CustomButtom title="continue" handlePress={handleNext} containerStyle="mt-10"/>
            </View>
          )}

{

}

        </View>
      )}

      <StatusBar style="light" />
    </SafeAreaView>
  );
}





