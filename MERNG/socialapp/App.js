


import React from 'react';


import {NavigationContainer} from '@react-navigation/native'
import Tabs from "./navigation/tabs";
import Header from './navigation/header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {AuthProvider} from './auth/authContext'
import { Router } from './navigation/routes';

const client = new ApolloClient({
  uri: 'http://192.168.43.197:5000/',
  cache: new InMemoryCache()
});
const App = () => {
  
  return (
    
   
      <ApolloProvider client ={client}>
      <AuthProvider>
       <Router />
       </AuthProvider>
       </ApolloProvider>
    
    
  );
};



export default App;
