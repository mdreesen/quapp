// import the gql tagged template functon
const { gql } = require('apollo-server-express');

// NOTES
// GraphQL uses Queries and Mutations
// Queries is getting data
// Mutations is creating, updating, deleting

// creating typeDefs
const typeDefs = gql `
type Query {
    helloWorld: String

    me: User

    users: [User]
    user(email: String!): User
    userTwo(username: String!): User

    posts(email: String): [Post]
    post(_id: ID!): Post
}

type Auth {
    token: ID!
    user: User
}

type User {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    password: String
    mood: String
    posts: [Post]
}

type Post {
    _id: ID
    postText: String
    createdAt: String
    email: String
  }

type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    userLogin(email: String!, password: String!): Auth

    post(postText: String!): Post
}
`;

// export the typeDefs
module.exports = typeDefs;