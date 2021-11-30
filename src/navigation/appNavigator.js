import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import exploreScreen from '../screens/exploreScreen';
import infoScreen from '../screens/Information/index';
import trainingScreen from '../screens/trainingScreen';
import { Image, View } from 'react-native';

const AppNavigator = () => {
  
  const Tab = createMaterialTopTabNavigator();

    return (
      <NavigationContainer>
        <View style={{backgroundColor: '#ff9b04', height: 125, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Image style={{width: 250, height: 70}} source={require('../assets/img/logo.png')}/>
        </View>
        <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontWeight: '600', fontFamily: 'Poppins-Bold', textTransform: 'capitalize', color: '#fff', fontSize: 16},
          tabBarStyle: { backgroundColor: '#ff9b04', paddingVertical: 15, },
          tabBarIndicatorStyle: {backgroundColor: '#DCD5D3', height: 7,},
        }}
        >
          <Tab.Screen name="Explorar" component={exploreScreen} />
          <Tab.Screen name="Información" component={infoScreen} />
          <Tab.Screen name="Formación" component={trainingScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator;