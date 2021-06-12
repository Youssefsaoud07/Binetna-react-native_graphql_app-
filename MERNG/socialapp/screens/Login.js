import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import { icons,COLORS } from "../constants/index";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { useMutation,gql } from '@apollo/client';
import Register from './Register'
 import {AuthContext} from '../auth/authContext';

const LoginScreen = ({navigation}) => {
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [errors, setErrors] = useState({})
 const context = useContext(AuthContext);
 

  const [userLogin,{loading}]=useMutation(LOGIN_USER,{
    update(proxy,result){
      console.log(result.data.login)
      context.login(result.data.login)
    },onError(err){
      
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
   },
    variables:{
      username,
      password
    }
  })
  

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      

      <FormInput
        labelValue={username}
        onChangeText={(e) => setUsername(e)}
        placeholderText="Username"
        iconType="user"
        keyboardType="username"
        autoCapitalize="none"
        autoCorrect={false}
      />
      

      <FormInput
        labelValue={password}
        onChangeText={(e) => setPassword(e)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      {/* {Object.keys(errors).length>0 &&(
        <View>
          {Object.values(errors).map(value=>
            (<Text key={value} style={styles.errorText}>{value} </Text>))}
         
        </View>
        
      )} */}
      

      <FormButton
        buttonTitle="Sign In"
        onPress={() => userLogin()}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            //onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
           // onPress={() => googleLogin()}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate(Register)}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const LOGIN_USER= gql`
mutation login(
  $username : String!
  $password : String!
)
{
  login(username:$username password:$password){
    
    email
    username
    createdAt
    token
  }
}
`

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 70,
    backgroundColor:'#fff'

  },
  logo: {
    height: 100,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  errorText :{
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 14,
    color:'red'
  }
});