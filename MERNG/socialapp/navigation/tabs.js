import {createBottomTabNavigator ,BottomTabBar } from '@react-navigation/bottom-tabs'
import { Text ,TouchableOpacity,View ,Button,StyleSheet ,Image } from "react-native";
import Svg, { Path } from 'react-native-svg';
import React from 'react'
import HomeScreen from '../screens/homeScreen'
import PostScreen from '../screens/postScreen'
import SettingScreen from '../screens/settingScreen'
import ChatScreen from '../screens/chatScreen'
import FindScreen from '../screens/findScreen'
import { icons,COLORS } from "../constants/index";
import LoginScreen from '../screens/Login';
import Register from '../screens/Register';




const Tab = createBottomTabNavigator()
const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const Tabs = () => {
    
    
    return (
        
            
          
        
            <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
            

            >
                
                <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.secondary : COLORS.primary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
                
                
               <Tab.Screen 
               name ="Find" 
               component={FindScreen}
               options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.secondary : COLORS.primary
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton
                        {...props}
                
                />
                )
               }}
               />
               <Tab.Screen 
               name ="Post"
                component={PostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.plus}
                            resizeMode="contain"
                            style={{
                                top: -15.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        
                        borderRadius: 25,
                        backgroundColor: COLORS.white,
                                width: 70,
                                height: 70,
                                tintColor: focused ? COLORS.red : COLORS.red
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                    
                    />
                    )
                   }}
                />
               <Tab.Screen
                name ="Setting" 
                component={Register}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.setting}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.secondary : COLORS.primary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                    
                    />
                    )
                   }}
                />
               <Tab.Screen
                name ="Login" 
                component={LoginScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.secondary : COLORS.primary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                    
                    />
                    )
                   }}
                />
               
            </Tab.Navigator>
            
        
    )
}
const style = StyleSheet.create(
    {
        shadow :{
            shadowColor : '#7F5DF0',
            shadowOffset :{
                width: 0,
                height :10,
            },
            shadowOpacity :0.25,
            shadowRadius :3.5,
            elevation :5
            
        }
    }
)
export default Tabs

