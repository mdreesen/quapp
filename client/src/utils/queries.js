// importing graphql
import gql from 'graphql-tag';

// querying single user
export const QUERY_USER = gql`
    query user($email: String!) {
        user(email: $email) {
        _id
        username
        email
    }
}
`;

// Getting user by username
export const QUERY_USERTWO = gql `
  query userTwo($username: String!) {
    userTwo(username: $username) {
      _id
      username
      firstname
      lastname
      email
      feelings {
        _id
        feelingText
        email
      }
    }
  }
`;

export const QUERY_USERS = gql `
  query {
    users {
      _id
      username
      firstname
      lastname
      email
      feelings {
        _id
        feelingText
        createdAt
        email
      }
    }
  }
`;

/* Using this query to find associated users */
export const QUERY_ASSOCIATED_USER = gql `
  query {
    users {
      _id
      email
    }
  }
`;

export const QUERY_FEELINGS = gql `
  query feelings($email: String) {
    feelings(email: $email) {
      _id
      email
      createdAt
      feelingText
    }
  }
`;
// querying single birthworker
export const QUERY_BIRTHWORKER = gql `
query birthworker($username: String!) {
    birthworker(username: $username) {
        _id
        username
        firstname
        lastname
        email
    }
  }
`;

// querying all birthworkers
export const QUERY_BIRTHWORKERS = gql `
query {
    birthworkers {
      _id
      username
      firstname
      lastname
      email
    }
  }
`;

// This is a different query
// We are not passing variables to this query
// we can just name this query and graphql will handle it
export const QUERY_ME = gql `
{
    me {
      _id
      username
      firstname
      lastname
      email
      feelings {
        _id
        email
        createdAt
        feelingText
      }
    }
  }
`;

// querying the logged in user
export const QUERY_ME_BASIC = gql `
{
    me {
      _id
      username
      firstname
      lastname
      email
      feelings {
        _id
        email
        createdAt
        feelingText
      }
    }
  }
`;

export const QUERY_ADMIN = gql `
{
  viewAdmin {
    _id
    username
    firstname
    lastname
    email
  }
}
`;