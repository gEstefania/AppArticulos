import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import detailScreen from '../screens/Training/screens/detailScreen';
import overviewScreen from '../screens/Training/screens/overviewScreen';
import lessonScreen from '../screens/Training/screens/lessonScreen';
import videoScreen from '../screens/Training/screens/videoScreen';

const CourseTopTab = createMaterialTopTabNavigator();
const LessonStack = createStackNavigator();

const courseTopMenu = ({route}) => {
    return(
      <CourseTopTab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontFamily: 'Poppins-Bold', textTransform: 'capitalize', color: '#ff9b04', fontSize: 14, textAlign: 'left'},
            tabBarStyle: { backgroundColor: 'transparent', marginHorizontal: 20, marginBottom: 15, },
            tabBarIndicatorStyle: {backgroundColor: '#ff9b04', height: 7, borderRadius: 50},
            tabBarIndicatorContainerStyle: {backgroundColor: '#ECF1FE', borderRadius: 50, height: 7, marginTop: 40,},
        }}
      >
        <CourseTopTab.Screen name="Info" component={detailScreen} />
        <CourseTopTab.Screen name="Resumen" component={overviewScreen} />
        <CourseTopTab.Screen name="Lecciones" component={LessonStackScreen} />
      </CourseTopTab.Navigator>
    )
  };

  function LessonStackScreen() {
    return (
      <LessonStack.Navigator
      screenOptions={{
        //headerTitle: "",
        //headerBackTitleVisible: false,
        //headerStyle: {shadowColor: '#fff'},
        headerShown: false,
      }}
      >
        <LessonStack.Screen name="Information" component={lessonScreen} options={{headerShown: false}}/>
        <LessonStack.Screen name="LessonVideo" component={videoScreen} />
      </LessonStack.Navigator>
    );
  };

  export default courseTopMenu;