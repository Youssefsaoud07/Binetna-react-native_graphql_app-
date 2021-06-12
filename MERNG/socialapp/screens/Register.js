import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../auth/authContext';
import { useMutation,gql } from '@apollo/client';

const Register = ({navigation}) => {
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('')
  const context = useContext(AuthContext)

  const [userRegister,{loading}]=useMutation(REGISTER_USER,{
    update(proxy,result){
      console.log(result)
      context.login(result.data.register)
    },
    
    onError(err){
      console.log(err.graphQLErrors[0].extensions.exception.errors)
       setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables:{
      username,
      password,
      confirmPassword,
      email
    }
  })

 // const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={email}
        onChangeText={(e) => setEmail(e)}
        placeholderText="Email"
        iconType="email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={username}
        onChangeText={(e) => setUsername(e)}
        placeholderText="username"
        iconType="username"
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

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(e) => setConfirmPassword(e)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
       {Object.keys(errors).length>0 &&(
        <View>
          {Object.values(errors).map(value=>
            (<Text key={value} style={styles.errorText}>{value} </Text>))}
         
        </View>
        
      )}

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => userRegister()}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
const REGISTER_USER= gql`
mutation register(
  $username:String!
  $password:String!
  $confirmPassword:String!
  $email:String!
  
)
{    register(
    registerInput: {
        username:$username,
        password:$password,
        confirmPassword:$confirmPassword,
        email:$email
    
}
){
  
    email
    username
    createdAt
    token
  }
}
`

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
