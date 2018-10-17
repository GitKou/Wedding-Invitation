import {
  gql
} from 'apollo-boost';

const getWishesQuery = gql `
  {
    wishes{
      guestName
      message
    }
  }
`

const addWishMutation = gql `
mutation AddWish($guestName: String!, $message: String!) {
    addWish(guestName: $guestName, message: $message) {
      guestName
      message
    }
  }    
`



export {
  getWishesQuery,
  addWishMutation,
}