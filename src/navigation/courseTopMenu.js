import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import detailScreen from '../screens/Training/screens/detailScreen';
import overviewScreen from '../screens/Training/screens/overviewScreen';
import lessonScreen from '../screens/Training/screens/lessonScreen';

const CourseTopTab = createMaterialTopTabNavigator();

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
        <CourseTopTab.Screen name="Lecciones" component={lessonScreen} />
      </CourseTopTab.Navigator>
    )
  };

  export default courseTopMenu;