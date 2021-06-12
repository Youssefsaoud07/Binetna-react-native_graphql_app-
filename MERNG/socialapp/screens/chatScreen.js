import React from 'react'
import{View ,Text, Button, StyleSheet} from 'react-native'

const ChatScreen = () => {
    return (
        <View>
          <Text>Chat screen</Text>
          <Button
          title="click here"
          onPress={()=>alert ('button clicked')} />


        </View>
            
        
    )
}

export default ChatScreen
const styles = StyleSheet.create({
    container :{
        flex :1,
        alignItems :'center',
        justifyContent :'center',
        backgroundColor : 'white'
    
    }
})