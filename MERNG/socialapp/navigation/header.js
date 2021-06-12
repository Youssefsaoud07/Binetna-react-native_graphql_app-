import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import LoginScreen from '../screens/Login';


const RenderHeader=()=> {
    
const Tab = createMaterialTopTabNavigator();
    return (
        
        
        <View style={{ flexDirection: 'row', height: 50 }} >
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={icons.nearby}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        width: '70%',
                        height: "100%",
                        backgroundColor: COLORS.lightGray3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius
                    }}
                >
                    <Text style={{ ...FONTS.body6 }}>Binetna</Text>
                </View>
            </View>
            
            {/* <Tab.Screen 
            name="login" 
            component={LoginScreen} 
            
            
                options ={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center'
                ,
                tabBarIcon: () => (
                <Image
                    source={icons.user}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        
                    }}
                /> )}} >
            
            </Tab.Screen>  */}
           
            
        </View>
        
    )
}
export default RenderHeader