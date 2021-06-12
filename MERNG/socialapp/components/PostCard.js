import React from 'react'
import {Card, Container, Interaction, InteractionWrapper, PostImg, PostText, PostTime, UserImg, UserInfo, UserInfoText, UserName,InteractionText}
from '../styles/feedStyles';
 import Ionicons from 'react-native-vector-icons/Ionicons';
import { icons } from '../constants';
import moment from 'moment'

const PostCard = ({item}) => {
    return (
      <Card key={item.id} >
        <Card>
          <UserInfo>
            <UserImg source ={icons.user} />
             <UserInfoText>
               <UserName>{item.username}</UserName>
               <PostTime>{moment(item.createdAt).fromNow()}</PostTime>
             </UserInfoText>

          </UserInfo>
          <PostText>{item.body}</PostText>
          <PostImg source='' />
          <InteractionWrapper>
          <Interaction >
         <Ionicons name='heart-outline' size={25} color='#333' />
         <InteractionText>like</InteractionText>
       </Interaction>
       <Interaction>
         <Ionicons name="md-chatbubble-outline" size={25} />
         <InteractionText>comments</InteractionText>
       </Interaction>
          </InteractionWrapper>
        </Card>
        </Card>
       
    )
}

export default PostCard
