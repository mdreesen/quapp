import gql from 'graphql-tag';

// -=- USER MUTATIONS -=-
export const LOGIN_USER = gql `
mutation userLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const ADD_USER = gql `
mutation($username: String!, $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    addUser(username: $username, firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      token
      user {
        _id
        username
        firstname
        lastname
        email
        password
      }
    }
  }
`;

export const ADD_POST = gql `
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      email
    }
  }
`;

export const ASSOCIATE_WITH_USER = gql `
  mutation associateUser($awuId: ID!) {
    associateUser(awuId: $awuId) {
      _id
      username
    }
  }
`;
