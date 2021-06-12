import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    InputField,
    InputWrapper,
    AddImage,
    SubmitBtn,
    SubmitBtnText,
    StatusWrapper,
  } from '../styles/AddPost';

const PostScreen = () => {
    const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
    return (
        <View style={styles.container}>
        <InputWrapper>
          {image != null ? <AddImage source={{uri: image}} /> : null}
  
          <InputField
            placeholder="What's on your mind?"
            multiline
            numberOfLines={4}
            value={post}
            
          />
          
            
          
            <SubmitBtn >
              <SubmitBtnText>Post</SubmitBtnText>
            </SubmitBtn>
          
        </InputWrapper>
        
        <ActionButton buttonColor="#2e64e5" >
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Take Photo"
            >
            <Icon name="camera-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Choose Photo"
            >
            <Icon name="md-images-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        
      </View>
    );
  };
  
  export default PostScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
   
  });