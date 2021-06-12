import React, {createContext,useReducer,useState,useEffect,useContext} from 'react'
import jwtDecode from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage'
const initialState={
    user :null
}

if(AsyncStorage.getItem('jwtToken')){
    
       
        const aut = AsyncStorage.getItem('jwtToken');
        console.log ('tokenasync',aut)
        if (aut) {
          const decodedToken = jwtDecode(aut);
         if (decodedToken.exp *1000<Date.now()){
            AsyncStorage.removeItem('jwtToken')
        }else{
            initialState.user=decodedToken
       }
    }}
   
const AuthContext =createContext({
    user:null,
    login: (userData) =>{},
    logout: ()=>{},
    loading: false
})

function authReducer (state,action){
    switch (action.type) {
        case 'SIGNED':
           return {
               ...state,
               user: action.payload
            }
    
        case 'LOGIN':
           return {
               ...state,
               user: action.payload
            }
      
        case 'LOGOUT':
            return {
                ...state,
                user:null
            }

         default:
             return state
    }
}
function AuthProvider (props){
    const [state,dispatch] = useReducer(authReducer,initialState)

// useEffect(() => {

//     loadStorageData();
// }, [])
// async function loadStorageData(){
//     try {
//       //Try get the data from Async Storage
//       const aut = await AsyncStorage.getItem('jwtToken');
//       console.log ('tokenasync',aut)
//       if (aut) {
//         //If there are data, it's converted to an Object and the state is updated.
//         const decodedToken = jwtDecode(aut);
//         console.log('tokendecoded',decodedToken)
//         dispatch({
//             action :'LOGIN',
//             payload :decodedToken
//         })
//       }
//     } catch (error) {
//     } finally {
        
//       //loading finished
      
//     }
//   }



   async function login (userData){
    try{
      await  AsyncStorage.setItem('jwtToken',userData.token)
      
     
    }catch(err){
       console.log(err)
    }
   
    dispatch({
        action :'LOGIN',
        payload :userData
    })
    console.log('userdata:',AsyncStorage)
    

    
}

async function logout (){
    try{
        userToken= await  AsyncStorage.get('jwtToken') 
        dispatch ({
            action :'LOGOUT'
             
        })
         }catch(err){
           console.log(err)
         }
    
}

return (
    <AuthContext.Provider
    value={{
        user: state.user,
        login,
        logout
    }}
    {...props} />
)

}


export {AuthContext, AuthProvider }
