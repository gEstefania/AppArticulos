import * as React from 'react';
import { Image, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import exploreScreen from '../screens/Explore/exploreScreen';
import infoScreen from '../screens/Information/index';
import trainingScreen from '../screens/Training/index';
import topicScreen from '../screens/Information/screens/Topic/topicScreen';
import articleScreen from '../screens/Information/screens/Topic/articleScreen';
import stepScreen from '../screens/Information/screens/Topic/stepScreen';
import postScreen from '../screens/Information/screens/Topic/postScreen';
import profileScreen from '../screens/profileScreen';
import searchScreen from '../screens/searchScreen';
import contactScreen from '../screens/contactScreen';

const InformationStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

function InformationStackScreen() {
  return (
    <InformationStack.Navigator
    screenOptions={{
      headerTitle: "",
      headerBackTitleVisible: false,
      headerStyle: {shadowColor: '#fff'},
    }}
    >
      <InformationStack.Screen name="Information" component={infoScreen} options={{headerShown: false}}/>
      <InformationStack.Screen name="Topic" component={topicScreen} />
      <InformationStack.Screen name="Article" component={articleScreen} />
      <InformationStack.Screen name="Step" component={stepScreen} />
      <InformationStack.Screen name="Post" component={postScreen} />
    </InformationStack.Navigator>
  );
};

function homeScreen() {
  return(
    <LinearGradient
      colors={['#ff9b04', '#ff000a' ]}
      style={{flex: 1}}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.2, 0.4]}
    >
      <View style={{backgroundColor: 'transparent', height: 125, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Image style={{width: 250, height: 70}} source={require('../assets/img/logo.png')}/>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontWeight: '600', fontFamily: 'Poppins-Bold', textTransform: 'capitalize', color: '#fff', fontSize: 16},
          tabBarStyle: { backgroundColor: 'transparent', paddingVertical: 15, },
          tabBarIndicatorStyle: {backgroundColor: 'silver', height: 7,},
        }}
      >
        <Tab.Screen name="Explorar" component={exploreScreen} />
        <Tab.Screen name="Información" component={InformationStackScreen} />
        <Tab.Screen name="Formación" component={trainingScreen} />
    </Tab.Navigator>
    </LinearGradient>
  )
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName={homeScreen}
        screenOptions={{
          headerShown: false
        }}
      >
        <BottomTab.Screen name="Inicio" component={homeScreen}/>
        <BottomTab.Screen name="Perfil" component={profileScreen}/>
        <BottomTab.Screen name="Buscar" component={searchScreen}/>
        <BottomTab.Screen name="Hablemos" component={contactScreen}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;