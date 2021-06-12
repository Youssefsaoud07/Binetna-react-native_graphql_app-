import {useQuery,gql} from '@apollo/client'
export const GET_POSTS= gql ` 
{getPosts
  
  {id,
  body,
  createdAt,
  username

}

}

`