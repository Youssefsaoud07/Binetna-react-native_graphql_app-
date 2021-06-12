import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Loading} from '../components/Loading';
import Tabs from './tabs';
import AuthStack from './authStack';
import { AuthContext, useAuth } from '../auth/authContext';

    

export const Router = () => {
  const context = useContext(AuthContext);
  console.log('shned',context.user)
   
  return (
    <NavigationContainer>
      {context.user ? <Tabs /> : <AuthStack />}
    </NavigationContainer>
  );
};