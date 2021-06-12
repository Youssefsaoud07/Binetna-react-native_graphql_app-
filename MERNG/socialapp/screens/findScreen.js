import React from 'react'
import{View ,Text, Button, StyleSheet} from 'react-native'

const FindScreen = () => {
    return (
        <View>
          <Text>Find screen</Text>
          <Button
          title="click here"
          onPress={()=>alert ('button clicked')} />


        </View>
            
        
    )
}

export default FindScreen
const styles = StyleSheet.create({
    container :{
        flex :1,
        alignItems :'center',
        justifyContent :'center',
        backgroundColor : 'white'
    
    }
})