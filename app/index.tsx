import CustomButtom from "@/components/CustomButtom";
import Slide from "@/components/Slide";
import images from "@/constants/images";
import { useRef, useState } from "react";
import { Animated, Image, NativeScrollEvent, ScrollView, TouchableOpacity } from "react-native";
import { NativeSyntheticEvent } from "react-native";
import { Dimensions, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import StackDetails from "@/components/StackDetails";
import Step5 from "@/components/Step5";
import Step6 from "@/components/Step6";
import UserNameStep7 from "@/components/UserNameStep7";
import EmailStep8 from "@/components/EmailStep8";
import PasswordStep9 from "@/components/PasswordStep9";
import CodingHabitStep10 from "@/components/CodingHabitStep10";
import FullStackPower from "@/components/FullStackPower";
import FreeTrial from "@/components/FreeTrial";
import { Link } from "expo-router";

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
// const surveyData = [
//   {
//     id: "1",
//     type: "text",
//     text: "Let’s tailor your. Just a few quick questions to get you set up.",
//     image: images.image4,
//     title: "Welcome to DibaTech",
//   },

//   {
//     id: "3",
//     type: "about",
//     text: "Where are you from?",
//     title: "How did you hear about DibaTech?",
//     options: [
//       { icon: images.people, name: "Friend or family" },
//       { icon: images.people, name: "App store search" },
//       { icon: images.people, name: "Facebook or instagram ad" },
//       { icon: images.people, name: "Tiktok ad" },
//       { icon: images.people, name: "Article or blog" },
//       { icon: images.people, name: "Social media influencer" },
//     ],
//   },
//   {
//     id: "4",
//     type: "tech",

//     options: [
//       { name: "Front-End Development" },
//       { name: "Back-End Development" },
//       { name: "Full-Stack Development" },
   
//     ],
//   },
//   {
//     id: "5",
//     type: "web",
// title:"10m+ people have learned Web Development with DibaTech",
// subTitle:"It’s our mission to help you reach your coding goals too",
// image:images.image5

//   },
// ];
type SurveyItem =
  | {
      id: string;
      type: "text";
      text: string;
      title: string;
      image: any;
      options?: undefined;
      subTitle?: undefined;
    }
  | {
      id: string;
      type: "about";
      text: string;
      title: string;
      options: { icon: any; name: string }[];
      image?: undefined;
      subTitle?: undefined;
    }
  | {
      id: string;
      type: "tech";
      options: { name: string }[];
      text?: undefined;
      title?: undefined;
      image?: undefined;
      subTitle?: undefined;
    }
  | {
      id: string;
      type: "web";
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?: undefined ;
    } 
    | { 
        id: string;
      type: "time";
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?: {name:string,timerange:string}[];

    }
    | { 
        id: string;
      type: "userName";
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?:undefined;

    }
    | { 
        id: string;
      type: "email";
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?:undefined;

    }
    | { 
        id: string;
      type: "password";
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?:undefined;

    }
    | { 
        id: string;
      type: "codinghabit";
      title: string;
      subTitle?: string;
      image: any;
      text?: string;
      options?:undefined;

    }
    | { 
        id: string;
      type: "power";
      title: string;
      subTitle1?: string;
      subTitle2?: string;
      subTitle3?: string;
      subTitle4?: string;
      image: any;
      text?: string;
      options?:undefined;

    } | { 
    id: string;
    type: "free"; 
    title: string;
    text: string;
    text1: string;
    text2: string;
    text3: string;
    subTitle1?: string;
    subTitle2?: string;
    subTitle3?: string;
    subTitle4: string;
    image: any;
    options?: undefined;
  }




const surveyData: SurveyItem[] = [
  {
    id: "1",
    type: "text",
    text: "Let’s tailor your. Just a few quick questions to get you set up.",
    image: images.image4,
    title: "Welcome to DibaTech",
  },
  {
    id: "2",
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
    id: "3",
    type: "tech",
    options: [
      { name: "Front-End Development" },
      { name: "Back-End Development" },
      { name: "Full-Stack Development" },
    ],
  },
  {
    id: "4",
    type: "web",
    title: "10m+ people have learned Web Development with DibaTech",

    subTitle: "It’s our mission to help you reach your coding goals too",
    image: images.image5,
  },
  {
    id: "5",
    type: "time",
    title: "How much time do you want to spend learniing?",
options:[{name:"warm-Up", timerange:"15mins"},{name:"standard session", timerange:"30mins"},{name:"mastermind", timerange:"1hour"},],
    subTitle: "You can always change this goal later",
    image: "",
  },
  {
    id: "6",
    type: "userName",
    title: "What would you like us to call you?",

    subTitle: "enter username ",
    image: images.image6,
  },

  {
    id: "7",
    type: "email",
    title: "What would you like us to call you?",

    subTitle: "enter username ",
    image: images.image7,
  },

  {
    id: "8",
    type: "password",
    title: "SET YOUR PASSWORD",

    subTitle: "ENTER YOUR PASSWORD",
    image: images.image8,
  },
  {
    id: "9",
    type: "codinghabit",
    title: "Start coding habit, set a daily reminder",

    subTitle: "You can always change the time later",
    image: "",
  },
  {
    id: "10",
    type: "power",
    title: "Unlock Your Full-Stack Power with DibaTech Pro",
text:"Dibatech makes learning to code easy and effective. Whether you're new or improving your skills, enjoy structured lessons in Python, JavaScript, and HTML/CSS with interactive exercises and instant feedback.",

    subTitle1: "Personalized learning that fits your pace",
    subTitle2: "Build real apps, games, and a killer portfolio",
    subTitle3: "Launch your tech career or bring your ideas to life",
    subTitle4: "Earn a recognized Full-Stack certificate",
    image: "",
  },
  {
    id: "11",
    type: "free",
    title: "Your First 14 Days Are On Us",
text:"no charges yet. cancel anyime on the App store",
text1:"Get instant access to all Pro features",
text2:"Get a heads-up before billing",
text3:"Stay subscribed or cancel  you’re in control",
    subTitle1: "Today",
    subTitle2: "In 12 days",
    subTitle3: "In 14 days",
    subTitle4: "Try 14 days free, then N9,900.00/yearly (N832.00/month)",
  
    image: "",
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
  { id: 11 },
  { id: 12 },
];



const { width, height } = Dimensions.get("window");

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const [firstTab, setFirstTab] = useState(true);
  const [showtech, setShowTech] = useState(true);

const  [showDynamicComponent,setShowDynamicComponent]=useState(false)
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  const index = Math.round(event.nativeEvent.contentOffset.x / width);
  setCurrentTab(index);
};

const handleClick = function(){
setShowDynamicComponent(true)
setShowTech(false)
}


  const handleNext = () => {
    if (currentIndex < surveyData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    if(showDynamicComponent){
      setShowDynamicComponent(false)
    }
  };
const currentSurveyItem: SurveyItem = surveyData[currentIndex];
  // const currentSurveyItem = surveyData[currentIndex];

  return (
    <SafeAreaView className="bg-[#1A3A3A] px-4 py-2 flex-1">
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
              className={`flex-1 h-1 ${
                isFilled ? "bg-green-500" : "bg-[#6D6D6D]"
              }`}
            />
          );
        })}
      </View>

      {/* First tab: Intro Slides */}
      {firstTab ? (
        <View className="items-center w-full justify-center" style={{ height: height * 0.8 }}>
          <FlatList
            data={slides}
            renderItem={({ item }) => <Slide item={item} />}
            horizontal
            numColumns={1}
            onScroll={handleScroll}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
          />
          <View className={`flex-row  ${width<360? "mt-3":"mt-5"}  ${width<360?"mb-12":"mb-24"}`}>
            {slides.map((_, index) => (
              <View
                key={index}
                className={`h-[0.6rem] w-[0.6rem] rounded-full mx-1 ${
                  index === currentTab ? "bg-[#008000]" : "bg-[#6D6D6D]"
                }`}
              />
            ))}
          </View>

          <CustomButtom
            handlePress={() => setFirstTab(false)}
            title="GET STARTED"
          />
          <Link href="/(tabs)/class" className="mt-6">
          <Text className="text-[#D9D9D9] ">I ALREADY HAVE AN ACCOUNT</Text>
          </Link>
        </View>
      ) : (
        //  Second tab: Render survey item using a View
        <View className="flex-1 items-center justify-center " style={{height:height * 0.8}}>
          <ScrollView contentContainerStyle={{justifyContent:"center", alignItems:"center",flexGrow:1}} showsVerticalScrollIndicator={false}>

        
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
          {currentSurveyItem?.type === "tech" && showtech &&(
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
              <CustomButtom title="continue" handlePress={handleClick} containerStyle="mt-10"/>
            </View>
          )}

{showDynamicComponent &&
 <StackDetails handle={handleNext}/>
}
          {currentSurveyItem?.type === "web" &&
 <Step5 currentSurveyItem={currentSurveyItem} handleNext={handleNext}/>
}
          {currentSurveyItem?.type === "time" &&
 <Step6 currentSurveyItem={currentSurveyItem} handleNext={handleNext}/>
}
          {currentSurveyItem?.type === "userName" && 
 <UserNameStep7 currentSurveyItem={currentSurveyItem} handleNext={handleNext}/>
}

{currentSurveyItem?.type === "email" &&  <EmailStep8 handleNext={handleNext}/>}
{currentSurveyItem?.type === "password" &&  <PasswordStep9 handleNext={handleNext} currentSurveyItem={currentSurveyItem}/>}
{currentSurveyItem?.type === "codinghabit" &&  <CodingHabitStep10 handleNext={handleNext} currentSurveyItem={currentSurveyItem}/>}
{currentSurveyItem?.type === "power" &&  <FullStackPower handleNext={handleNext} currentSurveyItem={currentSurveyItem}/>}
{currentSurveyItem?.type === "free" &&  <FreeTrial handleNext={handleNext} currentSurveyItem={currentSurveyItem}/>}

          </ScrollView>
        </View>
      )}

      <StatusBar style="light" />
    </SafeAreaView>
  );
}





